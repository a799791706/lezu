var app=angular.module('atr',[]);
app.controller('rent',function($scope,$http,$timeout){
	$http.get('../json/lead.json').success(function(data){
		$scope.rents=data.rent;
	});
	$timeout(function(){
		load()
	},500)
});
function load(){
	new IScroll('.cw-sec')
}
