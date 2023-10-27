const http = require('http');
const fs = require('fs')

// Create a server object
http.createServer(function (req, res) {

	// http header
	res.writeHead(200, {'Content-Type': 'text/html'}); 

	const url = req.url;

	if(url === '/webstorex') {
		let html = fs.readFileSync('main.html')
		res.end(html); 
	} else if(url === '/') {
		let html = fs.readFileSync('bypass.html')
		res.end(html);
	}
}).listen(3000, function() {
	// The server object listens on port 3000
	console.log("server start at port 3000");
});
