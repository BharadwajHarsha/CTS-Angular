/**
 * http://usejsdoc.org/
 */

var storeModule = angular.module('store', []);

// Controller
storeModule.controller('StoreController', function($scope, $filter) {
	// this.product = item;
	$scope.products = items; // View-Model

	// var op=$filter('uppercase')('naga');
	// console.log(op);
	//	
	// var op2=$filter('priceDiscount')(1000,100);
	// console.log(op2);

});

storeModule.controller('ProductTabsController', function($scope) {
	$scope.tab = 1;
	$scope.changeTab = function(tabValue) {
		$scope.tab = tabValue;
	};
	$scope.isTabSelected = function(index) {
		return $scope.tab === index;
	};

});

storeModule.controller('ReviewFormController', function($scope) {
	$scope.newReview={author:'nag@gmail.com'};
	$scope.addReview=function(product){
		product.reviews.push($scope.newReview);
		$scope.newReview={author:'nag@gmail.com'};
	};
});




// Filters
storeModule.filter('priceDiscount', function() {
	return function(originalPrice, discount) {
		if (discount) {
			return originalPrice - discount;
		}
		return originalPrice - 1; // filtering..
	};
});

// Directives
storeModule.directive('productTitle',function(){
	return {
		restrict: "E",
		replace: true,
		templateUrl: "templates/product-title.html",
		link:function(scope,jqEle,attr){
			jqEle.on('mouseover',function(event){
				jqEle.css('background-color','#def');
			});
			jqEle.on('mouseout',function(event){
				jqEle.css('background-color','#fff');			
			});
		}
	};
});
storeModule.directive('productTabs',function(){
	return {
		restrict: "E",
		replace: true,
		templateUrl: "templates/product-tabs.html"
	};
});
storeModule.directive('productReviewForm',function(){
	return {
		restrict: "E",
		replace: true,
		templateUrl: "templates/product-review-form.html"
	};
});



// Model - data
var items = [ {
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
} ];
