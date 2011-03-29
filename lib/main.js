// Import the APIs we need.
var contextMenu = require("context-menu");
var request = require("request");
var selection = require("selection");
var os = require("observer-service");
var {Cc,Ci} =  require("chrome");
const data = require("self").data;
	 
const widgets = require("widget");
const LOAD_BACKGROUND = Ci.nsIRequest.LOAD_BACKGROUND;
const soap = new Namespace('http://schemas.xmlsoap.org/soap/envelope/');
const pfman = new Namespace('http://PracticeFusion.com/BusinessLogic/WebServices/PracticeManagement');
const pfpt = new Namespace('http://PracticeFusion.com/BusinessLogic/WebServices/Patient');
const pf = new Namespace('http://PracticeFusion.com/BusinessLogic/WebServices');
const windows = require("windows").browserWindows;
const Request = require('request').Request;

//	  url: "http://smart-dev.dyndns.org:8001/sample_container/pf_container.html",

//var PatientList = {"123":{id:"123", givenName:"J", familyName:"M"}};
var PatientList = {};
var PFState = {LoggedIn: false};

var panel = require("panel").Panel({
	allow: {script: true},
	width: 400,
	height: 100,
	contentURL: data.url("pf_selector.html"),
	onShow: function(){
		console.log("showing panel: " + JSON.stringify(PatientList));	
		if (PFState.LoggedIn && this.height !== 150) {
			this.hide();
			this.height = 150;
			this.show();
			return;
		}
			
		this.postMessage({LoggedIn: PFState.LoggedIn, PatientList: PatientList});
	},
	contentScriptWhen: "ready",
	contentScriptFile: data.url('pf_script.js'),
	onMessage: function(m) {
		if (m.RedirectToPF) {
			var d = Cc['@mozilla.org/appshell/window-mediator;1'].getService(Ci.nsIWindowMediator).getMostRecentWindow('navigator:browser').gBrowser.contentWindow.document; 
			d.location.href= "https://pfws.practicefusion.com/apps/ehr/main.html";
			this.hide();
			return;
		}
		else if (m.LaunchApp)
		{
			windows.open("http://smart-dev.dyndns.org:8001/sample_container/pf_container.html?app="+
				encodeURIComponent(m.LaunchApp.app)+
				"&patient="+
				encodeURIComponent(m.LaunchApp.patient));
		}
	}
});

var widget = widgets.Widget({
  id: "smart-pf-launcher",
  label: "Launch the SMART PF Dashboard",
  contentURL: data.url("smart-q.ico"),
  panel: panel
});

var pageMod = require("page-mod");
pageMod.PageMod({
  include: "http://smart-dev.dyndns.org:8001/sample_container/*",
  contentScriptWhen: 'ready',
  contentScriptFile: [data.url('pf_script.js'), data.url('pf_attached.js')],
  onAttach: function(worker) {
	console.log("attached!");
	
	worker.on('message', function(m) {
		console.log(m);
		if (m.RecordInfo) {
			var pid = m.RecordInfo.patient;
			worker.pid = pid;
			m.response = {
				'record' : {
					'full_name' : PatientList[pid].givenName+" "+PatientList[pid].familyName,
					'id' : ''+pid
					 },
				'user' : {
					'full_name' : 'Logged.In.User',
					'id' : 'some_user_id'
					 }
			}
			worker.postMessage(m);
			return;			
		}
		
		var tempState = JSON.parse(JSON.stringify(PFState));
		tempState.patientID=worker.pid;
		console.log("Making MR Request");
		console.log(MedRequestPayload.makePostBody(tempState));
		var medReq = Request({
			url: MedRequestPayload.url,
			contentType: "text/xml; charset=utf-8",
			headers: MedRequestPayload.headers,
			content: MedRequestPayload.makePostBody(tempState),
			onComplete: function (response) {
				console.log("med req gave: " + response.text);
				var data = response.text.replace(/^<\?xml.*\?>/,"");
				console.log("data: " + data);
				var dxml = XML(data);				
				m.response = TestMP(dxml);
				worker.postMessage(m);

			}
		});
		medReq.post();
		});
  }
});

	
function TracingListener(callback) {
	this.init(callback);
};

TracingListener.prototype =  {
	init: function(callback) {
	    this.callback = callback;
		this.data = [];
	},
	
	onDataAvailable: function(req, context, inStream, offset, count) {
		var bIS = Cc["@mozilla.org/binaryinputstream;1"].createInstance();
		bIS = bIS.QueryInterface(Ci.nsIBinaryInputStream);

		var bOS = Cc["@mozilla.org/binaryoutputstream;1"].createInstance();
		bOS = bOS.QueryInterface(Ci.nsIBinaryOutputStream);

		var SS = Cc["@mozilla.org/storagestream;1"].createInstance();
		SS = SS.QueryInterface(Ci.nsIStorageStream);

		SS.init(8192, count, null);
		bIS.setInputStream(inStream);
		bOS.setOutputStream(SS.getOutputStream(0));

		var data = bIS.readBytes(count);
		this.data.push(data);
		bOS.writeBytes(data, count);
		
		this.next.onDataAvailable(req, context, SS.newInputStream(0), offset, count);	
	},
	
    onStartRequest: function(req, context) {
		this.next.onStartRequest(req, context);
	},	

    onStopRequest: function(req, context, statusCode) {
		this.data = this.data.join("");
		this.next.onStopRequest(req, context, statusCode);
		var posted = this.readPostTextFromRequest(req, context, statusCode);

		this.callback(statusCode, this.data, posted);
	},
	
    QueryInterface: function(aid) {
		if (aid.equals(Ci.nsIStreamListener) || aid.equals(Ci.nsISupports)) {
			return this;
		}
		throw "Can't query as a " + aid;
    },

    readPostTextFromRequest : function(request, context) {
		try
		{
			var is = request.QueryInterface(Ci.nsIUploadChannel).uploadStream;
			if (is)
			{
				var ss = is.QueryInterface(Ci.nsISeekableStream);
				var prevOffset;
				if (ss)
				{
					prevOffset = ss.tell();
					ss.seek(Ci.nsISeekableStream.NS_SEEK_SET, 0);
				}

				// Read data from the stream..
				var charset = "UTF-8";
				var text = this.readFromStream(is, charset, true);

				// Seek locks the file so, seek to the beginning only if necko hasn't read it yet,
				// since necko doesn't seek to 0 before reading (at lest not till 459384 is fixed).
				if (ss && prevOffset == 0) 
					ss.seek(Ci.nsISeekableStream.NS_SEEK_SET, 0);

				return text;
			}
			else {
				console.log("Failed to Query Interface for upload stream.\n");
			}
		}
        catch(exc)
        {
            console.log(exc);
        }

        return null;
    },
	
    readFromStream : function(stream, charset, noClose) {
		var sis = Cc["@mozilla.org/binaryinputstream;1"].createInstance();
		sis = sis.QueryInterface(Ci.nsIBinaryInputStream);
        sis.setInputStream(stream);

        var segments = [];
        for (var count = stream.available(); count; count = stream.available())
            segments.push(sis.readBytes(count));

        if (!noClose)
            sis.close();

        var text = segments.join("");
        return text;
    }
};

var PFListener = function(){};
PFListener.prototype = {
	init: function() {
		var _pfl = this;
		
		os.add("http-on-examine-response", function(s,d) {
			s.QueryInterface(Ci.nsIHttpChannel);
			s.QueryInterface(Ci.nsITraceableChannel);
			if (! s.name.match(_pfl.urlRegex)) return;
		
			var listener = new TracingListener(function(status, data, post){
				data = data.replace(/^<\?xml.*\?>/,"");
				
				var dxml = XML(data);				
				
				if (post !== null) {
					var i = post.search("<");
					if (i !== -1) post = XML(post.substr(i));
				}

				_pfl.httpCallback(dxml, post);
			});
			
			listener.next = s.setNewListener(listener);		
		});	
	}
};

var LoginListener = function() {
	this.init();
};

LoginListener.prototype = new PFListener();
LoginListener.prototype.urlRegex = /practiceManagement.asmx/;
LoginListener.prototype.httpCallback = function(responseXML, postBody) {
	
	var isLogin = !!responseXML.soap::Body.pfman::UserLoginResponse[0];
	
	if (!isLogin) return;
	
	var isSuccess = (responseXML.soap::Body.pfman::UserLoginResponse.pfman::UserLoginResult.pfman::bSuccess=="true");
	if (!isSuccess) return;
	
	var token = responseXML.soap::Body.pfman::UserLoginResponse.pfman::o_Session.pfman::strToken.toString();
	var userID = responseXML.soap::Body.pfman::UserLoginResponse.pfman::o_Session.pfman::lUserID.toString();
	var practiceID = responseXML.soap::Body.pfman::UserLoginResponse.pfman::o_UserProfile.pfman::Practice.pfman::lID.toString();
	console.log("Token: " + token);
	console.log("user ID: " + userID);
	PFState.token = token;
	PFState.userID = userID;
	PFState.practiceID = practiceID;
	
	var patients =  responseXML.soap::Body.pfman::UserLoginResponse.pfman::o_UserProfile.pfman::Practice.pfman::arrPatients.pfman::BL_PatientSummary;
	console.log("patients: " + patients.toXMLString());
	for each(var p in patients) {
			var pobj = {
				id: p.pfman::lID.toString(),
				givenName: p.pfman::strFirstName.toString(),
				familyName: p.pfman::strLastName.toString()
			};
			console.log("Got a patient summarized: " + pobj.id+pobj.givenName);
			if (PatientList[pobj.id] === undefined) {
				PatientList[pobj.id] = pobj;
			}			
	}
	PFState.LoggedIn = true;
	widget.contentURL = data.url("smart.ico");
	widget.click();
};

var LoginCompleteListener = function() {
	this.complete = false;
	this.init();
};

LoginCompleteListener.prototype = new PFListener();
LoginCompleteListener.prototype.urlRegex = /labResult.asmx/;
LoginCompleteListener.prototype.httpCallback = function(responseXML, postBody) {
	if (!this.complete) {
		console.log("Finished login!");
		widget.panel.show();
		this.complete = true;
	}
};


var PatientSummaryListener = function() {
	this.init();
};

PatientSummaryListener.prototype = new PFListener();
PatientSummaryListener.prototype.urlRegex = /patient.asmx/;
PatientSummaryListener.prototype.httpCallback = function(responseXML, postBody) {
	var patient_id=  postBody.soap::Body.pfpt::PatientAdvancedDirectiveGetAllByPatientID.pfpt::i_lPatientID.toString();
	console.log("Loaded patient: " + patient_id);
};

var MedRequestPayload = {
	url: "https://pfws.practicefusion.com/emr/2.0.40.0/chart.asmx",
	headers: {"SOAPAction": "http://PracticeFusion.com/BusinessLogic/WebServices/GetPatientMedications_new"},
	makePostBody: function(values) {
		var body = <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:s="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	  <SOAP-ENV:Body>
		<tns:GetPatientMedications_new xmlns:tns="http://PracticeFusion.com/BusinessLogic/WebServices">
		  <tns:i_Session>
			<tns:strToken>{values.token}</tns:strToken>
			<tns:lUserID>{values.userID}</tns:lUserID>
		  </tns:i_Session>
		  <tns:i_lPracticeID>{values.practiceID}</tns:i_lPracticeID>
		  <tns:i_lPatientID>{values.patientID}</tns:i_lPatientID>
		  <tns:i_bIncludePrescriptions>true</tns:i_bIncludePrescriptions>
		</tns:GetPatientMedications_new>
	  </SOAP-ENV:Body>
	</SOAP-ENV:Envelope>

		return body.toXMLString();
	}
}




exports.main = function(options, callbacks) {
	var ll = new LoginListener();
	var ll = new LoginCompleteListener();
	var ps = new PatientSummaryListener();
	console.log("ps url: " + ps.urlRegex);
	console.log("ll url: " + ll.urlRegex);
	
    // Create a new context menu item.
    var menuItem = contextMenu.Item({
 
	    label: "Translate Selection",
 
	    // Show this item when a selection exists.
 
	    context: contextMenu.SelectionContext(),
 
	    // When this item is clicked, post a message to the item with the
	    // selected text and current URL.
	    contentScript: 'on("click", function () {' +
                   '  var text = window.getSelection().toString();' +
                   '  postMessage(text); console.log(text);' +
	    '});',
 
	    // When we receive the message, call the Google Translate API with the
	    // selected text and replace it with the translation.
	    onMessage: function (text) {
		if (text.length == 0) {
		    throw ("Text to translate must not be empty");
		}
		console.log("input: " + text)
		var req = request.Request({
			url: "http://ajax.googleapis.com/ajax/services/language/translate",
			content: {
			    v: "1.0",
			    q: text,
			    langpair: "|en"
			},
			onComplete: function (response) {
			    translated = response.json.responseData.translatedText;
			    console.log("output: " + translated)
			    selection.text = translated;
			}
		    });
		req.get();
	    }
	});
};
 
exports.onUnload = function (reason) {
    console.log(reason);
};

function TestMP(t) {

var meds = t.soap::Body.pf::GetPatientMedications_newResponse.pf::o_arrPatientMedication.pf::BL_PatientMedication;
console.log("meds: " + meds.length());
var fm = [];
	for each(var m in meds) {
			var mobj = {
				id: m.pf::lID.toString(),
				name: m.pf::strMedName.toString(),
				strength: m.pf::strStrength.toString(),
				comments: m.pf::strComments.toString(),
				startDate: m.pf::dtStartDate.toString(),
				stopDate: m.pf::dtStopDate.toString(),
				code: m.pf::strDrugCode.toString(),
				sig: m.pf::strSigProvider.toString()
			};
			if (!!mobj.startDate.match('9999')) 
				mobj.startDate = "";
				
			if (!!mobj.stopDate.match('9999')) 
				mobj.stopDate = "";
				
			console.log("Got a med summarized: " + mobj.id+mobj.name + mobj.strength+mobj.startDate);
			fm.push(mobj);
	}
	
	return SMARTMedResponse(fm);
};

function SMARTMedResponse(meds) {
	var medfill = "";
	for (var i = 0; i < meds.length; i++) {
		var m = meds[i];
		var med =  <sp:Medication xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"  xmlns:sp="http://smartplatforms.org/terms#"
  xmlns:dcterms="http://purl.org/dc/terms/">
      <sp:drugName>
        <sp:CodedValue>
          <sp:code rdf:resource="http://rxnav.nlm.nih.gov/REST/ndc/{m.code}"/>
          <dcterms:title>{m.name} {m.strength}</dcterms:title>
        </sp:CodedValue>
      </sp:drugName>
      <sp:startDate>{m.startDate}</sp:startDate>
      <sp:endDate>{m.stopDate}</sp:endDate>
      <sp:instructions>{m.sig}</sp:instructions>
   </sp:Medication>
		medfill += med.toXMLString();
	}
	
	b = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">'+medfill+'</rdf:RDF>';
	console.log("Meds are: " + b);
	return b;
}