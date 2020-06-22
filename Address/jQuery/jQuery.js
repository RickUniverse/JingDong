$(function(){
	$('.yf-price').html('$'+localStorage.getItem('jiage'));
});
$(function(){
	$('.sp-di').css('border','1px solid rgba(0,0,0,.2)');
	$('.sp-di-1>span').addClass('yang-bor');
	$('.di-zhi-box').click(function(){
		$(this).children('.sp-di').children('span').addClass('yang-bor');
		$(this).siblings().children('.sp-di').children('span').removeClass('yang-bor');
		$('.dizi-didian').children('.di-zi').html($(this).children('.p-di').children('.p-di-box').children('p').html())
	})
	$('.geng-duo').click(function(){
		if($('.di-zhi-box').hasClass('yang-di')==false){
			$('.di-zhi-box').addClass('yang-di');
		}else{
			$('.di-zhi-box').removeClass('yang-di');
		}
	});
});
$(function(){
	$('.zhi-bie-ming>span').click(function(){
		$('[name=dizhi-bie-ming]').val($(this).html()); 
	});
	$('.xin-zeng-shou-huo').click(function(){
		$('.xin-di-zhi').css('display','block');
	});
	$('.guan-bi-tian').click(function(){
		$('.xin-di-zhi').css('display','none');
	});
//	console.log($('[name=suodiqu]').text());
	$('form').submit(function(){
		var diqu = $('[name=suodiqu]').val();
		var shouhuo = $('[name=shou-huo-ren]').val();
		var xiang = $('[name=xiang-xi]').val();
		var phone = $('[name=shou-ji-hao]').val();
		var chang = $('[name=dizhi-bie-ming]').val();
		if(diqu==0){
			$('.suodiqu').html('请选择').css('color','red');
			return false;
		}else if(shouhuo==''){
			$('.shou-huo-ren').html('收货人不能为空').css('color','red');
			return false;
		}else if(xiang==''){
			$('.xiang-xi').html('详细地址不能为空').css('color','red');
			return false;
		}else if(phone==''){
			$('.shou-ji-hao').html('手机号不能为空').css('color','red');
			return false;
		}else{
			if(chang==''){
				chang='默认';
			}
			var clonef = $('.di-zhi-box:first').clone(true);
			$(clonef).children('.sp-di').children('span').html(chang);
			$(clonef).children('.p-di').children('.p-di-box').children('p').html(shouhuo+'&nbsp;&nbsp;'+diqu+'&nbsp;&nbsp;'+xiang+'&nbsp;&nbsp;'+phone);
			$(clonef).children('.sp-di').children('span').html(chang);
			$('.dizhi-zong-box').append(clonef);
			$('.xin-di-zhi').css('display','none');
		}
	});
});
$(function(){
	$('.ti-jiao-ding').click(function(){
		var jihe = {
			dizhi:$('.di-zi').html(),
			jia:$('.yf-price').html()
		}
		var jine = JSON.stringify(jihe);
		localStorage.setItem('jine',jine)
		window.location.href = '../../Payment/Payment/Payment.html';
	})
})
