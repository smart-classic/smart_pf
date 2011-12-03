
var wsdl;
var util = require('util');
var fs = require('fs'),
    xml2js = require('xml2js');

var parser = new xml2js.Parser();

var wsdl = {};

fs.readFile('Chart.asmx?WSDL', function(err, data) {
    parser.parseString(data, function (err, r) {

	wsdl.types = {};

	var addTypes = function(k, t) {
	    if (t === undefined) return;
	    if (t.constructor !== Array)
		t = [t];
	    t.forEach(function(type){
		var v = {};
		v[k] = type;
		wsdl.types[type['@']['name']] = v;
	    });	    
	};

	addTypes('s:element', r['wsdl:types']['s:schema']['s:element']);
	addTypes('s:simpleType', r['wsdl:types']['s:schema']['s:simpleType']);
	addTypes('s:simpleType', [
	    {'@':{name: 's:string'}},
	    {'@':{name: 's:dateTime'}},
	    {'@':{name: 's:boolean'}},
	    {'@':{name: 's:long'}},
	    {'@':{name: 's:int'}}
	]);
	addTypes('s:complexType', r['wsdl:types']['s:schema']['s:complexType']);

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
	var ports= r['wsdl:service']['wsdl:port'];
	ports.forEach(function(port) {
	    Object.keys(port).forEach(function(k) {
		if (k === '@') return;
		wsdl.services[port['@'].binding] = port[k]['@'].location;
	    });
	});

	wsdl.messages = {};
	var messages= r['wsdl:message'];
	messages.forEach(function(message) {
	    wsdl.messages[message['@'].name] = message['wsdl:part']['@'].element;
	});


	wsdl.bindings = {};
	var bindings = r['wsdl:binding'];
	bindings.forEach(function(binding) {
	    var operations = binding['wsdl:operation'];
	    if (!operations) return;

	    
	    operations.forEach(function(operation) {
		if ( operation['soap12:operation'] ) {
		    wsdl.operations[operation['@'].name].soapAction = operation['soap12:operation']['@'].soapAction;
		    wsdl.operations[operation['@'].name].service = wsdl.services[binding['@'].type];
		}
	    });
	});

	Object.keys(wsdl.operations).forEach(function(k){
	    var o = wsdl.operations[k];
	    var inmsg = striptns(o['wsdl:input']['@'].message);
	    o.intype = wsdl.messages[inmsg];

	    var outmsg = striptns(o['wsdl:output']['@'].message);
	    o.outtype = wsdl.messages[outmsg];
	});

	var b = new WB(wsdl, {
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

    });
});

var WB = function(wsdl, defaults) {
    this.wsdl = wsdl;
    this.defaults = defaults || {};
};

striptns = function(t) {
    var m = t.match(/^tns:(.*)/);
    if (m !== null) return m[1];
    return t;
};

WB.prototype.serialize_type  = function(type, json_values, path_here) {
//    console.log(type);

    if (type.constructor === String) {
	type = striptns(type);
	type = this.wsdl.types[type];
//	console.log(type);
    }

    if ( type['s:element'] ) {
	var e = type['s:element'];
	var n = e['@'].name;
	path_here = [n];

	var v;

	if ( e['@']['type'] ) {
	    v = this.serialize_type(this.wsdl.types[e['@']['type']], json_values, path_here);
	}
	else if ( e['s:simpleType'] ) {
	    v =  this.serialize_simple_type(e['s:simpleType'], json_values, path_here);
	}
	else if ( e['s:complexType'] ) {
	    v =  this.serialize_complex_type(e['s:complexType'], json_values, path_here);
	}

	return this.xinset(n,v, path_here.length);

    }

    else if ( type['s:simpleType'] ) {
	return this.serialize_simple_type(type['s:simpleType'], json_values, path_here);
    }
    else if ( type['s:complexType'] ) {
	return this.serialize_complex_type(type['s:complexType'], json_values, path_here);
    }

};

WB.prototype.serialize_simple_type = function(type, json_values, path_here) {
    var v = json_values;
//    console.log("simple for "+JSON.stringify(type) + ": "  + path_here);
    if (v=== undefined || v.constructor !== String) {
	var d = this.defaults[path_here[path_here.length - 1]];
	if (d === undefined) {
	    throw "Simple type value not found: " + path_here.join(" -> ");
	}
	else
	    json_values = d;
    }
    
    

    // todo check enumeration restrictions here too
    return json_values;
};

WB.prototype.serialize_complex_type = function(type, json_values, path_here) {
    var ret = [];
    var _wb = this;

    type['s:sequence']['s:element'].forEach(function(e) {
	var n = e['@'].name;
	var t = e['@'].type;
	
	var use_vals = json_values ? json_values[n] : undefined;

	try {
	    path_here.push(n);
	    var v = _wb.serialize_type(t, use_vals, path_here)
	    ret.push(_wb.xinset(n,v, path_here.length));
	} catch(err) {
	    if (e['@'].minOccurs !== '0')
		throw err
	} finally {
	    path_here.pop(n);
	}

    });

    return ret.join('');
};

WB.prototype.xinset = function(n, v, d) {
    v = v.toString();

    var indent = '';
    var offset  = (v.match(/\n/) ? '\n' : '') ;

    for (var i = 0; i < d; i++)
	indent += '  ';
    return (indent + '<'+n+'>' +
	    offset +
	    v + 
	    (offset? indent : '')+
	    '</'+n+'>\n');
};

WB.prototype.make_call = function(call, json_values) {
    var o = this.wsdl.operations[call];
    var body = this.serialize_type(o.intype, json_values);

    var env_head = '\n\
<?xml version="1.0" encoding="utf-8"?>\n\
<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">\n\
<soap12:Body xmlns="http://PracticeFusion.com/BusinessLogic/WebServices">\n';
    var env_foot = '</soap12:Body>\n\
</soap12:Envelope>\n';

    var payload = env_head + body + env_foot;

    var headers = [
	'soapaction: '+o.soapAction,
	'Content-Length: '+ payload.length
    ];


    console.log(o.service);
    console.log(headers);
    console.log(payload);
}