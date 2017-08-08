var app=angular.module('atr',[]);
app.controller('mine',function($scope,$http,$timeout){
	$http.get('../json/lead.json').success(function(data){
		$scope.tits=data.tit;
		$scope.services=data.service;
	});
	var arr=["issue.html","javascript:;","rent-out.html","income.html"];
	$scope.click=function(index){
		$scope.now=arr[index];
	};
	var arr2=["javascript:;","shop.html","collect.html","javascript:;","place-me.html"];
	$scope.click2=function(index){
		$scope.now2=arr2[index];
	};
	$timeout(function(){
		load()
	},1000);
});
function load(){
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
}
