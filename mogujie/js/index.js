//首页倒计时计时器
function time_count(){
	var nowTime = document.getElementById("nowTime");
	var mydate = new Date();
	nowTime.innerHTML = mydate.getHours()+1;
	var minu = document.getElementById("minutes");
	var seco = document.getElementById("seconds");
	var m =59 - mydate.getMinutes();
	var s =59 - mydate.getSeconds();
	function add(a){
		if(a < 10){
			return "0"+a;
		}else{
			return a;
		}
	}
	minu.innerHTML = add(m);
	seco.innerHTML = add(s);
}
setInterval(time_count,1000);

//底部导航点击事件
var footer_nav = document.getElementsByClassName('footer-nav');
for (var i = 0;i<footer_nav.length;i++) {
	footer_nav[i].onclick = function(){
		var	nodes = this.parentNode.children;
		for(var j = 0 ; j<nodes.length;j++){
			nodes[j].style.color = '#9e9e9e';
		}
		this.style.color = '#FF5777';
	}
}


