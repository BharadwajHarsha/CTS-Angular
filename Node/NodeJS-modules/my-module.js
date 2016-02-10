/**
 * http://usejsdoc.org/
 */

// Node Module

var i=123;

var arith = {
	add : function(num1, num2) {
		return num1 + num2;
	}
};

var greet={
		sayHallo:function(){
			console.log('Hello..');
		}
};

module.exports.arith = arith;
module.exports.greet = greet;