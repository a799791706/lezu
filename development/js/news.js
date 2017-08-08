var app=angular.module('atr',[]);
app.controller('news',function($scope,$http){
	$http.get('../json/lead.json').success(function(data){
		$scope.news=data.news;
	})
})