/**
 * http://usejsdoc.org/
 */

var storeService=angular.module('storeService',[]);

//service
storeService.factory('productsService', function($q, $http) {

	//
	var url = "/api/products"

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