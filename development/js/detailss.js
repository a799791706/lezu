var app=angular.module('atr',[]);
app.controller('details',function($scope,$http,$timeout){
	$scope.arr=["单号:","发货地址:"];
	$http.get('../json/lead.json').success(function(data){
		$scope.details=data.details;
		$scope.msgs=data.msgs;
	});
	$timeout(function(){
		ab()
	},100)
});
function ab(){
	new IScroll('.cw-scroll',{
			mouseWheel:true,
			keyBindings:true,
			probeType: 3,
			scrollbars:true,
			fadeScrollbars:true,
			interactiveScrollbars:true
	});
	$('.cw-btn').eq(0).on('click',function(){
		$('.cw-status').addClass('on')
		if($('.cw-status').hasClass('on')){
			a()
		}
	})
}
function a(){
	$(document).on('click',function(){
		//存在三秒
		setTimeout(function(){
			$('.cw-status').removeClass('on');
		},3000)
	})
}
