//将数据转换成 a=1&b=2格式;
function json2url(json){
   var arr = [];
   //加随机数防止缓存;
   json.t = Math.random();
   for(var name in json){
      arr.push(name+'='+json[name]);
   }
   return arr.join('&');
}

function ajax(json){
   //1.创建一个ajax对象;
   if(window.XMLHttpRequest){
      var oAjax = new XMLHttpRequest();
   }else{
      var oAjax = new ActiveXObject('Microsoft.XMLHTTP');
   }

   //考虑默认值:
   if(!json.url){
      alert('请输入合理的请求地址!');
      return;
   }
   json.type = json.type || 'get';
   json.time = json.time || 5000;
   json.data = json.data || {};
// json.fnLoading && json.fnLoading();
   //判断用户传递的是get还是post请求:
   switch (json.type.toLowerCase()){
      case 'get':
         //2.打开请求；
         oAjax.open('get',json.url+'?'+json2url(json.data),true);
         //3.发送数据:
         oAjax.send();
         break;
      case 'post':
         //打开请求;
         oAjax.open('post',json.url,true);
         //设置请求头;
         oAjax.setRequestHeader('Content-type','application/x-www-form-urlencoded');
         //发送数据;
         oAjax.send(json2url(json.data));
   }
// json.fnLoading && json.fnLoading();
   //4.获取响应数据
   oAjax.onreadystatechange = function() {
      if (oAjax.readyState == 4) {
      	json.complete && json.complete();
         if (oAjax.status >= 200 && oAjax.status < 300 || oAjax.status == 304) {
            //如果外边传递了成功的回调函数，那么就执行,
            json.success && json.success(oAjax.responseText);
         } else {
            //如果外边传递了失败的回调函数，那么就执行,
            json.error && json.error(oAjax.status);
         }
//       clearTimeout(timer);//规定时间内取到数据后清除定时器;
      }
   };
// var timer;
// timer = setTimeout(function(){//设置网络响应超时;
//    alert('网络响应超时,请稍后再试');
//    oAjax.onreadystatechange = null;//网络超时后清除事件;
// },json.time);
}
