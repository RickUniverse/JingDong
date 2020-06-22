//导航下拉菜单
$(function(){
	$('.da-ha-li-1').mouseover(function(){
		$(this).children('.dah-xia-la').slideDown();
	}).mouseout(function(){
		$(this).children('.dah-xia-la').slideUp();
		setInterval(2000,function(){
			
		})
	});
});
//倒计时
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
//切换
$(function(){
		function nextscroll(){
			var vcon = $('.shan-zhan-list');
			var offset = ($('.shan-zhan-list ul li').width())*-1;
			vcon.stop().animate({left:offset},'normal',function(){
				var firstItem = $('.shan-zhan-list ul li').first();
				$('.shan-zhan-list').find('ul').append(firstItem);
				$(this).css('left','0px');
			})
		}
		function prevscroll(){
			var vcon = $('.shan-zhan-list');
			var offset = ($('.shan-zhan-list ul li').width())*-1;
			var lastItem = $('.shan-zhan-list ul li').last();
			$('.shan-zhan-list').find('ul').prepend(lastItem);
			vcon.css('left',offset);
			vcon.animate({left:'0px'},'normal');
		}
		$('.lef-1').click(function(){
			if($('.shan-zhan-list>ul>li').length>6){
				prevscroll();
			}
		});
		$('.rig-1').click(function(){
			if($('.shan-zhan-list>ul>li').length>6){
				nextscroll();
			}
		});
});
//图片切换
$(function(){
	var shu = parseInt($('.shu-da-le').html());
	$('.shu-jia-t').click(function(){
		shu++;
		$('.shu-da-le').html(shu);
	})
	$('.shu-jian-b').click(function(){
		if(shu==1){
			
		}else{
			shu--;
			$('.shu-da-le').html(shu);
		}
	})
//	$('.shan-zhan-list>ul>li').mouseover(function(){
//		var xiaoImg = $(this).children('img').attr('src');
//		$(this).addClass('shang-qie-yang').siblings().removeClass('shang-qie-yang');
//		$('.sha-zhan-im-box>img').attr('src',xiaoImg);
//	})
	$(document).on('mouseover','.shan-zhan-list>ul>li',function(){
		var xiaoImg = $(this).children('img').attr('src');
		$(this).addClass('shang-qie-yang').siblings().removeClass('shang-qie-yang');
		$('.sha-zhan-im-box>img').attr('src',xiaoImg);
	})
});
//右侧商品切换
$(function(){
	$('.shang-pin-jie').addClass('qie-huan-yang');
	$('.shang-pin-jie').click(function(){
		$(this).addClass('qie-huan-yang').siblings().removeClass('qie-huan-yang');
		$('.sp-js-box-po').css('display','block').siblings().css('display','none')
	})
	$('.gui-ge').click(function(){
		$(this).addClass('qie-huan-yang').siblings().removeClass('qie-huan-yang');
		$('.sp-js-box-po-2').css('display','block').siblings().css('display','none')
	})
})
//选择颜色
//$(document).on('click');
//$(document).on('hover');
$(function(){
	$('.shan-zhan-list>ul').find('li').hover(function(){
		$(this).css('opacity','.8');
	},function(){
		$(this).css('opacity','1');
	})
	
//	$(document).on('hover','.shan-zhan-list>ul>li',function(){
//		$(this).addClass('shang-qie-yang').siblings().removeClass('shang-qie-yang');
//	})
	
	$('.shan-xuan-one').addClass('xuan-yan-border');
	$('.shan-xuan-an').click(function(){
		$('.shan-zhan-list>ul>li').remove();
		$('.sha-zhan-im-box>img').attr('src','');
		$(this).addClass('xuan-yan-border').siblings().removeClass('xuan-yan-border');
	})
	$('.shan-xuan-one').click(function(){
		var imgItem = ['../imgdetails/x1.jpg','../imgdetails/x2.jpg','../imgdetails/x3.jpg','../imgdetails/x4.jpg','../imgdetails/x5.jpg','../imgdetails/x3.jpg','../imgdetails/x4.jpg']
		$('.sha-zhan-im-box>img').attr('src',imgItem[0]);
		for(var i=0;i<imgItem.length;i++){
			var li = $('<li></li>').append($('<img src="" />').attr('src',imgItem[i]));
			$('.shan-zhan-list>ul').append(li);
		}
	})
	$('.shan-xuan-two').click(function(){
		var imgItem = ['../imgright/sx1-1.jpg','../imgright/sx1-2.jpg','../imgright/sx1-3.jpg','../imgright/sx1-4.jpg']
		$('.sha-zhan-im-box>img').attr('src',imgItem[0]);
		for(var i=0;i<imgItem.length;i++){
			$('.shan-zhan-list>ul').append($('<li></li>').append($('<img src="" />').attr('src',imgItem[i])));
		}
	})	
	$('.shan-xuan-three').click(function(){
		var imgItem = ['../imgright/sx2.jpg','../imgright/sx2-1.jpg','../imgright/sx2-2.jpg','../imgright/sx2-3.jpg']
		$('.sha-zhan-im-box>img').attr('src',imgItem[0]);
		for(var i=0;i<imgItem.length;i++){
			$('.shan-zhan-list>ul').append($('<li></li>').append($('<img src="" />').attr('src',imgItem[i])));
		}
	})
})
/*
 * 传值
 */
$(function(){
	var array = new Array();
	$('.sha-jiaru-an>span').click(function(){
		
		var dianpu = $('.dian-pu-ming').html();
		console.log(dianpu);
		var imgattr = $('.sha-zhan-im-box>img').attr('src');
		console.log(imgattr);
		var miaosu = $('.miao-su-shang').html();
		console.log(miaosu);
		var xinghao = '';
		$('.shan-xuan-box>div').each(function(i,e){
			if($(e).hasClass('xuan-yan-border')){
				xinghao = $(e).children('i').html();
			}
		});
		console.log(xinghao);
		var danjia = $('.sha-price').html();
		console.log(danjia);
		var shuliang = parseInt($('.shu-da-le').html());
		console.log(shuliang);
		var computer = {
			dianpu:dianpu,
			imgattr:imgattr,
			miaosu:miaosu,
			xinghao:xinghao,
			danjia:danjia,
			shuliang:shuliang
		}
		array.push(computer);
		var str = JSON.stringify(array);
		localStorage.setItem('str',str);
	})
})
