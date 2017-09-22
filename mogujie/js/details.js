
//var cards = document.getElementsByClassName("card");
//for(var i = 0;i<cards.length;i++){
//	cards[i].onclick = function(){
//		this.style.background = '#ccc';
//		var bring = this.getElementsByClassName("bring");
//		bring[0].style.display = 'block';	
//	}
//}
//优惠券点击事件
$('.card').each(function(){
	$(this).click(function(){
		$(this).css('background','#ccc');
		$(this).children('.bring').css('display','block');
		var islayer = true;
		if(islayer){
			layer.msg('领取成功', {
				time: 1000, //1秒关闭（如果不配置，默认是3秒）
				type: 1
				});
			islayer = false;
		}else{
			return;
		}
	})	
})


//匿名user点击事件
$('.user').each(function(){
	$(this).click(function(){
	layer.msg('这个菇凉匿名不想对话，找其他菇凉对话吧', {
		time:1000 //1秒关闭（如果不配置，默认是3秒）
		},); 
	})	
})

//点击 .service 事件
$('.service').click(function(){
	$('.shade').css('display','block');
	$('.service-introduction').css('bottom','0')
})


//关闭service-introdution和.shade
$('.service-tit .closed').click(function(){
	var h = $('.service-introduction').css('height');
	h = "-"+h;
	console.log(h)
	$('.service-introduction').css('bottom',h);
	$('.shade').css('display','none');
})
//打开sku-content和.shade
function open(){
	$('.shade').css('display','block');
	$('.sku-content').css('bottom','0');
	$('.sku-left img').css('display','block');
}
$('.select-color').on('click',open);
$('.add').on('click',open);
$('.buy').on('click',open);
//关闭sku-content和.shade
$(".cancel").click(function(){
	var sku_h =  $('.sku-content').css('height');
	sku_h = "-"+sku_h;
	$('.sku-content').css('bottom',sku_h)	
	$('.shade').css('display','none');
	$('.sku-left img').css('display','none')
})

//.shade点击事件
$('.shade').click(function(){
	//关闭service-introdution
	var h = $('.service-introduction').css('height');
	h = "-"+h;
	$('.service-introduction').css('bottom',h);
	//关闭.sku-content
	var sku_h =  $('.sku-content').css('height');
	sku_h = "-"+sku_h;
	$('.sku-content').css('bottom',sku_h)	
	$(this).css('display','none');
	$('.sku-left img').css('display','none')
	
})

//.color-sel span 点击事件
$('.color-sel span').each(function(){
	$(this).click(function(){
		$(this).siblings('.cs').css('color','#5E5E5E');
		$(this).siblings('.cs').css('border-color','#bbb');
		$(this).css('color','#f25');
		$(this).css('border-color','#f25');
		var col = $(this).text();
		var size = $('.checked').text();
		col = '\"' + col + '\"' + '\"' + size + '\"';
		$('.sku-right span a').text(col);
		$('.sku-right span a').css('color','#f25');
		$('.select-color span:nth-child(2)').text(col);
		$('.select-color span:nth-child(2)').css('color','#f25');
	})
})

//add-sub 商品加减点击事件
var tot = Number($('.total-price').text());
$('.goods-add').click(function(){
	var qua =parseInt($('.goods-qua').text());
	qua++;
	$('.goods-qua').text(qua);
	var tot_price = tot * qua;
	$('.total-price').text(tot_price);
	if(qua>1){
		$('.goods-sub').css('color','#ed4566')
	}
})

$('.goods-sub').click(function(){
	var qua =parseInt($('.goods-qua').text());
	if(qua > 2){
		qua--;
		$('.goods-qua').text(qua);
		var tot_price = tot * qua;
		$('.total-price').text(tot);
	}else if(qua==2){
		qua--;
		$('.goods-qua').text(qua);
		$('.goods-sub').css('color','#333');
		var tot_price = tot * qua;
		$('.total-price').text(tot_price);
	}else{
		return;
	}
})

//导航栏置顶
window.onload =function(){
	var navT = $('.goods-nav').offset().top;
	var body_h = $('body').height();
	var back_T = $('.back-top').height();
		back_h = back_T*2.25+"px";
		back_T = back_T+"px";
	$(window).scroll(function(){	
		var scrollT = $(this).scrollTop();
		if(scrollT > navT){
			$('.goods-nav').css('position','fixed');
		}else if(scrollT > body_h){
			$('.right-side').stop().animate({bottom:back_h},"speed");
			$('.back-top').stop().animate({opacity:'1'},"speed");
		}else{
			$('.goods-nav').css('position','relative');
			$('.right-side').stop().animate({bottom:back_T},"speed");
			$('.back-top').stop().animate({opacity:'0'},"speed");
		}	
	})
//导航栏锚点
	var scroll_des = $('.des-text').offset().top;
	var scroll_good = $('#goods-infor').offset().top;
	var scroll_rec = $('#recommend').offset().top;
	var nav_h = parseFloat($('.goods-nav').css('height'));
	var nav_length = parseFloat($('.goods-nav a').css('width'));
	$('.pic-description').click(function(){		
		var scroll_h = scroll_des - nav_h*2 ;	
		$('html,body').scrollTop(scroll_h);
		$('.line').css('left','0')
	})
	$('.product-parameters').click(function(){		
		var scroll_h = scroll_good - nav_h*2 ;	
		$('html,body').scrollTop(scroll_h);
		$('.line').css('left',nav_length)
	})
	$('.hot-sales').click(function(){		
		var scroll_h = scroll_rec - nav_h*2 ;	
		$('html,body').scrollTop(scroll_h);
		$('.line').css('left',nav_length*2)
	})
			
	//右侧导航栏
	var menu_h =parseFloat($('.right-menu').css('height'))*1.25;
	var menu_h_o ='-'+ menu_h + 'px'
	var menu_h_t ='-'+ menu_h*2 + 'px'
	var menu_h_th ='-'+ menu_h*3 + 'px'
	var menu_h_f ='-'+ menu_h*4 + 'px'
	$('.right-side span:first-child').click(function(){
		$('.shade').css('display','block');
		$('.nav-cover').css('display','block');
		$('.right-menu-o').animate({top:menu_h_o},50);
		$('.right-menu-t').animate({top:menu_h_t},50);
		$('.right-menu-th').animate({top:menu_h_th},50);
		$('.right-menu-f').animate({top:menu_h_f},50);
	})
	$('.nav-cover').click(function(){
		$('.shade').css('display','none');		
		$('.right-menu-o').animate({top:'0'},50);
		$('.right-menu-t').animate({top:'0'},50);
		$('.right-menu-th').animate({top:'0'},50);
		$('.right-menu-f').animate({top:'0'},50);
		setTimeout(function(){
			$('.nav-cover').css('display','none');
		},150);
	})
}
