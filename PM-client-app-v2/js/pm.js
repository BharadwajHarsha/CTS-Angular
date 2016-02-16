/**
 * http://usejsdoc.org/
 */

var pmModule=angular.module('pm', ['ui.router']);

pmModule.config(function($stateProvider,$urlRouterProvider) {
	
$urlRouterProvider.otherwise('/');
	

	$stateProvider.state('home-state', {
		url : "/",
		templateUrl : "templates/pm-home.html"
	}).state('viewall-state', {
		url : "/view-all",
		templateUrl : "templates/pm-grid.html",
		controller : "ViewAllController"
	})
	.state('new-state', {
		url : "/add-new",
		templateUrl : "templates/pm-product-form.html",
		controller : "AddController"
	})
	.state('viewall-state.edit-state', {
		url : "/edit/:prodId",
		views:{
			'product-edit-view':{
				templateUrl : "templates/pm-product-form.html",
				controller : "ViewOrEditController"
			},
			'product-edit-view':{
				templateUrl : "templates/pm-product-view.html",
				controller : "ViewOrEditController"
			}
		}
	})
	.state('viewall-state.view-state', {
		url : "/view/:prodId",
		views:{
			'product-edit-view':{
				templateUrl : "templates/pm-product-view.html",
				controller : "ViewOrEditController"
			}
		}
	});

	
});



pmModule.controller('ViewAllController', function($scope,pmService,$state) {
	
	$scope.products=pmService.loadAll()
	//.then(function(items){
	//	$scope.products=items;
	//});
	
	$scope.remove=function(id){
		pmService.remove(id)
		.then(function(){
			$state.reload();
		});
	};
	
});


pmModule.controller('AddController', function($scope,pmService,$location) {
	$scope.product={};
	$scope.save=function(){
		
		$scope.product.make= "2016-02-08";
		$scope.product.canBuy=true;
		$scope.product.notAvailable=false;
		
		pmService.save($scope.product)
		//.then(function(){
			$scope.$parent.message="New Product saved";
			$scope.product={};
			$location.path('view-all');
		//});
	};
});

pmModule.controller('ViewOrEditController', function($scope,pmService,$location,$stateParams) {
	
	pmService.load($stateParams.prodId)
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


//
//
//pmModule.factory('pmService', function($q,$http) {
//	var url="http://localhost:3000/api/products";
//	var service={
//			loadAll:function(){
//				var defer=$q.defer();
//				$http.get(url)
//				.then(function(response){
//					defer.resolve(response.data);
//				});
//				return defer.promise;
//			},
//			load:function(id){
//				var defer=$q.defer();
//				$http.get(url+"/"+id)
//				.then(function(response){
//					defer.resolve(response.data);
//				});
//				return defer.promise;
//			},
//			save:function(newProduct){
//				var defer=$q.defer();
//				$http.post(url,newProduct)
//				.then(function(){
//					defer.resolve(newProduct);
//				});
//				return defer.promise;
//			},
//			update:function(newProduct){
//				var defer=$q.defer();
//				$http.put(url,newProduct)
//				.then(function(){
//					defer.resolve(newProduct);
//				});
//				return defer.promise;
//			},
//			remove:function(id){
//				var defer=$q.defer();
//				$http['delete'](url+"/"+id)
//				.then(function(){
//					defer.resolve('deleted...');
//				});
//				return defer.promise;
//			}
//	};
//	return service;
//	
//});

pmModule.factory('pmService',function(){
	
	localStorage.setItem('products', JSON.stringify([]));
	
	
	var service={
			save:function(newProduct){
				var products=JSON.parse(localStorage.getItem('products'));
				products.push(newProduct);
				localStorage.setItem('products', JSON.stringify(products));
			},
			loadAll:function(){
				var products=JSON.parse(localStorage.getItem('products'));
				return products;
			}
	};
	
	return service;
	
});



