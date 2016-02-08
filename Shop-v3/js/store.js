/**
 * http://usejsdoc.org/
 */

var storeModule = angular.module('store', []);

// Controller
storeModule.controller('StoreController', function($scope, $filter,productsService) {

	// Load all items from server / local-storage
	var promise = productsService.loadAll();
	promise.then(function(items) {
		$scope.products = items;
	}, function(error) {
		$scope.message = error;
	});

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
	$scope.newReview = {
		author : 'nag@gmail.com'
	};
	$scope.addReview = function(product) {
		product.reviews.push($scope.newReview);
		$scope.newReview = {
			author : 'nag@gmail.com'
		};
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
storeModule.directive('productTitle', function() {
	return {
		restrict : "E",
		replace : true,
		templateUrl : "templates/product-title.html",
		link : function(scope, jqEle, attr) {
			jqEle.on('mouseover', function(event) {
				jqEle.css('background-color', '#def');
			});
			jqEle.on('mouseout', function(event) {
				jqEle.css('background-color', '#fff');
			});
		}
	};
});

storeModule.directive('productTabs', function() {
	return {
		restrict : "E",
		replace : true,
		templateUrl : "templates/product-tabs.html"
	};
});

storeModule.directive('productReviewForm', function() {
	return {
		restrict : "E",
		replace : true,
		templateUrl : "templates/product-review-form.html"
	};
});

// service
storeModule.factory('productsService', function($q, $http) {

	//
	var url = "products.json"

	var service = {
		loadAll : function() {
			//
			var defer = $q.defer();

			// ..
			var promise = $http.get(url);
			promise.then(function(response) {
				defer.resolve(response.data);
			}, function(error) {
				defer.reject('oops');
			});

			return defer.promise;

		},
		load : function(id) {

		},
		save : function(newProduct) {

		},
		update : function(product) {

		},
		remove : function(id) {

		}

	};
	return service;

});
