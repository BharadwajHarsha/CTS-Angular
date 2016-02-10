/**
 * http://usejsdoc.org/
 */

var bar = require('./bar');

var foo = {
	doWork : function() {
		bar.doWork()
		console.log('foo...');
	}
};

module.exports=foo;