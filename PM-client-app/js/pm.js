/**
 * http://usejsdoc.org/
 */

var pmModule=angular.module('pm', ['ngRoute']);

pmModule.config(function($routeProvider) {
	
	$routeProvider
	.when("/", {templateUrl:"templates/pm-home.html"})
	.when("/view-all", {templateUrl:"templates/pm-grid.html",controller: "ViewController"})
	.when("/add-new", {templateUrl:"templates/pm-product-form.html",controller:"SaveController"})
    .when("/edit/:prodId",{templateUrl:"templates/pm-product-form.html",controller:"ViewOrEditController"})
	.when("/view/:prodId",{templateUrl:"templates/pm-product-view.html",controller:"ViewOrEditController"});
		
});


pmModule.controller('ViewController', function($scope,pmService,$route) {
	pmService.loadAll()
	.then(function(items){
		$scope.products=items;
	});
	
	$scope.remove=function(id){
		pmService.remove(id)
		.then(function(){
			$route.reload();
		});
	};
	
});


pmModule.controller('SaveController', function($scope,pmService,$location) {
	$scope.product={};
	$scope.save=function(){
		
		$scope.product.make= "2016-02-08";
		$scope.product.canBuy=true;
		$scope.product.notAvailable=false;
		
		pmService.save($scope.product)
		.then(function(){
			$scope.$parent.message="New Product saved";
			$scope.product={};
			$location.path('view-all');
		});
	};
});

pmModule.controller('ViewOrEditController', function($scope,pmService,$location,$routeParams) {
	
	pmService.load($routeParams.prodId)
	.then(function(item){
		$scope.product=item;
	});
	
	
	$scope.save=function(){
		
		$scope.product.make= "2016-02-08";
		$scope.product.canBuy=true;
		$scope.product.notAvailable=false;
		
		pmService.update($scope.product)
		.then(function(){
			$scope.$parent.message="New Product saved";
			$scope.product={};
			$location.path('view-all');
		});
	};
});



pmModule.factory('pmService', function($q,$http) {
	var url="http://localhost:3000/api/products";
	var service={
			loadAll:function(){
				var defer=$q.defer();
				$http.get(url)
				.then(function(response){
					defer.resolve(response.data);
				});
				return defer.promise;
			},
			load:function(id){
				var defer=$q.defer();
				$http.get(url+"/"+id)
				.then(function(response){
					defer.resolve(response.data);
				});
				return defer.promise;
			},
			save:function(newProduct){
				var defer=$q.defer();
				$http.post(url,newProduct)
				.then(function(){
					defer.resolve(newProduct);
				});
				return defer.promise;
			},
			update:function(newProduct){
				var defer=$q.defer();
				$http.put(url,newProduct)
				.then(function(){
					defer.resolve(newProduct);
				});
				return defer.promise;
			},
			remove:function(id){
				var defer=$q.defer();
				$http['delete'](url+"/"+id)
				.then(function(){
					defer.resolve('deleted...');
				});
				return defer.promise;
			}
	};
	return service;
	
});



