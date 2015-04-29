// JavaScript Document
angular.module('myApp', ['ngMessages'])
     .controller('myCtrl' , ['$scope', function($scope) {
         $scope.subTotal = 0;
		 $scope.tipShow = 0;
		 $scope.total = 0;
		 $scope.tipTotal =0;
		 $scope.mealCount = 0;
		 $scope.tipAverage =0;
		 $scope.eachTip = [];
		 
		 $scope.cancel = function(){
			 $scope.mealPrice=''; 
			 $scope.tax='';
			 $scope.tip='';
		 }
		 
		 $scope.submit = function(){
			 $scope.mealPriceShow=this.mealPrice; 
			 $scope.taxShow=this.tax;
			 $scope.tipShowTemp=this.tip;
			 $scope.subTotal= $scope.mealPriceShow * (1 + $scope.taxShow/100);
			 $scope.tipShow = $scope.subTotal * ($scope.tipShowTemp/100);
			 $scope.total= $scope.subTotal + $scope.tipShow;
		 }
		 
		 $scope.reset= function(){
			 $scope.mealPrice=''; 
			 $scope.tax='';
			 $scope.tip='';
			 $scope.subTotal = 0;
			 $scope.tipShow = 0;
		 	 $scope.total = 0;
			 $scope.tipTotal =0;
		     $scope.mealCount = 0;
		     $scope.tipAverage =0;
		 }
		 
		 $scope.count = function(){
			 $scope.eachTip.push($scope.tipShow);
			 $scope.mealCount = $scope.mealCount + 1;
			 $scope.tipTotal = $scope.tipTotal + $scope.eachTip[$scope.mealCount-1];
			 $scope.tipAverage = $scope.tipTotal / $scope.mealCount;
		 }
        
     }]);