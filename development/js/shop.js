var app=angular.module('atr',[]);
app.controller('shop',function($scope,$http,$timeout){
	$http.get('../json/lead.json').success(function(data){
		$scope.shops=data.shop;
	});
	
	$timeout(function(){
		load()
		ab()
	},10)
});

function load(){
	new IScroll('.cw-sec',{
		preventDefault:false,
		probeType: 3
	});
}
function ab(){
	$('.cw-bj').on('click',function(){
		$('.cw-div').toggle();
		if($('.cw-div').attr('style')!='display:none'){
			caozuo()
		}
	});
	function caozuo(){
		//单选
		$('.cw-div').on('click',function(){
			$(this).toggleClass('on');
		});
		//全选
		$('.cw-btn:nth-child(1)').on('click',function(){
			$('.cw-div').toggleClass('on');
			if($(this).text()=='全选'){
				$(this).text('取消全选')
			}else{
				$(this).text('全选')
			}
		})
		//删除
		$('.cw-btn:nth-child(2)').on('click',function(){
			for(var i=0;i<$('.cw-div').length;i++){
				if($('.cw-div').eq(i).hasClass('on')){
					$('.cw-div').eq(i).parent().remove();
					i--;
				}
			}
		})
	}
}
