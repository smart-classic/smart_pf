// Import the APIs we need.
var contextMenu = require("context-menu");
var request = require("request");
var selection = require("selection");
var os = require("observer-service");
var {Cc,Ci} =  require("chrome");
var domparser = Cc["@mozilla.org/xmlextras/domparser;1"].createInstance(Ci.nsIDOMParser);  

require("Patient");
require("PracticeManagement");

var pflistener = require("pflistener");
var PF = pflistener.PF;
var eventer = pflistener.pf_eventer;

console.log( Object.keys(PF) );
const data = require("self").data;
	 
const widgets = require("widget");
const LOAD_BACKGROUND = Ci.nsIRequest.LOAD_BACKGROUND;
const soap = new Namespace('http://schemas.xmlsoap.org/soap/envelope/');
const pfman = new Namespace('http://PracticeFusion.com/BusinessLogic/WebServices/PracticeManagement');
const pfpt = new Namespace('http://PracticeFusion.com/BusinessLogic/WebServices/Patient');
const pf = new Namespace('http://PracticeFusion.com/BusinessLogic/WebServices');
const windows = require("windows").browserWindows;
const Request = require('request').Request;
const pageMod = require("page-mod");

//	  url: "http://smart-dev.dyndns.org:8001/sample_container/pf_container.html",
//var PFState = {LoggedIn: true, PatientList: {"123":{id:"123", givenName:"J", familyName:"M"}}};
var PFState = { 
    LoggedIn: false, 
    PatientList: {}
	/*
    defaults: {
	'strToken':"cd8a0f4b1266438c955e5fc89424ea0f5e45c084af3b415f88538576f1d4fd9a",
	'dtUTCExpiryDate':"9999",
	'lWSCallSequenceNumber':0,
	'lUserID':220707,
	'lPatientID': 29524145,
	'i_lPatientID': 29524145,
	'i_lProviderID': 220765,
	'i_lPracticeID': 120667,
	'patient_name': 'John Smith'
    }
    */
};

var panel = require("panel").Panel({
    width: 400,
    height: 100,
    contentURL: data.url("pf_selector.html"),
    onShow: function(){
	console.log("showing panel: " + JSON.stringify({LoggedIn: PFState.LoggedIn, Patient: PFState.defaults.patient_name}));
//	if (PFState.LoggedIn && this.height !== 150) {
//	    this.hide();
//	    this.height = 150;
//	    this.show();
//	    return;
//	}
	panel.port.emit("show", {LoggedIn: PFState.LoggedIn, Patient: PFState.defaults.patient_name});
    },
    contentScriptFile: [data.url('pf_panel.js')]
});

panel.port.on("launchapp", function(a) {
    console.log(a);
    console.log(data.url(a));
    windows.open(data.url(a));

		 /*
		   +"?app="+
		   encodeURIComponent(m.LaunchApp.app)+
		   "&patient="+
		   encodeURIComponent(m.LaunchApp.patient));
		 */
});

panel.port.on("redirectToPF", function() {
    var d = Cc['@mozilla.org/appshell/window-mediator;1'].getService(Ci.nsIWindowMediator).getMostRecentWindow('navigator:browser').gBrowser.contentWindow.document; 
    d.location.href= "https://pfws.practicefusion.com/apps/ehr/main.html";
    panel.hide();
    return;
});


var widget = widgets.Widget({
  id: "smart-pf-launcher",
  label: "SMART PF Apps Dashboard",
  contentURL: data.url("smart.ico"),
  panel: panel
});



// pageMod.PageMod({
  // include: "https://pfws.practicefusion.com/apps/ehr/main.html",
  // contentScriptWhen: 'ready',
  // contentScript: 'alert("Were in."); window.sendToJavaScript = function(value) {alert("from AS: " + value);}; alert("Were set.");'
// });



pageMod.PageMod({
    include: /.*chart_old_vitals.html.*/,
    contentScriptWhen: 'end',
    contentScriptFile: [data.url('pf_script.js')],
    onAttach: function(worker) {

	worker.port.on("proxy_post", function(ajax_req) {
	    
	    var r = Request({
		url: ajax_req.url,
		contentType: "text/xml; charset=utf-8",
		headers: ajax_req.headers,
		content: ajax_req.data,
		onComplete: function (response) {
		    console.log("proxied req gave: " + response.text);
		    worker.port.emit("proxy_response", {
			id: ajax_req.id, 
			data: response.text,
			status: response.status});
		}
	    });

	    r.post();
	});

	worker.port.emit("defaults", PFState.defaults);
	
	return;
	console.log("attached!");	
	worker.on('message', function(m) {
	    console.log(m);
	    if (m.RecordInfo) {
		var pid = m.RecordInfo.patient;
		worker.pid = pid;
		m.response = {
		    'record' : {
			'full_name' : PFState.PatientList[pid].givenName+" "+PFState.PatientList[pid].familyName,
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



eventer.on("PracticeManagement.UserLogin", function(r) {
    var defaults = pflistener.defaultsFromLogin(r);
    PFState.defaults = defaults;
    PFState.LoggedIn = true;
});

eventer.on("Patient.PatientBasicGetByPatientID", function(newpt){
    console.log("Loaded new patient.");
    var pid = newpt.o_PatientBasic.lID;
    if (pid) {
	console.log("NOW using patinet: " + pid);
	PFState.defaults.lPatientID = PFState.defaults.i_lPatientID = pid;
	PFState.defaults.patient_name  = newpt.o_PatientBasic.strFirstName+ " " + newpt.o_PatientBasic.strLastName;
    }
});

	
exports.main = function(options, callbacks) {
    console.log("In PF Main.");
};
 
exports.onUnload = function (reason) {
    console.log(reason);
};


