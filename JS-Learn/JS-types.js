/**
 * 
 */

// Primitives


// a. string
//
//var name="Nag";
//console.info(typeof name);
//
//var selection='a';
//console.log(typeof selection);

//----------------------------------------

// b. number

//var count=12;
//var cost=12.12;
//
//console.log(typeof cost);
//

//----------------------------------------

// c. boolean
//
//var found=true;
//console.log(typeof found);
//

//----------------------------------------

// d. undefined

//
//var v=undefined;
//console.log(typeof v);


//----------------------------------------

// e. null

//var o=null;
//console.log(typeof o);


//----------------------------------------
//
//var v;
//
//
//if(v===null){
//	console.log('True');
//}
//
//var v1="5";
//var v2=5;
//console.log(v1==v2);
//console.log(v1===v2);
//

//----------------------------------------


// Reference Types : objects

/*
 *  How to create objects in JS lang ?
 *  
 *  
 * var ref= new ConstructorFunction();
 * 
 */


//
//var o=new Object();
//o.name='Nag';
//o.age=32;
//o.doWork=function(){
//	console.log('Teaching JS');
//};
//
//console.log(o.name);
//o.doWork();
//
//delete o.age;
//
//console.log(o.age);


//------------------------------------------------


/*
 *  How to access obj's properties ?
 * 
 *  2-ways
 *  
 *  '.'
 *  '[]' 
 * 
 */

//var person=new Object();
//person.name='Nag';
//person['full-name']="Nagabhushanam";
//person.doWork=function(){
//	console.log('Teach JS');
//};
//
//
//console.log(person.name);
//console.log(person['name'])
//
//console.log(person['full-name']);
//
//var p="name";
//
//
//console.log(person[p]);
//



//------------------------------------------------


/*
 *  built-in types
 *  
 *  Object
 *  Array
 *  RegExp
 *  Function
 * 
 * 
 */

// a. Object

//var person=new Object();
//o.name='Nag';
//o.age=32;
//o.doWork=function(){
//	console.log('Teaching JS');
//};
//
//// literal style
//
//var newPerson={
//		name:'Nag',
//		age:'32',
//		doWork:function(){
//			console.log('teaching JS');
//		}
//};
//


//------------------------------------------------

// b. Array

//var arr=new Array();
//arr.push(10);
//arr[1]=20;
//
//// Literal style
//
//var newArray=[10,20];


//------------------------------------------------


// c. RegExp

//var re=new RegExp("\\d");
//console.log(re.test("abc"));
//
//// literal style
//var newRe=/\d/;
//console.log(newRe.test("123"))
//



//------------------------------------------------

/*
 * 
 *  imp note : all functions in JS are objects i.e
 *  function can have properties and methods
 * 
 * 
 * 
 */


var  add=new Function("n1","n2","var result=n1+n2;return result;");
console.log(add(12,13));


// literal style
function newAdd(n1,n2){
	var result=n1+n2;
	return result;
}
console.log(newAdd(12,13));












