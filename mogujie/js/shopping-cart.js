var qua = document.getElementById('num') ;
var all = document.getElementById('all');
var isAll = true;
var one = document.getElementById('one');
var two = document.getElementById('two');
var product_o = document.getElementsByClassName('product-o');
var product_t = document.getElementsByClassName('product-t');
var now_price = document.getElementsByClassName('now-price');
var total_price = document.getElementById('total-price');
//计算商品总数
function num(){
	var quality = 0;
	for (var s = 0; s<isChecked.length;s++){
			if(isChecked[s]){
				quality++;
			}
	}
	qua.innerHTML = quality;
}
//计算价格
var pr = 0;
function price(){
	var sum = 0;
	for (var i = 0;i<isChecked.length;i++){
		if(isChecked[i]){
			sum += parseFloat(now_price[i].innerHTML);
		}
	}
	total_price.innerHTML = sum;
}
//单件选择商品
var imgs = document.getElementsByTagName('img');
var arr = [];
var isChecked = [];
for(var a = 0; a < imgs.length; a++){
	if(imgs[a].className == "check"){
		arr.push(imgs[a]);
	}
}
for(var k=0;k<arr.length;k++){
	arr[k].index = k;
	isChecked[k] = false;
	arr[k].onclick = function(){
		if(!isChecked[this.index]){
			this.src='img/checked.png';
			isChecked[this.index] = true;
			num();
			is_all();
			is_shop_o();
			is_shop_t();
			price();
		}else{
			this.src='img/checked2.png';
			isChecked[this.index] = false;
			num();
			is_all();
			is_shop_o();
			is_shop_t();
			price();
		}
	}
}
function is_all(){
	var isImg = true;
	for(var i=0;i<isChecked.length;i++){
		if(!isChecked[i]){
			isImg = false;
			break;
		}	
	}
	if(isImg){
		all.src = 'img/checked.png';
		isAll = false;
		checked(arr2);
		price();
	}else{
		all.src = 'img/checked2.png';
		isAll = true;
		price();
	}
}
function is_shop_o(){
	var isImg = true;
	for (var i=0;i<product_o.length;i++){
		if(!isChecked[i]){
			isImg = false;
			break;
		}
	}
	if(isImg){
		one.getElementsByTagName('img')[0].src='img/checked.png';
		allChecked[0] = false;
	}else{
		one.getElementsByTagName('img')[0].src='img/checked2.png';
		allChecked[0] = true;
	}
}
function is_shop_t(){
	var isImg = true;
	for (var i=0;i<product_t.length;i++){
		if(!isChecked[product_o.length+i]){
			isImg = false;
			break;
		}
	}
	if(isImg){
		two.getElementsByTagName('img')[0].src='img/checked.png';
		allChecked[1] = false;
	}else{
		two.getElementsByTagName('img')[0].src='img/checked2.png';
		allChecked[1] = true;
	}
}
//店铺全选
var arr2 = [];
var allChecked = [];
for(var b = 0; b < imgs.length; b++){
	if(imgs[b].className == "all-check"){
		arr2.push(imgs[b]);
	}
}
for(var j=0;j<arr2.length;j++){
	arr2[j].index = j;
	allChecked[j] = true;
	arr2[j].onclick = function(){
		if(allChecked[this.index]){
			this.src='img/checked.png';
			allChecked[this.index] = false;
			shop_check(this);
			price();
			num();
		}else{
			this.src='img/checked2.png';
			allChecked[this.index] = true;
			cancel_shop_check(this);
			price();
			num();
		}
	}
}
function shop_check(a){
	if(a.parentNode.id=='one'){
		for(var i = 0;i<product_o.length;i++){
			var p_img = product_o[i].getElementsByTagName('img');
			p_img[0].src = "img/checked.png";
			isChecked[i] = true;
		}
	}else if(a.parentNode.id=='two'){
		for(var i = 0;i<product_t.length;i++){
			var p_img = product_t[i].getElementsByTagName('img');
			p_img[0].src = "img/checked.png";
			isChecked[i+product_o.length] = true;
		}
	}
}
function cancel_shop_check(a){
	if(a.parentNode.id=='one'){
		for(var i = 0;i<product_o.length;i++){
			var p_img = product_o[i].getElementsByTagName('img');
			p_img[0].src = "img/checked2.png";
			isChecked[i] = false;
		}
	}else if(a.parentNode.id=='two'){
		for(var i = 0;i<product_t.length;i++){
			var p_img = product_t[i].getElementsByTagName('img');
			p_img[0].src = "img/checked2.png";
			isChecked[i+product_o.length] = false;
		}
	}
}
// 全选
all.onclick = function(){
	if(isAll){
		this.src = 'img/checked.png';
		isAll = false;
		checked(arr);
		checked(arr2);
		for (var s = 0; s<isChecked.length;s++){
			isChecked[s] = true;
		}
		for (var k = 0; k<allChecked.length;k++){
			allChecked[k] = false;
		}
		qua.innerHTML =arr.length;
		price();
	}else{
		this.src = 'img/checked2.png';
		isAll = true;
		no_checked(arr);
		no_checked(arr2);
		for (var s = 0; s<isChecked.length;s++){
			isChecked[s] = false;
		}
		for (var k = 0; k<allChecked.length;k++){
			allChecked[k] = true;
		}
		qua.innerHTML ='0';
	}
	price();
}
function checked(a){
	for (var s = 0; s<a.length;s++){
		a[s].src = 'img/checked.png';
	}
}
function no_checked(a){
	for (var w = 0; w<a.length;w++){
		a[w].src = 'img/checked2.png';
	}
}