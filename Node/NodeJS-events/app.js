/**
 * http://usejsdoc.org/
 */

/*
 * Node Events ---------------
 * 
 * 
 * 
 * All objects that emit events are instances of the 'EventEmitter' class.
 * 
 * 
 */

var EventEmitter = require('events');
var ee = new EventEmitter();

// ee.on('hello-event',function(){
// console.log('hello guys..');
// });
//
// ee.emit('hello-event');
// ee.emit('hello-event');
// ee.emit('hello-event');
// ee.emit('hello-event');

// ---------------------------------------

// ee.on('new-user',function(data){
// console.log('new user '+data.name);
// });
//
// // if new user , in...
// ee.emit('new-user',{name:'Nag'});

// ---------------------------------------
//
// ee.setMaxListeners(15);
//
// ee.on('some-event',function(){console.log('listener-1');});
// ee.on('some-event',function(){console.log('listener-2');});
// ee.on('some-event',function(){console.log('listener-3');});
// ee.on('some-event',function(){console.log('listener-4');});
// ee.on('some-event',function(){console.log('listener-5');});
// ee.on('some-event',function(){console.log('listener-6');});
// ee.on('some-event',function(){console.log('listener-7');});
// ee.on('some-event',function(){console.log('listener-8');});
// ee.on('some-event',function(){console.log('listener-9');});
// ee.on('some-event',function(){console.log('listener-10');});
// ee.on('some-event',function(){console.log('listener-11');});
//
//
// ee.emit('some-event');

// ---------------------------------------

// ee.once('some-event',function(){console.log('listener-..');});
//
//
// ee.emit('some-event');
// ee.emit('some-event');

// ---------------------------------------

// function f(){
// console.log('listener....');
// ee.removeListener('some-event',f);
// }
//
// ee.on('some-event',f);
//
// //ee.removeAllListeners('some-event');
//
// ee.emit('some-event');
// ee.emit('some-event');

// ------------------------------------------------
//
// var util = require('util');
//
// function Door() {
// this.open = function() {
// console.log('door opened..');
// this.emit('door-open');
// };
// this.close = function() {
// console.log('door closed..');
// this.emit('door-close');
// };
// }
//
// util.inherits(Door, EventEmitter);
//
// var door = new Door();
//
// setTimeout(function() {
// door.open();
// }, 5000);
// setTimeout(function() {
// door.close();
// door.open();
// }, 10000);
//
//
// function Light(){
// this.setup=function(){
// door.on('door-open', function() {
// console.log('LIGHTS ON');
// });
// door.on('door-close', function() {
// console.log('LIGHTS OFF');
// });
// };
// }

//
// var light=new Light();
// light.setup();

// ---------------------------------------------------

var http = require("http");
var server = http.createServer();

server.on('request', function(req, resp) {
	console.log('New Request.....');
	resp.end();
});

server.listen(80, function() {
	console.log('server started....');
});
