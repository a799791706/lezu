$(document).ready(function(){
	var i=2;
	var timer=setInterval(function(){
		$('.cw-itv').text(i);
		if(i<=0){
			clearInterval(timer);
			location.href="lead.html";
		}
		i--;
	},1000);
	$('.cw-msg').eq(0).animate({
		left:"90%",
		width:"0px"
	},1500,function(){
		$('.cw-msg').eq(1).animate({
			left:"90%",
			width:"0px"
		},1500)
	})
})
