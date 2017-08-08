var app=angular.module('atr',[]);
app.controller('message',function($scope,$http){
	$http.get('../json/lead.json').success(function(data){
		$scope.lists=data.lis;
	})
})