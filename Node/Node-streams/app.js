/**
 * http://usejsdoc.org/
 */

//var fs = require('fs');
//var http = require('http');
//var oppressor=require('oppressor');
//
//var server = http.createServer();
//
//server.on('request', function(req, resp) {

	// on every request , file response

	// without stream
	// fs.readFile('jQuery Cookbook.pdf', function(err, data) {
	// if (err) {
	// return;
	// }
	// resp.write(data);
	// resp.end();
	// });

	// with stream

	//var inputStream = fs.createReadStream('jQuery Cookbook.pdf');
	// inputStream.on('data', function(chunk) {
	// resp.write(chunk);
	// });
	// inputStream.on('end', function() {
	// resp.end();
	// });
	//inputStream.pipe(oppressor(req)).pipe(resp);

//});
//
//server.listen(8080, function() {
//	console.log('server started....');
//});


//-------------------------------
//
//var Readable = require('stream').Readable;
//
//var rs = new Readable();
//rs.push('beep ');
//rs.push('boop\n');
//rs.push(null);
//
//rs.pipe(process.stdout);
//
//







