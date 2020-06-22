$(function(){
	var phone = localStorage.getItem('dengstr');
	var obj = JSON.parse(phone);
	$(obj).each(function(i,e){
		$('.neirong>a:first').html('用户:'+e.zhanghao);
	})
	$('.manfeizhuce').html('');
})
$(function(){
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
});
