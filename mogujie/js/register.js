var isT = false;
$('#phone').blur(function() {
	var reg = /^1(3|4|5|7|8)\d{9}/;
	var phone = $('#phone').val();
	if(!reg.test(phone)) {
		layer.msg(
			'手机号码格式不对', {
				time: 2000,
				icon: 7
			}
		)
		isT = false;
	} else {
		isT = true;
	}

})
var isE = false;
$('input[type=button]').click(function() {
	if($('#phone').val() == '' || $('#code').val() == '') {
		layer.msg('手机号码和验证码不能为空', {
			time: 2000,
			icon: 7
		});
		isE = false;
	} else {
		isE = true;
	}
	if(isT&&isE){
		layer.msg('注册成功！',{
			time:2000,
			icon:1
		})
	}
})

