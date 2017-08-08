var app=angular.module('atr',[]);
app.controller('set',function($scope,$http){
	$http.get('../json/lead.json').success(function(data){
		$scope.sets=data.set;
		$scope.sts=data.st;
	})
	var sPan=document.getElementsByClassName('cw-sp');
	var a=["javascript:;","register.html"];
	$scope.arr=function(index){
		$scope.now=a[index]
	}
	$scope.click=function(index){
		$scope.now=index;
		var a=sPan[index].children[0].getAttribute('src')!="../images/global/set_02.jpg";
		if(a){
			sPan[index].children[0].setAttribute('src','../images/global/set_02.jpg');
			sPan[index].children[1].innerHTML=""
		}else{
			sPan[index].children[0].setAttribute('src','../images/global/set_01.jpg');
			sPan[index].children[1].innerHTML="已开启"
		}
	}
})