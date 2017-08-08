var app=angular.module('atr',[]);
app.controller('place-me',function($scope,$http){
	$http.get('../json/lead.json').success(function(data){
		$scope.placeme=data.placeme;
	});
});