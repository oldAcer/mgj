layer.ready(function(){
	layer.msg('请先登录',{
		time:2000,
		shade:0.3,
	});
})
//跳转注册页面
$('.register').click(function(){
	window.location.href = 'http://127.0.0.1:8020/mogujie/register.html'
})
