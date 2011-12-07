var PF = (PF || {});

var WSDL_Interface = function(wsdl, defaults) {
    this.wsdl = wsdl;
    this.defaults = defaults || {};
};

striptns = function(t) {
    var m = t.match(/^tns:(.*)/);
    if (m !== null) return m[1];
    return t;
};

WSDL_Interface.prototype.serialize_type  = function(type, json_values, path_here) {
    if (type.constructor === String) {
	type = striptns(type);

	type = this.wsdl.types[type];
    }
    if (type.constructor === Array) 
	type = type[0];

    if ( type['s:element'] ) {
	var e = type['s:element'][0];
	var n = e['@'].name;
	path_here = [n];

	var v;

	if ( e['@']['type'] ) {
	    v = this.serialize_type(this.wsdl.types[e['@']['type']], json_values, path_here);
	}
	else if ( e['s:simpleType'] ) {
	    v =  this.serialize_simple_type(e['s:simpleType'][0], json_values, path_here);
	}
	else if ( e['s:complexType'] ) {
	    v =  this.serialize_complex_type(e['s:complexType'][0], json_values, path_here);
	}

	return this.xinset(n,v, path_here.length);
    }

    else if ( type['s:simpleType'] ) {
	return this.serialize_simple_type(type['s:simpleType'][0], json_values, path_here);
    }
    else if ( type['s:complexType'] ) {
	return this.serialize_complex_type(type['s:complexType'][0], json_values, path_here);
    }

};

WSDL_Interface.prototype.serialize_simple_type = function(type, json_values, path_here) {
    var v = json_values;
    if (v=== undefined ) {

	var d = this.defaults[path_here[path_here.length - 1]] ||
	    PF.defaults[path_here[path_here.length - 1]];
	
	if (d === undefined) {
	    throw "simple_type_undefined";
	}
	else
	    json_values = d;
    }
    
    // todo check enumeration restrictions here too
//    console.log(type);
    if (type['@']['name']==='s:dateTime' && json_values.constructor ===  Date)
	return json_values.toISOString();
    return json_values;
};

WSDL_Interface.prototype.serialize_complex_type = function(type, json_values, path_here) {
    var ret = [];
    var _wb = this;

    type['s:sequence'][0]['s:element'].forEach(function(e) {
	var n = e['@'].name;
	var t = e['@'].type;
	
	var use_vals = json_values ? json_values[n] : undefined;

	try {
	    path_here.push(n);
	    var v = _wb.serialize_type(t, use_vals, path_here)
	    ret.push(_wb.xinset(n,v, path_here.length));
	} catch(err) {
	    //cchildonsole.log("failed on " + path_here.join("->") + " " + n + err);
	    if (e['@'].minOccurs !== '0' || err.toString() !== "simple_type_undefined") {
		console.log(e);
		throw err
	    }
	} finally {
	    path_here.pop(n);
	}

    });

    return ret.join('');
};

WSDL_Interface.prototype.xinset = function(n, v, d) {
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

WSDL_Interface.prototype.call_helper = function(call, json_values) {
    var o = this.wsdl.operations[call];
    var body = this.serialize_type(o.intype, json_values);
    var _wb = this;
    

    var env_head = '<?xml version="1.0" encoding="utf-8"?>\n\
<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">\n\
<soap12:Body xmlns="http://PracticeFusion.com/BusinessLogic/WebServices">\n';
    var env_foot = '</soap12:Body>\n\
</soap12:Envelope>\n';

    var payload = env_head + body + env_foot;

    var headers = {
	'soapaction':o.soapAction,
	'Content-Length': payload.length,
	'Content-type': 'application/soap+xml; charset=utf-8'
    };

    var ajax = {
	url: o.service,
	headers: headers,
	type: 'POST',
	data: payload,
	processData: false
    }

    var parser = function(r){
	r = new DOMParser().parseFromString(r,"text/xml");
	var ret = _wb.parse_type(
	    o.outtype, 
	    r.documentElement.firstElementChild.firstElementChild
	);
	return ret;
    }

    return {request: ajax, parser: parser};
};

WSDL_Interface.prototype.call_from_addon = function(call, json_values) {

};

WSDL_Interface.prototype.call = function(call, json_values) {
    var params = this.call_helper(call, json_values);
    var d= $.Deferred();

    proxyRequestToPlugin(params.request, d);

    var e = d.pipe(
	function(r) {
	    return params.parser(r);
	},
	function(r) {
	    return r;
	});

    return e;
/*
    $.ajax(params.request).success(
	function(r) {
	    d.resolve(params.parser(r));
	}).fail(function(r){
	    d.reject(r);
	});

    return d;
*/
    //console.log(o.service);
    //console.log(headers);
    //console.log(payload);
}

WSDL_Interface.prototype.parse_type  = function(type, xmldoc, path_here) {

    var ret;
    var in_type = type;
    //    //console.log("genser");
    if (type.constructor === String) {
	type = striptns(type);
	type = this.wsdl.types[type];
    }

    if (type.constructor === Array) 
	type = type[0];

//    console.log("parse route " + (path_here||[]).join("->"));

    //    //console.log(JSON.stringify(type));
    if ( type['s:element'] ) {
	var e = type['s:element'][0];
	var n = e['@'].name;
	path_here = [n];

	if (n !== xmldoc.nodeName)
	    throw "Document does not match template.";

	var v;

	if ( e['@']['type'] ) {
	    ret = this.parse_type(this.wsdl.types[e['@']['type']], xmldoc, path_here);
	    return ret;
	}

	type = e;
    }

    if ( type['s:simpleType'] ) {
	return this.parse_simple_type(type['s:simpleType'][0], xmldoc, path_here);
    }

    else if ( type['s:complexType'] ) {
	return this.parse_complex_type(type['s:complexType'][0], xmldoc, path_here);
    }

};

WSDL_Interface.prototype.parse_simple_type = function(type, xmldoc, path_here) {
//    console.log("Parsing simple");
//    console.log(type['@'].name);
//    console.log(xmldoc.textContent);
    var v = xmldoc;
    var ret  = xmldoc.textContent;

    var simpleType = type['@'].name;

    if (type['s:restriction'])
	simpleType = type['s:restriction'][0]['@'].base;

    if (simpleType == 's:long')
	return parseFloat(ret);

    if (simpleType == 's:short')
	return parseInt(ret);

    if (simpleType == 's:decimal')
	return parseFloat(ret);

    if (simpleType == 's:float')
	return parseFloat(ret);

    if (simpleType == 's:double')
	return parseFloat(ret);

    if (simpleType == 's:int')
	return parseInt(ret);

    if (simpleType == 's:dateTime') {
	return new Date(ret);

    }

    if (simpleType == 's:boolean')
	return (ret === 'true');

    if (simpleType == 's:string')
	return ret;

    
    throw "Unknown simple type " + simpleType;
};

WSDL_Interface.prototype.parse_complex_type = function(type, xmldoc, path_here) {

    var ret = {};
    var _wb = this;

    var nodes = {};
    var n = xmldoc.firstElementChild;
    for (var i = 0; i < xmldoc.childElementCount; i++) {
	if (nodes[n.nodeName] === undefined)
	    nodes[n.nodeName] = [];
	nodes[n.nodeName].push(n);
	n = n.nextElementSibling;
    }

    type['s:sequence'][0]['s:element'].forEach(function(e) {
	var n = e['@'].name;
	var t = e['@'].type;
	
	var use_vals = xmldoc ? nodes[n] : undefined;
	if (use_vals === undefined)
	    return;

	ret[n] = [];

	use_vals.forEach(function(vals) {	    
	    path_here.push(n);
	    //console.log("recursing for " + path_here.join("->") + " via ");
	    //console.log(vals);
	    var v = _wb.parse_type(t, vals, path_here)
	    //console.log("recursed for " + path_here.join("->") + " via ");
	    //console.log(v);
	    ret[n].push(v);
	    path_here.pop(n);
	});

	
	if (e['@'].maxOccurs === '1') {
	    if (ret[n].length == 1) {
		ret[n] = ret[n][0];
	    }
	    else if (ret[n].length == 0){
		delete ret[n];
	    }
	    else throw "Wrong result count: " + ret[n] + " for " + path_here.join("->");
	    
	}

    });

    return ret;
};


WSDL_Interface.add = function(name, s) {
    var t = new WSDL_Interface(s.wsdl);
    s.interface = t;
    s.receive = function() {return t.parse_type.apply(t, arguments);}
    s.call = function() {return t.call.apply(t, arguments);}
    if (typeof exports !== "undefined") {
	exports.PF_Interfaces[name] = s;
    }
    else {
	PF[name] = s;
    }
};

if (typeof exports !== "undefined") {
    exports.WSDL_Interface  = WSDL_Interface;
    exports.PF_Interfaces = {};
} else {

    // stub implementation for plugin to over-write
    proxyRequestToPlugin = function(request, d) {
	$.ajax(request).done(function(r){
	    d.done(r);
	}).fail(function(r){
	    d.fail(r);
	});
    }
    
    PF = {};

    (function() {
	var d = $.Deferred();
	
	PF.ready = function() {
	    return d;
	}
	
	PF.triggerReady = function() {
	    $("body").append("Triggering ready!");
	    console.log("Triggering Ready");
	    console.log(PF.defaults.lPatientID);
	    d.resolve(PF.defaults.lPatientID);
	}
    }());
}