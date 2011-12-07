// Import the APIs we need.
var request = require("request");
var {Cc,Ci} =  require("chrome");
const data = require("self").data;	 
const widgets = require("widget");
const windows = require("windows").browserWindows;
const Request = require('request').Request;
const pageMod = require("page-mod");

require("shared/Patient");
require("shared/PracticeManagement");
var pflistener = require("pflistener");
var PF = pflistener.PF;
var eventer = pflistener.pf_eventer;

eventer.on("PracticeManagement.UserLogin", function(r) {
    var defaults = pflistener.defaultsFromLogin(r);
    PFState.defaults = defaults;
    PFState.LoggedIn = true;
});

eventer.on("Patient.PatientBasicGetByPatientID", function(newpt){
    var pid = newpt.o_PatientBasic.lID;
    if (pid) {
	console.log("NOW using patinet: " + pid);

	PFState.defaults.lPatientID = PFState.defaults.i_lPatientID = pid;
	PFState.defaults.patient_name  = newpt.o_PatientBasic.strFirstName + 
	    " " + newpt.o_PatientBasic.strLastName;
    }
});
	
var PFState = { 
    LoggedIn: false, 
    PatientList: {},
    defaults: {}
};

var panel = require("panel").Panel({
    width: 400,
    height: 100,
    contentURL: data.url("plugin/pf_selector.html"),
    onShow: function(){
	panel.port.emit("show", {
	    LoggedIn: PFState.LoggedIn, 
	    Patient: PFState.defaults.patient_name});
    },
    contentScriptFile: [data.url('plugin/pf_selector.js')]
});

panel.port.on("launchapp", function(a) {
    console.log(a);
    console.log(data.url(a));
    windows.open(data.url(a));
});

panel.port.on("redirectToPF", function() {
    var d = Cc['@mozilla.org/appshell/window-mediator;1'].
	getService(Ci.nsIWindowMediator).
	getMostRecentWindow('navigator:browser').
	gBrowser.contentWindow.
	document; 

    d.location.href= "https://pfws.practicefusion.com/apps/ehr/main.html";
    panel.hide();
    return;
});


var widget = widgets.Widget({
  id: "smart-pf-launcher",
  label: "SMART PF Apps Dashboard",
  contentURL: data.url("plugin/smart.ico"),
  panel: panel
});

pageMod.PageMod({
    include: RegExp(data.url('apps/')+'.*.html'),
    contentScriptWhen: 'end',
    contentScriptFile: [data.url('plugin/app_bridge.js')],
    onAttach: function(worker) {
	
	worker.port.on("proxy_post", function(ajax_req) {
	    
	    var r = Request({
		url: ajax_req.url,
		contentType: "text/xml; charset=utf-8",
		headers: ajax_req.headers,
		content: ajax_req.data,
		onComplete: function (response) {
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
    }
});

exports.main = function(options, callbacks) {
    console.log("In PF Main.");
};
 
exports.onUnload = function (reason) {
    console.log(reason);
};