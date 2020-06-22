$(function (){
	//导航下拉菜单
	$(".addressli").mouseover(function (){
//		$(".addressli").addClass("yangshi");
		$(".addressxiala").show();
//		$(".addressli>img").hide();
	}).mouseout(function (){
//		$(".addressli").removeClass("yangshi")
		$(".addressxiala").hide();
//		$(".addressli>img").show();
	});
	$(".wodejingdongli").mouseover(function (){
		$(".wodejingdongli").addClass("yangshi");
		$(".wodejingdong").show();
	}).mouseout(function (){
		$(".wodejingdongli").removeClass("yangshi")
		$(".wodejingdong").hide();
	});
	$(".qiye").mouseover(function (){
		$(".qiye").addClass("yangshi02");
		$(".qiyecaigou").show();
	}).mouseout(function (){
		$(".qiye").removeClass("yangshi02")
		$(".qiyecaigou").hide();
	});
	$(".kehufuwuli").mouseover(function (){
		$(".kehufuwuli").addClass("yangshi");
		$(".kehufuwu").show();
	}).mouseout(function (){
		$(".kehufuwuli").removeClass("yangshi")
		$(".kehufuwu").hide();
	});
	$(".wangzhandaohangli").mouseover(function (){
		$(".wangzhandaohangli").addClass("yangshi");
		$(".wangzhandaohang").show();
	}).mouseout(function (){
		$(".wangzhandaohangli").removeClass("yangshi")
		$(".wangzhandaohang").hide();
	});
	$(".shoujijingdongli").mouseover(function (){
		$(".shoujijingdongli").addClass("yangshi");
		$(".shoujijingdong").show();
	}).mouseout(function (){
		$(".shoujijingdongli").removeClass("yangshi")
		$(".shoujijingdong").hide();
	});
	//头部购物车下拉菜单
	$(".gouwuche").mouseover(function (){
		$(".gouwuche").addClass("gouwucheyangshi");
		$(".wodegouwuche").show();
	}).mouseout(function (){
		$(".gouwuche").removeClass("gouwucheyangshi")
		$(".wodegouwuche").hide();
	});
	/*
	 * 主体
	 */
	/*
	 * 主体二级菜单
	 */
	
	$('.zhuticontent').mouseover(function(){
		$(".jiayongdianqi").mouseover(function (){
		$(".jia-yong").show();
		});
		$(".erc-2").mouseover(function (){
			$(".shou-ji").show();
		});	
	}).mouseout(function(){
		$('.er-le').hide();
	});

});
/*
 * 主体轮播
 */
$(document).ready(function (){
	var $box = $('.zhutilunboleft');
	var $arrowLeft = $('.arrow .lef-1');
	var $arrowRight = $('.arrow .rig-1');
	var $uLi = $('.zhutilunboleft>ul>li');
	var $ol = $('.zhutilunboleft>ol');
	var imgNum = $('.zhutilunboleft>ul>li').length;
	var index = 0;
	var num = 0;
	while(num<imgNum){
		$ol.append('<li></li>');
		num++;
	}
	var $oLi = $('.zhutilunboleft>ol>li');
	$oLi.first().addClass('now');
	$oLi.mouseover(function (){
		$(this).addClass('now').siblings().removeClass('now');
		index = $(this).index();
		$uLi.eq(index).fadeIn().siblings().fadeOut();
	});
	$arrowRight.click(function (){
//		console.log(index);
		index++;
//		console.log(index);
        if(index>imgNum-1) {
            index = 0;
        }
        $uLi.eq(index).fadeIn().siblings().fadeOut();
        $oLi.eq(index).addClass('now').siblings().removeClass('now');
        return false;
	});
	$arrowLeft.click(function (){
		index--;
		if(index<0){
			index = imgNum-1;
		}
		$uLi.eq(index).fadeIn().siblings().fadeOut();
		$oLi.eq(index).addClass("now").siblings().removeClass("now");
		return false;
	});
	var timlun = setInterval(function(){
		$arrowRight.click();
	},2000);
	$box.hover(function (){
		clearInterval(timlun);
	}, function (){
		timlun = setInterval(function (){
			$arrowRight.click();
		},2000);
	});
});





/*
 * 右边轮播
 */
$(document).ready(function(){
	$('.arrow02').hide();
	var $arrowleft = $('.left02');
	var $arrowright = $('.rigth02');
	var $divli = $('.zhutilunboright>li');
	var imgnum = $('.zhutilunboright>li').length;
	var index = 0;
	$('.zhutilunboright').mouseover(function(){
		$('.arrow02').show();
	}).mouseout(function(){
		$('.arrow02').hide();
	});
	 $arrowleft.click(function(){
		index--;
		console.log(index)
		if(index<0){
			index=imgnum-1;
		}
		$divli.eq(index).fadeIn().siblings().fadeOut();
	});
	$arrowright.click(function(){
		console.log(index);
		index++;
		console.log(index);
		if(index>imgnum-1){
			index=0;
		}
		$divli.eq(index).fadeIn().siblings().fadeOut();
	});
	var timelun = setInterval(function(){
		$arrowright.click();
	},5000);
});
/*
 * 话费充值菜单
 */
$(document).ready(function(){
	$('.xialahuafeixianshi').mouseover(function(){
		$('.xialahuafei').animate({bottom:'-1px'},"slow").css('display','block');
	})
	$('.huafeichong').mouseover(function(){
		$('.liuliangchong>.xieneirong').hide();
		$('.liuliangchong>a').css('color','#666666');
		$('.huafeichong>.xieneirong').show();
		$('.huafeichong>a').css('color','red');
	});
	$('.liuliangchong').mouseover(function(){
		$('.huafeichong>.xieneirong').hide();
		$('.huafeichong>a').css('color','#666666');
		$('.liuliangchong>.xieneirong').show();
		$('.liuliangchong>a').css('color','red');
	});
	//关闭
	$('.closshuafei').click(function(){
		$('.xialahuafei').css({'display':'none','bottom':'-256px'});
	});
});

$(function(){
	var phone = localStorage.getItem('dengstr');
	var obj = JSON.parse(phone);
	$(obj).each(function(i,e){
		$('.neirong>a:first').html('用户:'+e.zhanghao);
		$('.huan-ying-guang').html('用户:'+e.zhanghao)
	})
	$('.manfeizhuce').html('');
})
