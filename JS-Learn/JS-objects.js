/**
 * 
 */

"use strict";

/*
 * falsy values --------------
 * 
 * false null undefined 0 ""
 * 
 * 
 */

// var person={name:'Nag'};
// if(person.name){
// console.log('name property exist...');
// }
//
// if("name" in person){
// console.log('name property exist...');
// }
// ----------------------------------------
// var person = {
// name : "Nag",
// age : 31
// };
// for (var prop in person) {
// if (person.hasOwnProperty(prop)) {
// console.log(prop+" --> "+person[prop]);
// }
// }

// ----------------------------------------
/*
 * JS , obj can have 2 types properties
 * 
 * 
 * a. data property b. accessor property
 * 
 * 
 */
//
//
// var person={
// _name:'Nag',
// set name(newName){
// console.log('setting New Name');
// this._name=newName;
// },
// get name(){
// console.log('getting Name');
// return this._name;
// }
// };
//
//
// person.name="New Nag";
// console.log(person.name);

// --------------------------------------------------------
//
// var person={name:'Nag'};
// Object.defineProperty(person, 'name', {writable:false,configurable:false});
//
// //person.name="Nil";
//
//
// console.log(person.name);
// --------------------------------------------------------
// var person={name:'Nag',age:31};
// Object.preventExtensions(person);
// Object.seal(person);
// Object.freeze(person);
// --------------------------------------------------------

