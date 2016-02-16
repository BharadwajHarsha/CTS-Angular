/**
 * http://usejsdoc.org/
 */


function Person(name,age){
	console.log('New person instance created...');
	this.name=name;
	this.age=age;
}
Person.prototype.sayName=function(){
	console.log('im '+this.name);
};

module.exports=Person;