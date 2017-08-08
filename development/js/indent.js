//
var app=angular.module('atr',[]);
app.controller('indent',function($scope,$http,$timeout,$rootScope){
	$http.get('../json/lead.json').success(function(data){
		$scope.tabs=data.tabs;
		$scope.indents=data.indent;
		$scope.ht=data.ht;
	});
	$timeout(function(){
		load()
	},1000);
	$scope.arr2=['details.html','','detailss.html',''];
	$scope.news=0;
	$scope.click=function(index){
		$scope.now=$scope.tabs[index].title;
		$scope.news=index;
		console.log($scope.now)
	}
});
app.filter('price',function(){
	return function(input){
		return "￥"+parseInt(input)
	}
})
	
function load(){
	new IScroll('.cw-tabs',{
		scrollX:true,
	 	mouseWheel: true,
	 	preventDefault:false
	})
	new IScroll('.cw-is',{
		preventDefault:false
	})
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