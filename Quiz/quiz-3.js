/**
 * http://usejsdoc.org/
 */

function f() {
	console.log('hello..');
	
	var message="have lunch..."

	setTimeout(function() {
		try {
			console.log('after timeout..');
			//throw new Error('ooops');
			console.log(message);
		} catch (e) {
			console.log('i caught ' + e.message); // i caught
		}
	}, 5000);

}

f();