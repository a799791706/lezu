var app=angular.module('atr',[]);
app.controller('nearby',function($scope,$http){
	$http.get('../json/lead.json').success(function(data){
		$scope.nearbys=data.nearby;
	})
})