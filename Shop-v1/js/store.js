/**
 * http://usejsdoc.org/
 */

var storeModule = angular.module('store', []);

// Controller
storeModule.controller('StoreController', function($scope,$filter) {
	//this.product = item;
	$scope.products=items;   // View-Model
	
	var op=$filter('uppercase')('naga');
	console.log(op);
	
	var op2=$filter('priceDiscount')(1000,100);
	console.log(op2);
	
});
// Filters
storeModule.filter('priceDiscount', function() {
	return function(originalPrice,discount){
		if(discount){
			return originalPrice-discount;
		}
		return originalPrice-1;   // filtering..
	};
});


// Model - data
var items =[ {
	name : 'Mobile',
	price : 29000,
	description : 'New Model',
	canBuy:true,
	notAvailable:false,
	make:Date.now()
},
{
	name : 'Laptop',
	price : 198000,
	description : 'New Model',
	canBuy:true,
	notAvailable:false,
	make:Date.now()
}];

// document.getElementsByTagName('h3')[0].innerHTML=item.name
// document.getElementsByTagName('h4')[0].innerHTML=item.price
// document.getElementsByTagName('p')[0].innerHTML=item.description
