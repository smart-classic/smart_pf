self.pending_requests = {};
self.count = 0;

unsafeWindow.proxyRequestToPlugin = function(req, d) {
    req.id = self.count++;
    self.pending_requests[req.id] = d;
    self.port.emit("proxy_post", req);
}


self.port.on("proxy_response", function(r) {
    var d = self.pending_requests[r.id];
    delete self.pending_requests[r.id];
    if (r.status === 200) {
	d.resolve(r.data);
    } else {
	d.reject(r.data);
    }
});

self.port.on("defaults", function(defaults){
    console.log("App got defaults");
    if (defaults) {
	unsafeWindow.PF.defaults = defaults;
	unsafeWindow.PF.ready.resolve();
    }
});
