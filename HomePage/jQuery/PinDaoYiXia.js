$(document).ready(function(){
	function nextscroll(){
		var vcon = $('.pin-dao-list');
		var offset = ($('.pin-dao-list>.pin-xuan--').width())*-1;
		vcon.stop().animate({left:offset},'slow',function(){
			var firstItem = $('.pin-dao-list>.pin-xuan--').first();
			$('.pin-dao-box').find('.pin-dao-list').append(firstItem);
			$(this).css('left','0px');
		})
	}
	$('.lef-4').click(function(){
		var vcon = $('.pin-dao-list');
		var offset = ($('.pin-dao-list>.pin-xuan--').width())*-1;
		var lastItem = $('.pin-dao-list>.pin-xuan--').last();
		$('.pin-dao-box').find('.pin-dao-list').prepend(lastItem);
		vcon.css('left',offset);
		vcon.animate({left:'0px'},'slow');
	});
	$('.rig-4').click(function(){
		nextscroll();
	})
});
/*
 * 为你推荐
 */
$(function(){
//	$('.jingxuan').css('color','white');
//	$('.wei-div').css('background-color','#C81623');
	$('.wei-tui-box>ul>li').click(function(){
		$('.wei-tui-box>ul>li').children('span').css({'color':'#999999'});
		$('.wei-tui-box>ul>li').children('.wei-div').css({'background-color':'white','color':'#333333'})
		$(this).children('.wei-div').css({'background-color':'#E1251B','color':'white'});
		$(this).children('span').css({'color':'#E1251B'});
	});
});
/*
 * 推荐
 */
$(function(){
	$('.tui-shang-pin>ul>li').mouseover(function(){
		$(this).children('.tui-guan').css({'display':'block'});
		$(this).children('a').children('.tui-xiangshi').css('display','block');
		$(this).children('a').children('.tui-1-price').css('display','none');
	}).mouseout(function(){
		$(this).children('a').children('.tui-1-price').css('display','block');
		$(this).children('a').children('.tui-xiangshi').css('display','none')
		$(this).children('.tui-guan').css('display','none');
	});
});

/*
 * 二级菜单
 */
$(function(){
	$('.wei-tui-li-1').click(function(){
		$('.tui-ul-jingxuan').css('display','block').siblings().css('display','none');
	});
	$('.wei-tui-li-2').click(function(){
		$('.tui-ul-zhineng').css('display','block').siblings().css('display','none');
	});
});

$(function(){
	
	$('.ce-dao-ul>a>li').hover(function(){
		$(this).children('span').css('color','white');
	},function(){
		$(this).children('span').css('color','#333333');
	})
});


$(function(){
	$(window).scroll(function(){
		var topding = document.documentElement.scrollTop || document.body.scrollTop;
		console.log(topding)
		var top = parseInt($("#ce-dao-hang").css("top"));
		var gunTop = parseInt($(this).scrollTop())-top+100;
		
		if(topding>4000){
			$("#ce-dao-hang").offset({top:4150+40});
		}else{
			if(topding>=762){
				$("#ce-dao-hang").offset({top:top+gunTop});
			}else{
				$("#ce-dao-hang").offset({top:762});
			}
			if(topding>=3450){
				$("#ce-dao-hang").offset({top:top+gunTop+40});
			}else{
				
			}
		}
		if(topding>=500&&topding<=1000){
			$('.jdms-z-cl').css('color','red');
		}else{
			$('.jdms-z-cl').css('color','#333333');
		}
		
		if(topding>=1300&&topding<=2300){
			$('.jdms-z-cl-2').css('color','red');
		}else{
			$('.jdms-z-cl-2').css('color','#333333');
		}
		
		if(topding>=2300&&topding<=3200){
			$('.jdms-z-cl-3').css('color','red');
		}else{
			$('.jdms-z-cl-3').css('color','#333333');
		}
		
		if(topding>=3200&&topding<=4300){
			$('.jdms-z-cl-4').css('color','red');
		}else{
			$('.jdms-z-cl-4').css('color','#333333');
		}
//		if(topding>=760&&topding<=775){
//			$("#ce-dao-hang").offset({top:top+(gunTop-100)});
//		}
	});
});







