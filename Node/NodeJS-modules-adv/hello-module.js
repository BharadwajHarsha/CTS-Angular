/**
 * http://usejsdoc.org/
 */

// console.log('Hello..');
// function hello(){
// console.log('hello world...');
// }

var greet = {
	name:'Nag',	
	sayHello : function() {
		console.log('hello....'+this.name);
	}
};

module.exports = greet;