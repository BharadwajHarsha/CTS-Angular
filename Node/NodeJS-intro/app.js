/**
 * http://usejsdoc.org/
 */

// console.log('Hello...');
// ex1 - Read File and Display in console..
/*
 * a. open file ... wait b. create buffer with size .. wait c. read file ...wait
 * d. close
 * 
 */

var fs = require('fs');

// blocking IO ( synchronous function calls )

// var handle=fs.openSync('menu.txt', 'r'); // wait....
// var buffer=new Buffer(100000); // .. wait..
// var read=fs.readSync(handle, buffer, 0, 10000, null); // wait....
// console.log(buffer.toString('utf8', 0, read)); // wait..
// fs.closeSync(handle);

// ---------------------------------------------

// Event Driven Non Blocking IO

console.log('opening file...');

// open
fs.open('menu.txt', 'r', function(err,handle) {

	console.log('callback:after file open....menu.txt');
	
	if(err){
		return;
	}

	var buffer = new Buffer(100000);
	// read
	fs.read(handle, buffer, 0, 10000, null, function(err,length) {

		console.log('callback:after file read....menu.txt');

		console.log(buffer.toString('utf8',0,length));
		
		console.log("---------------------------------------");
		
		fs.close(handle, function() {/* .. */
		});

	});

});

//-----------------------------------------------------


fs.open('index.html', 'r', function(err,handle) {

	console.log('callback:after file open....index.html');
	
	if(err){
		return;
	}

	var buffer = new Buffer(100000);
	// read
	fs.read(handle, buffer, 0, 10000, null, function(err,length) {

		console.log('callback:after file read....index.html');

		console.log(buffer.toString('utf8',0,length));
		
		console.log("---------------------------------------");
		
		fs.close(handle, function() {/* .. */
		});

	});

});


console.log('continue with other work....');
