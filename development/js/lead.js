var app=angular.module('atr',[]);
app.controller('lead',function($scope,$http,$timeout){
	$http.get('../json/lead.json').success(function(data){
		$scope.datas=data.lead;
	})
	$timeout(function(){
		new Swiper('.cw-sw1',{
			pagination:".swiper-pagination",
			paginationClickable:true,
			parallax:true,
  			speed:600
		})
	},1000)
})
