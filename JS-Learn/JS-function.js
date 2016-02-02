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
function f() {
	var i = 100;
}
f();

//----------------------------------------------
