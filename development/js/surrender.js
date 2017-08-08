var app=angular.module('atr',[]);
app.controller('surrender',function($scope,$http,$timeout){
	$http.get('../json/lead.json').success(function(data){
		$scope.surrender=data.surrender;
	});
	$timeout(function(){
		load()
	},500)
});
function load(){
	new IScroll('.cw-sec',{
		preventDefault:false
	})
}
