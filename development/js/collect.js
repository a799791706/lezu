var app=angular.module('atr',[]);
app.controller('collect',function($scope,$http,$timeout){
	$http.get('../json/lead.json').success(function(data){
		$scope.collects=data.collect;
	});
	$timeout(function(){
		load()
	},500)
});
function load(){
	new IScroll('.cw-sec')
}
