var app=angular.module('atr',[]);
app.controller('homepage',function($scope,$http,$timeout){
	$http.get('../json/lead.json').success(function(data){
		$scope.images=data.banner;
		$scope.contents=data.content;
		$scope.lists=data.list;
		$scope.submenu=data.submenu;
		$scope.map=data.map;
	});
	$timeout(function(){
		load()
	},10);
	$scope.click=function(){
		$scope.a=$('.cw-inp').val()
	}
});

function load(){
	new IScroll('.cw-content',{
		preventDefault:false
	});
	new Swiper('.cw-banner',{
			pagination:".swiper-pagination",
			paginationClickable:true,
			autoplay:3000,
			loop:true,
			preventDefault:false
	});
	
	//
	var oImg=document.getElementsByClassName('cw-img');
	var oA=document.getElementsByClassName('cw-a');
	var p=document.getElementsByClassName('cw-title');
	var arr=['../images/global/hot_01.jpg','../images/global/hot_02.jpg','../images/global/hot_03.jpg'];
	var arr1=['../images/global/hot-act_01.jpg','../images/global/hot-act_02.jpg','../images/global/hot-act_03.jpg'];
	for(var i=0;i<oA.length;i++){
		oA[i].index=i;
		oA[i].onclick=function(){
			for(var j=0;j<oA.length;j++){
				oImg[j].setAttribute("src",arr[j]);
				p[j].style.color="#999999";
			}
			oImg[this.index].setAttribute("src",arr1[this.index]);
			p[this.index].style.color="#333333";
		}		
	}
	
	//选择市区
	$('#cw-sel').on('click',function(){
		$('.cw-lis').toggle()
	})
	$('.cw-lis').each(function(i){
		$('.cw-lis').eq(i).on('click',function(){
			$('.cw-lis').hide()
			$('#cw-map').text($(this).text())
		})
	})
	
	//下拉框
	$('.cw-inp').on('focus',function(){
		$('.cw-c').addClass('cw-show')
	});
	$('.cw-ul>li').on('click',function(){
		$('.cw-inp').val($(this).text());
		$('.cw-c').removeClass('cw-show');
	});
	
	$('.cw-cop').each(function(i){
		$('.cw-cop').eq(i).click(function(){
			function ab(){
				i==0?$('#start').focus():$('#end').focus();
			}
			setTimeout(function(){
				ab()
			},1000)
		})
	})
	var o1,o2;
//	日历插件
		$("#start").datepicker({
		showOn: "both",
		buttonText:"使用时间",
		onSelect:function(dateText,inst){
				$("#end").datepicker("option","minDate",dateText);
				$('.cw-cop').eq(0).children('p:eq(1)').text(dateText);
			},
			dateFormat:"yy/mm/dd", 
		});
		$("#end").datepicker({
			showOn: "both",
			buttonText:"归还时间",
			onSelect:function(dateText,inst){
		        $("#start").datepicker("option","maxDate",dateText);
		        $('.cw-cop').eq(1).children('p:eq(1)').text(dateText);
		        o2=dateText;
		    },
			dateFormat:"yy/mm/dd",
		});
		
		$('.cw-ready').on('click',function(){
			$('.cw-rl').children('div').animate({
				marginLeft:"-20rem"
			},1000,function(){
				$('.cw-rl').hide()
			})
		});
		$('.cw-cop').on('click',function(){
			$('.cw-rl').show();
			$('.cw-rl').children('div').animate({
			marginLeft:"0rem"
			},1000)
		})
}