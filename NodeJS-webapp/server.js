/**
 * http://usejsdoc.org/
 */

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
	
	console.log('received new request...');

	response.writeHead(200, {
		'Content-Type' : 'application/pdf'
	});

	// response.write('Welcome Node-wewold');

	// create read-stream
	var readStream = fs.createReadStream('jQuery Cookbook.pdf');
	readStream.on('data', function(chunk) {
		console.log('sending chunk of response...'+chunk.length);
		response.write(chunk);
	});
	readStream.on('end', function() {
		response.end();
	});

	// stream video

});
server.listen(8080, function() {
	console.log('server started at http://localhost:8080');
});