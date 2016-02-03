/**
 * http://usejsdoc.org/
 */

var storeModule = angular.module('store', []);

// Controller
storeModule.controller('StoreController', function($scope) {

	//this.product = item;
	$scope.products=items;   // View-Model
	
});

// Model - data
var items =[ {
	name : 'Mobile',
	price : 29000,
	description : 'New Model',
	canBuy:true,
	notAvailable:false
},
{
	name : 'Laptop',
	price : 198000,
	description : 'New Model',
	canBuy:true,
	notAvailable:false
}];

// document.getElementsByTagName('h3')[0].innerHTML=item.name
// document.getElementsByTagName('h4')[0].innerHTML=item.price
// document.getElementsByTagName('p')[0].innerHTML=item.description
