var wsdl;
var util = require('util');
var fs = require('fs'),
    xml2js = require('xml2js');

var parser = new xml2js.Parser({explicitArray: true});

var wsdl = {};

var arguments = process.argv;
var infile = arguments[2];
var libname = infile.split('.')[0];

fs.readFile(infile, function(err, data) {
    parser.parseString(data, function (err, r) {

	wsdl.types = {};

	var addTypes = function(k, t) {
	    if (t === undefined) return;
	    t.forEach(function(type){
		var v = {};
		v[k] = [type];
		wsdl.types[type['@']['name']] = v;
	    });	    
	};
	addTypes('s:element', r['wsdl:types'][0]['s:schema'][0]['s:element']);
	addTypes('s:simpleType', r['wsdl:types'][0]['s:schema'][0]['s:simpleType']);
	addTypes('s:simpleType', [
	    {'@':{name: 's:string'}},
	    {'@':{name: 's:float'}},
	    {'@':{name: 's:dateTime'}},
	    {'@':{name: 's:boolean'}},
	    {'@':{name: 's:long'}},
	    {'@':{name: 's:int'}}
	]);
	addTypes('s:complexType', r['wsdl:types'][0]['s:schema'][0]['s:complexType']);

	wsdl.operations = {};
	var ports = r['wsdl:portType'];
	ports.forEach(function(port) {
	    var operations = port['wsdl:operation'];
	    if (!operations) return;

	    operations.forEach(function(operation) {
		wsdl.operations[operation['@']['name']] = operation;		
	    });
	});

	wsdl.services = {};
	var ports= r['wsdl:service'][0]['wsdl:port'];
	ports.forEach(function(port) {
	    Object.keys(port).forEach(function(k) {
		if (k === '@') return;
		wsdl.services[port['@'].binding] = port[k][0]['@'].location;
	    });
	});

	wsdl.messages = {};
	var messages= r['wsdl:message'];
	messages.forEach(function(message) {
	    if (message['wsdl:part'])
		wsdl.messages[message['@'].name] = message['wsdl:part'][0]['@'].element;
	});

	var bindings = r['wsdl:binding'];
	bindings.forEach(function(binding) {
	    var operations = binding['wsdl:operation'];
	    if (!operations) return;
	    
	    operations.forEach(function(operation) {
		if ( operation['soap12:operation'] ) {
		    wsdl.operations[operation['@'].name].soapAction = operation['soap12:operation'][0]['@'].soapAction;
		    wsdl.operations[operation['@'].name].service = wsdl.services[binding['@'].type];
		}
	    });
	});

	Object.keys(wsdl.operations).forEach(function(k){
	    var o = wsdl.operations[k];
	    var inmsg = striptns(o['wsdl:input'][0]['@'].message);
	    o.intype = wsdl.messages[inmsg];

	    var outmsg = striptns(o['wsdl:output'][0]['@'].message);
	    o.outtype = wsdl.messages[outmsg];
	});


/*
	var b = new WSDL_Interface(wsdl, {
	    i_lProviderID: 123,
	    strToken: "ha",
	    dtUTCExpiryDate: "ha",
	    lWSCallSequenceNumber: "1",
	    lUserID:"2"
	});

	b.make_call('TemplateSummaryGetBySearchString', {
	    i_strSearchString: "S",
	    i_eTemplateFieldToSearch: "O"
	});
*/
	console.log("var PF = (PF || {});");
	console.log("PF." + libname+" = (PF." + libname+" || {});");
	console.log("PF." + libname+".wsdl = "+JSON.stringify(wsdl, null, 2));
	console.log("WSDL_Interface.add(PF."+libname+");");

    });
});


striptns = function(t) {
    var m = t.match(/^tns:(.*)/);
    if (m !== null) return m[1];
    return t;
};
