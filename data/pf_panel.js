unsafeWindow.port = self.port;
console.log(Object.keys(unsafeWindow));
console.log(unsafeWindow.location.href);
unsafeWindow.ready();