/**
 * http://usejsdoc.org/
 */

"use strict";

/*
 * in JS , we can declare/create function in 2 ways
 * 
 * a. function declaration b. function expression
 * 
 */

// var r = add(12, 13);
// console.log(r);
//
// function add(n1, n2) {
// var result = n1 + n2;
// return result;
// }
// var r=add(12,13);
// console.log(r);
// -------------------------------------------
// Function expression : creating function-obj at runtime.
// var r=add(12,13);
// console.log(r);
//
// var add=function(n1,n2){var result=n1+n2;return result;};
//
// //var r=add(12,13);
// //console.log(r);
// -------------------------------------------
// functions as values
// function sayHello(){
// console.log('Hello');
// }
//
//
// var sayHi=sayHello;
// sayHi();
// -------------------------------------------
// function as angumant values
//
//
// function sayHello(greet){
// console.log('In sayHello()...');
// greet();
// }
//
//
// sayHello(function(){console.log('Ola....');});
// var arr=[1,3,5,7,9,2,4,6,8,10];
// //arr.sort();
// arr.sort(function(n1,n2){return n1-n2});
//
// console.log(arr);
// -------------------------------------------
// functions as return values
// function teach(){
//	
// console.log('Teaching JS...');
//	
// function learn(){
// console.log('Learn JS');
// }
//	
// return learn;
// }
//
// var learnFunc=teach();
// if
// learnFunc();
// -------------------------------------------
// function reflect(arg1,arg2,arg3){
// //console.dir(arguments);
// return arguments[0]+" "+arguments[1];
// }
//
// console.log(reflect());
//
//
// -------------------------------------------
/*
 * var scope
 * 
 * global scope function scope
 * 
 * 
 * func - 'variable hoisting '
 * 
 */

// var v = 100;
//
// function display() {
// var v;
// console.log(v);
// v = 200;
// }
//
// display();
// -------------------------------------------
// Ques
// function f(){
// {
// var v= 100;
// }
// console.log(v);
// }
//
// f();
// --------------------------------------------
// function f() {
// var i = 100;
// }
// f();
// ----------------------------------------------
// why we need 'this'.
/*
 * to ready obj properties in function instead of 'reference' var.
 * 
 */

// var person={
// name:'Nag',
// sayName:function(){
// console.log('im '+this.name);
// }
// };
//
// var oldPerson=person;
// person={name:'Riya'};
//
// oldPerson.sayName();
// ---------------------------------------------------------------
// function sayNameForAll(){
// console.log('im '+this.name);
// }
//
// //var p1={name:'Nag',sayName:function(){console.log('im '+this.name);}};
// //var p2={name:'Riya',sayName:function(){console.log('im '+this.name);}};
//
// var p1={name:'Nag',sayName:sayNameForAll};
// var p2={name:'Riya',sayName:sayNameForAll};
//
// sayNameForAll(); // ??? // function-invocation : 'this' --> global-obj
// p1.sayName(); // im Nag // method-invocation : 'this' --> invoker obj
// p2.sayName(); // im Riya
//
//
// ---------------------------------------------------------
// var greetUtil={
// sayName:function(message){
// console.log(message+' im '+this.name);
// }
// };
//
//
// //--------------------------------
//
// var p1={name:'Nag'};
// var p2={name:'Riya'};
//
// //----------------------------------------------------------
//
// // eager invocation
//
// //greetUtil.sayName.call(p2,"Hello"); // call or bind invocation
// greetUtil.sayName.apply(p2,["Hello"]);
//
//
// var p1SayNameFunc=greetUtil.sayName.bind(p1,"Hi");
//
//
// // if 'greet-event' happen on p1
// p1SayNameFunc();
// ---------------------------------------------------------------------

// function Person(name,age){
// this.name=name;
// this.age=age;
// this.sayName=function(){
// console.log('im '+this.name);
// };
// }
// var p1=new Person('Nag',32); // constructor-invocation : 'this' -->
// new-object
// var p2=new Person('Riya',0.9);
//
// p1.sayName();
// p2.sayName();
// Person('Abc',100); // dont, bcz its constructor , invoke with 'new'
// -----------------------------------------------------------------
// var tnr={
// name:'Nag',
// doTeach:function(){
// console.log(this.name +" teaching JS");
// var that=this;
// function learn(){
// console.log(this.name+ ' learning from '+that.name);
// }
// //learn.call(this);
// var stud={name:'CTS'};
// learn.call(stud);
// //learn();
// }
// };
// tnr.doTeach();
// -----------------------------------------------------------------
// JS Function-closure

//
// function teach(){
// console.log('teaching...');
// var info='JS notes';
// var count=0;
// function learn(){
// count++;
// console.log('learning with '+info +" - "+count+" times");
// }
// console.log('teaching finished...');
// return learn;
// }
//
// var learnFunc=teach();
//
// learnFunc();
// learnFunc();
// learnFunc();
//
// -----------------------------------------------------------------

//// counter-module
//function init() {
//	
//	var count = 0;  // private
//	
//	// public
//	return {
//		doCount : function() {
//			count++;
//		},
//		getCount : function() {
//			return count;
//		}
//	};
//}
//var counterModule=init();


var counterModule=(function(){
	
	
	var count = 0;  // private
	
	// public
	return {
		doCount : function() {
			count++;
		},
		getCount : function() {
			return count;
		}
	};
	
})();

// ---------------------------------------------------------------

// other module

counterModule.doCount();
counterModule.doCount();
counterModule.doCount();
counterModule.doCount();
counterModule.doCount();

//count=-100;

console.log(counterModule.getCount());

//------------------------------------------------------------------