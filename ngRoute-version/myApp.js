// JavaScript Document
angular.module('myApp', ['ngMessages', 'ngAnimate', 'ngRoute'])
	.config(function($routeProvider){
         $routeProvider
         .when('/', {
            templateUrl: './home.html',
            controller : 'homeCtrl'
         })
         .when('/new-meal', {
            templateUrl : './new-meal.html',
            controller : 'mealCtrl'
         })
         .when('/my-earnings', {
            templateUrl : './my-earnings.html',
            controller : 'mealCtrl'
         })
         .when('/error',{
         	templateUrl : './error.html'
         })
         .otherwise('/error', {
		    templateUrl : './error.html'
		 });//?????
	 })
	.controller('homeCtrl', ['$rootScope', function ($rootScope) {	
             if(!$rootScope.initView){
             	 $rootScope.subTotal = 0;
				 $rootScope.tipShow = 0;
			 	 $rootScope.total = 0;
				 $rootScope.tipTotal =0;
			     $rootScope.mealCount = 0;
			     $rootScope.tipAverage =0;
			     $rootScope.mealCount = 0;

			     $rootScope.initView = true;
             }
	         		 
	}])
	.controller('mealCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {
		     if(!$rootScope.initView){
             	 $rootScope.subTotal = 0;
				 $rootScope.tipShow = 0;
			 	 $rootScope.total = 0;
				 $rootScope.tipTotal =0;
			     $rootScope.mealCount = 0;
			     $rootScope.tipAverage = 0;
			     $rootScope.mealCount = 0;

			     $rootScope.initView = true;
             }


		     $rootScope.initView = true;

		     $scope.cancel = function(){
				 $scope.mealPrice=''; 
				 $scope.tax='';
				 $scope.tip='';
			 
		     }
		 
		     $scope.submit = function(){
				 $rootScope.subTotal= $scope.mealPrice * (1 + $scope.tax/100);
				 $rootScope.tipShow = $rootScope.subTotal * ($scope.tip/100);
				 $rootScope.total= $rootScope.subTotal + $rootScope.tipShow;

				 if($scope.mealForm.$valid){
				 	 $rootScope.mealCount = $rootScope.mealCount + 1;
					 $rootScope.tipTotal = $rootScope.tipTotal + $rootScope.tipShow;
					 $rootScope.tipAverage = $rootScope.tipTotal / $rootScope.mealCount;
				 }
		     }



			 $scope.reset= function(){
				 $rootScope.subTotal = 0;
				 $rootScope.tipShow = 0;
			 	 $rootScope.total = 0;
				 $rootScope.tipTotal =0;
			     $rootScope.mealCount = 0;
			     $rootScope.tipAverage =0;
		     }
		 
		     
		 
    }])
    .controller('generalCtrl' , ['$scope', '$location', function($scope, $location) {
               $scope.isActive = function (viewLocation) { 
		            return viewLocation === $location.path();
		       };
    }])