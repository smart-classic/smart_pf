// Import the APIs we need.
var contextMenu = require("context-menu");
var request = require("request");
var selection = require("selection");
var data = require("self").data;
var os = require("observer-service");
var {Cc,Ci} =  require("chrome");
const LOAD_BACKGROUND = Ci.nsIRequest.LOAD_BACKGROUND;

function TracingListener(callback) {
    this.callback = callback;
    this.data = [];
};
TracingListener.prototype =  {
    onDataAvailable: function(req, context, inStream, offset, count) {
	console.log("oh boy data@"+offset+","+count);
	var bIS = Cc["@mozilla.org/binaryinputstream;1"].createInstance();
	bIS = bIS.QueryInterface(Ci.nsIBinaryInputStream);

	var bOS = Cc["@mozilla.org/binaryoutputstream;1"].createInstance();
	bOS = bOS.QueryInterface(Ci.nsIBinaryOutputStream);

	var SS = Cc["@mozilla.org/storagestream;1"].createInstance();
	SS = SS.QueryInterface(Ci.nsIStorageStream);

	bIS.setInputStream(inStream);
	SS.init(8192, count, null);

	bOS.setOutputStream(SS.getOutputStream(0));

	var data = bIS.readBytes(count);
	this.data.push(data);
	bOS.writeBytes(data, count);
	
	this.next.onDataAvailable(req, context, SS.newInputStream(0), offset, count);	
    },
    onStartRequest: function(req, context) {
	console.log(req);
	console.log(context);
	console.log(this.next);
	this.next.onStartRequest(req, context);
    },

    onStopRequest: function(req, context, statusCode) {
	this.data = this.data.join();
	this.next.onStopRequest(req, context, statusCode);
	this.callback(statusCode, this.data);
    },
    QueryInterface: function(aid) {
	if (aid.equals(Ci.nsIStreamListener) || aid.equals(Ci.nsISupports)) {
	    return this;
	}
	throw "Can't query as a " + aid;
    }
};


exports.main = function(options, callbacks) {
    console.log(options.loadReason);

    os.add("http-on-examine-response", function(s,d) {

	    var httpChannel = s.QueryInterface(Ci.nsIHttpChannel);
	    console.log(httpChannel.requestMethod + " " + httpChannel.name);
	    if (! httpChannel.name.match("login")) return;
		
	    var listener = new TracingListener(function(status, data){
		    console.log("LOGIN RECEIVED with status " + status+": " + data);
	    });


	    var traceableChannel = s.QueryInterface(Ci.nsITraceableChannel);
	    console.log("Got the TC: " + traceableChannel);
	    listener.next = traceableChannel.setNewListener(listener);
	    console.log("set a next " + listener.next + " via " + traceableChannel.setNewListener);
	    return;


	    if (!(httpChannel.loadFlags & LOAD_BACKGROUND)){
		    console.log("Not a bg req");
		    return;
	    }
	    var uri = httpChannel.URI.QueryInterface(Ci.nsIURI);
	    console.log("It's in the bg." +httpChannel.notificationCallbacks);

	    return;
	    if (httpChannel.notificationCallbacks == undefined) return;
	    
	    var xhrRequest = httpChannel.notificationCallbacks.getInterface(Ci.nsIXMLHttpRequest);
	    console.log("the xhr" + xhrRequest);
	    var oldorsc = xhrRequest.onreadystatechange;
	    xhrRequest.onreadystatechange = function(e){console.log("REQ RETURNED: "+ xhrRequest.responseText+xhrRequest.readystate); return oldorsc(e);};

	});
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
