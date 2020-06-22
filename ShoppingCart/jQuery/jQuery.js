
//加减数量
$(function(){
	suanzong2();
})
function suanzong2(){
	var con = $('.content-5');
	$(con).each(function(i,e){
		var dan = parseInt($(e).children('span').html());
		var shu = parseInt($(e).next().children('.con-content-cen').html());
		$(e).next().next().children('span').html(dan*shu+'.00');
	})
}
function suanzongjiage(){
	var con7 = $('.content-7');
	var zong = 0;
	$(con7).each(function(i,e){
		zong = parseInt($(e).children('span').html())+zong;
	});
	$('.zong-jia-z').html(zong);
};
$(function(){
	$('.qing-li-gou').click(function(){
//		suanzongjiage();
	})
})
$(function(){
	$(document).on('click','.con-jian-le',function(){
		var shu = parseInt($(this).siblings('.con-content-cen').html());
		console.log(shu);
		if(shu>1){
			shu--;
			var dan = parseInt($(this).parent().siblings('.content-5').children('span').html());
			var zong = shu*dan;
			$(this).parent().siblings('.content-7').children('span').html(zong+'.00');
			$(this).siblings('.con-content-cen').html(shu);
			var panduan = $(this).parent().prev().prev().prev().prev().prev().children('input').prop('checked');
			if(panduan){
				$('.zong-jia-z').html(parseInt($('.zong-jia-z').html())-dan+'.00');
			}
		}
	})
	$(document).on('click','.cont-jia-right',function(){
		var shu = parseInt($(this).siblings('.con-content-cen').html());
		shu++;
		var dan = parseInt($(this).parent().siblings('.content-5').children('span').html());
		var zong = shu*dan;
		$(this).parent().siblings('.content-7').children('span').html(zong+'.00');
		$(this).siblings('.con-content-cen').html(shu);
		var panduan = $(this).parent().prev().prev().prev().prev().prev().children('input').prop('checked');
		if(panduan){
			$('.zong-jia-z').html(parseInt($('.zong-jia-z').html())+dan+'.00');
		}
	})
});
//购物车删除
$(function(){
	$(document).on('click','.shang-delete',function(){
		var lengths = $(this).parents('#dian-pu-shang-box').children('.sp-content').length;
//		console.log(lengths);
		if(lengths>=2){
			$(this).parents('.sp-content').remove();
		}else if(lengths<=1){
			$(this).parents('.sp-list-xu').remove();
		}
		
		var panduan = $(this).parents('.sp-content').children('.content-1').children('input').prop('checked');
		if(panduan){
			var jiage = parseInt($(this).parents('.content-8').prev().children('span').html());
			var zongjiage = parseInt($('.zong-jia-z').html());
			var jiagezui = zongjiage-jiage;
			$('.zong-jia-z').html(jiagezui+'.00')
		}
	})
})
/*
 * 加入购物车
 */
$(function(){
	var str = localStorage.getItem('str');
	var obj = JSON.parse(str);
	$(obj).each(function(i,e){
		var cloneshang = $('.sp-list-xu:first').clone(true);
		var xiaoji = e.danjia*e.shuliang;
		$(cloneshang).children('.sp-tit-box3').children('a').html(e.dianpu);
		$(cloneshang).children('#dian-pu-shang-box').children('.sp-content').children('.content-2').children('img').attr('src',e.imgattr);
		$(cloneshang).children('#dian-pu-shang-box').children('.sp-content').children('.content-3').children('a').html(e.miaosu);
		$(cloneshang).children('#dian-pu-shang-box').children('.sp-content').children('.content-4').children('p').html(e.xinghao);
		$(cloneshang).children('#dian-pu-shang-box').children('.sp-content').children('.content-4').children('span').html('');
		$(cloneshang).children('#dian-pu-shang-box').children('.sp-content').children('.content-5').children('span').html(e.danjia);
		$(cloneshang).children('#dian-pu-shang-box').children('.sp-content').children('.content-7').children('span').html(xiaoji+'.00');
		$(cloneshang).children('#dian-pu-shang-box').children('.sp-content').children('.content-6').children('.con-content-cen').html(e.shuliang);
		$('.sou-you-shang-box').append(cloneshang);
	})
	
})
//推荐加入购物车
$(function(){
	
//	$('.jia-ru-an>span').click(function(){
//		var fu = $(this).parents('.tui-shang-content');
//		var miaosu = $(fu).children('p').html();
//		
//		var suo = $('.sp-content');
//		$(suo).each(function(q,w){
//			if($(w).children('.content-3').children('a').html()==miaosu){
//				var shu = parseInt($(w).children('.content-6').children('.con-content-cen').html());
//				shu++;
//				$(w).children('.content-6').children('.con-content-cen').html(shu);
//				
//				panduan=false;
//			}
//		})
////		$(suo).last().remove();
//	})
	$('.jia-ru-an>span').click(function(){
		var fu = $(this).parents('.tui-shang-content');
		var imgattr = $(fu).children('img').attr('src');
		var miaosu = $(fu).children('p').html();
		var jiage = $(fu).children('span').html();
		
		var zongfu = $('.sp-list-xu');
		var panduan = true;
		$(zongfu).each(function(i,e){
			var fujia = $(e).children('#dian-pu-shang-box');
			if($(e).children('.sp-tit-box3').children('a').html()=='京东自营官方旗舰店'){
//				var panduan2 = false;
//				var childrenshang = $(e).children('#dian-pu-shang-box').children('.sp-content');
//				$(childrenshang).each(function(w,r){
//					if($(r).children('.content-3').children('a').html()==miaosu){
//						console.log($(r).children('.content-3').children('a').html());
//						console.log(miaosu);
//						console.log('---');
//						var lingshi = $(r).children('.content-6').children('.con-content-cen');
//						var jiayishangpin = parseInt($(lingshi).html());
//						jiayishangpin++;
//						$(lingshi).html(jiayishangpin);
//						panduan2=true;
//					}
//				})
//				if(panduan2){
					var cloneshang = $('.sp-content').first().clone(true);
					$(cloneshang).children('.content-2').children('img').attr('src',imgattr);
					$(cloneshang).children('.content-3').children('a').html(miaosu);
					$(cloneshang).children('.content-4').children('p').html('统一型号');
					$(cloneshang).children('.content-4').children('span').html('');
					$(cloneshang).children('.content-5').children('span').html(jiage);
					$(cloneshang).children('.content-7').children('span').html(jiage*1+'.00');
					$(cloneshang).children('.content-6').children('.con-content-cen').html('1');
					$(fujia).append(cloneshang);
					panduan=false;
//				}
			}
		})
		if(panduan){
			var cloneshang = $('.sp-list-xu:first').clone(true);
			$(cloneshang).children('.sp-tit-box3').children('a').html('京东自营官方旗舰店');
			$(cloneshang).children('#dian-pu-shang-box').children('.sp-content').children('.content-2').children('img').attr('src',imgattr);
			$(cloneshang).children('#dian-pu-shang-box').children('.sp-content').children('.content-3').children('a').html(miaosu);
			$(cloneshang).children('#dian-pu-shang-box').children('.sp-content').children('.content-4').children('p').html('统一型号');
			$(cloneshang).children('#dian-pu-shang-box').children('.sp-content').children('.content-4').children('span').html('');
			$(cloneshang).children('#dian-pu-shang-box').children('.sp-content').children('.content-5').children('span').html(jiage);
//			$(cloneshang).children('#dian-pu-shang-box').children('.sp-content').children('.content-7').children('span').html(jiage*1+'.00');
			$(cloneshang).children('#dian-pu-shang-box').children('.sp-content').children('.content-6').children('.con-content-cen').html('1');
			$('.sou-you-shang-box').append(cloneshang);
		}
		suanzong2();
	})
});
$(function(){
	$('.jie-suan-an').click(function(){
		localStorage.setItem('jiage',$('.zong-jia-z').html());
		window.location.href = '../../Address/Address/Address.html';
	})
})
