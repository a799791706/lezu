//
var app=angular.module('atr',[]);
app.controller('income',function($scope,$http){
	$http.get('../json/lead.json').success(function(data){
		$scope.tits=data.tits;
	});
});