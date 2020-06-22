/*
 * 秒杀
 */

$(document).ready(function(){
	var $shi = $('.ms-shi');
	var $fen = $('.ms-fen');
	var $miao = $('.ms-miao');
	
	setInterval(function(){
		if(parseInt($miao.html())<=0){
			var fen = parseInt($fen.html());
			fen--;
			$fen.html(fen);
			$miao.html(59);
			
			if(fen<=0){
			var shi = parseInt($shi.html());
				shi--;
				$shi.html(shi);
				$fen.html(59);
				
				if(shi==0&&fen==1&&miao==1){
					alert("倒计时完成！");
					return false;
				}
			}
		
		}
		
		var miao = parseInt($miao.html());
		miao--;
		$miao.html(miao);
	},1000);

	
});


//
//$(function(){
//	 var setTimer = null;
//	 var chazhi = 0;
//	 //差值计算
//	 //例子(模拟)
//	 chazhi = 135 * 86400000;
//	 //真实时间(注意月份需减掉1，否则时间会计算错误)
//	 //chazhi = (new Date(year,month-1,day,hour,minute,second)) - (new Date()); //计算剩余的毫秒数
//	 //chazhi = (new Date(2018,8-1,6,6,6,6)) - (new Date());
//	  
//	 //执行函数部分
//	 countFunc(chazhi);
//	 setTimer = setInterval(function() {
//	 chazhi = chazhi - 1000;
//	 countFunc(chazhi);
//	 }, 1000);
//	 function countFunc(leftTime) {
//	 if(leftTime >= 0) {
//	  var days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数 
//	  var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时 
//	  var minutes = parseInt(leftTime / 1000 / 60 % 60, 10); //计算剩余的分钟 
//	  var seconds = parseInt(leftTime / 1000 % 60, 10); //计算剩余的秒数 
//	  days = checkTime(days);
//	  hours = checkTime(hours);
//	  minutes = checkTime(minutes);
//	  seconds = checkTime(seconds);
//	  $(".joind").html(days);
//	  $(".joinh").html(hours);
//	  $(".joinm").html(minutes);
//	  $(".joins").html(seconds);
//	 } else {
//	  clearInterval(setTimer);
//	  $(".joind").html("00");
//	  $(".joinh").html("00");
//	  $(".joinm").html("00");
//	  $(".joins").html("00");
//	 }
//	 }
//	 function checkTime(i) { //将0-9的数字前面加上0，例1变为01 
//	 if(i < 10) {
//	  i = "0" + i;
//	 }
//	 return i;
//	 }									
//});

$(function(){
	$(".ph-yy-1").mouseover(function(){
		$('.ph-con-box-1').show().siblings().hide();
	});
	$(".ph-xx-2").mouseover(function(){
		$('.ph-con-box-2').show().siblings().hide();
	});
	$(".ph-wj-3").mouseover(function(){
		$('.ph-con-box-3').show().siblings().hide();
	});
	$(".ph-ly-4").mouseover(function(){
		$('.ph-con-box-4').show().siblings().hide();
	});
	$(".ph-yl-5").mouseover(function(){
		$('.ph-con-box-5').show().siblings().hide();
	});
});

$(document).ready(function(){
	function nextscroll(){
		var vcon = $('.ms-sp-lb');
		var offset = ($('.ms-sp-lb ul').width())*-1;
		vcon.stop().animate({left:offset},'slow',function(){
			var firstItem = $('.ms-sp-lb ul').first();
			$('.ms-sp-box').find('.ms-sp-lb').append(firstItem);
			$(this).css('left','0px');
		})
	}
	$('.lef3').click(function(){
		var vcon = $('.ms-sp-lb');
		var offset = ($('.ms-sp-lb ul').width())*-1;
		var lastItem = $('.ms-sp-lb ul').last();
		$('.ms-sp-box').find('.ms-sp-lb').prepend(lastItem);
		vcon.css('left',offset);
		vcon.animate({left:'0px'},'slow');
	});
	$('.rig3').click(function(){
		nextscroll();
	})
});

$(function(){
	$('.tui-guan').click(function(){
		$(this).parents('.tui-1-q').remove();
	})
})













