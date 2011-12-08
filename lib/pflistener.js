// Import the APIs we need.
var os = require("observer-service");
var {Cc,Ci} =  require("chrome");
var domparser = Cc["@mozilla.org/xmlextras/domparser;1"].createInstance(Ci.nsIDOMParser);  

require("shared/Patient");
require("shared/PracticeManagement");
var PF = require("shared/pf_wsdl").PF_Interfaces;
exports.PF = PF;
	
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
	}
        catch(exc)
        {
	    console.log("Failed to read post text");
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


var PF_Eventer = function(){

    var subs = {};

    this.on  = function(type, listener) {
	if (!subs[type])
	    subs[type] = [];
	subs[type].push({times: -1, signal: listener});
	console.log("Added listener for " + type);
	return;
    };

    this.once = function(type, listener) {
	if (!subs[type])
	    subs[type] = [];
	subs[type].push({times: 1, signal: listener});
	console.log("Added once-listnere for " + type);
    };

    this.removeListener = function(type, listener) {
	if (!subs[type]) return;
	
	var retained = [];
	for (var i=0; i < subs[type][i]; i++) {
	    if (subs[type][i].signal !== listener) {
		retained.push(subs[type][i]);
	    }
	}
	
	subs[type] = retained;	
	console.log("Removed listnere for " + type);
    };

    var listenersFor = function(type) {
	var ret  = subs[type] || [];
	return ret;
    };
    
    this.anyListeners = function(type) {
	return (listenersFor(type).length > 0);
    };

    this.emit = function(type, val) {
	listenersFor(type).forEach(
	    function(l){
		l.signal(val);
		if (l.count === 1)
		    _pfl.removeListener(type, l.signal);
	    });
    };

    var _pfl = this;

    os.add("http-on-examine-response", function(s,d) {
	s.QueryInterface(Ci.nsIHttpChannel);
	s.QueryInterface(Ci.nsITraceableChannel);
	var pfService = s.name.match(/.*\/emr.*\/(.*?)\.asmx/i);

	if (pfService === null) 
	    return;

	pfService = pfService[1];

	var routeResponse = function(status, data, post){
	    data = data.replace(/^<\?xml.*\?>/,"");
	    var replydom = domparser.parseFromString(data, "application/xml");
	    var pfResponse = replydom.documentElement.firstElementChild.firstElementChild;
	    var responseType = pfResponse.nodeName;
	    
	    if (PF[pfService] && PF[pfService].wsdl.types[responseType]) {		
		var pfOperation = Object.keys(PF[pfService].wsdl.operations).filter(
		    function (k) {
			var o = PF[pfService].wsdl.operations[k];
			return (o.outtype === "tns:"+responseType || 
				o.inttype === "tns:"+responseType);
		});

//		console.log("found op " + pfOperation);
		
		if (pfOperation.length === 0) {
		    console.log("no operation for for " + pfService+"." + responseType);
		    return;
		} 
		else if (pfOperation.length > 1) {
		    console.log("Ambiguous mapping for " + pfOperation);
		}

		var evName = pfService + "." + pfOperation[0];

		// Optimization:  only parse the payload 
		// if someone is listening! 
		if (! _pfl.anyListeners(evName)) 
		    return;
		
		var jsonpayload = PF[pfService].interface.
		    parse_type(responseType, pfResponse);
		
		_pfl.emit(evName, jsonpayload);

	    }
	};
	
	var listener = new TracingListener(routeResponse);
	listener.next = s.setNewListener(listener);		
    });	
};



var pf_eventer = new PF_Eventer();

var defaultsFromLogin  = function(responseJSON) {

    var defaults = {
	strToken: responseJSON.o_Session.strToken,
	dtUTCExpiryDate: responseJSON.o_Session.dtUTCExpiryDate,
	lUserID: responseJSON.o_Session.lUserID,
	lWSCallSequenceNumber: responseJSON.o_Session.lWSCallSequenceNumber,

	lUserID: responseJSON.o_UserProfile.User.lID,
	lPracticeID: responseJSON.o_UserProfile.Practice.lID,
	lProviderID: responseJSON.o_UserProfile.User.Provider.lID,

	i_lUserID: responseJSON.o_UserProfile.User.lID,
	i_lPracticeID: responseJSON.o_UserProfile.Practice.lID,
	i_lProviderID: responseJSON.o_UserProfile.User.Provider.lID
    };

    console.log(JSON.stringify(defaults));
    return defaults;
}

exports.defaultsFromLogin = defaultsFromLogin;
exports.pf_eventer = pf_eventer;

