//导航栏添加点击事件
var s = document.getElementsByTagName('span');
var arr = [];
for (var i=0;i<s.length;i++){
	if(s[i].className=="s"){
		arr.push(s[i]);
	}
}
for (var j = 0; j<arr.length;j++) {
	arr[j].onclick = function(){
		var nodes = this.parentNode.children;
		for(var i = 0; i< nodes.length; i++){
			nodes[i].style.borderBottomColor = '#ff0077';
		}
		this.style.borderBottomColor = '#fff';
	}
}
//滚动条滑动，nav置顶
window.onload = function(){
	var nav = document.getElementsByClassName('nav')[0];
	var h = nav.offsetTop;
	console.log(h);
	window.onscroll = function(){
		var d = document.body.scrollTop || document.documentElement.scrollTop;
		if(d>h){
			nav.style.position='fixed';
			nav.style.top='0';
			nav.style.marginTop='0';
		}else{
			nav.style.position="static";
		}
	}
}

