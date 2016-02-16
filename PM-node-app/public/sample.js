/**
 * http://usejsdoc.org/
 */


console.log(JSON.stringify([ {
	name : 'Mobile',
	price : 29000,
	description : 'New Model',
	canBuy : true,
	notAvailable : false,
	make : Date.now(),
	reviews : [ {
		stars : 5,
		author : 'nag@gmail.com',
		body : 'this is good one..'
	}, {
		stars : 4,
		author : 'indu@gmail.com',
		body : 'this is bad one..'
	} ]
}, {
	name : 'Laptop',
	price : 198000,
	description : 'New Model',
	canBuy : true,
	notAvailable : false,
	make : Date.now(),
	reviews : [ {
		stars : 5,
		author : 'nag@gmail.com',
		body : 'this is good one..'
	}, {
		stars : 4,
		author : 'indu@gmail.com',
		body : 'this is bad one..'
	} ]
} ]));