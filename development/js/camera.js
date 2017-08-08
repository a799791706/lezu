var app=angular.module('atr',[]);
app.controller('camera',function($scope,$http,$timeout){
	$http.get('../json/lead.json').success(function(data){
		$scope.images=data.camera;
		$scope.describe=data.describe;
		$scope.appraise=data.appraise;
		$scope.comments=data.comment;
	});
	$timeout(function(){
		load()
	},500)
});

function load(){
	new IScroll('.cw-content',{
		mouseWheel:true
	});
	new Swiper('.cw-banner',{
			pagination:".swiper-pagination",
			paginationClickable:true,
			autoplay:3000
	});
	$('.cw-a').eq(3).on('click',function(){
		$('.cw-msg').show();
	})
	$('.cw-shop').eq(0).on('click',function(){
		$('.cw-msg').hide();
	})
}