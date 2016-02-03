/**
 * http://usejsdoc.org/
 */

function Person(name,age){
	this.name=name;
	this.age=age;
	var that=this;
	setInterval(function() {
		that.age++;
		console.log(that.name+" : age now : "+that.age);
	}, 2000);
}

var p1=new Person('Riya',1);
