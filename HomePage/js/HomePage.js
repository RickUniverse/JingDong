/**
 * 推广删除
 */
function deleteTui(){
	var top = document.getElementsByClassName("top")[0];
	//console.log(top);
	var zi = document.getElementsByClassName("img")[0];
	top.removeChild(zi);
}
/*
 * 推荐删除
 */
//function tuishan(){
//	var a = document.getElementsByClassName('tui-guan')[0];
//	var ul = a.parentNode.parentNode;
//	var li = a.parentNode;
//	ul.removeChild(li);
//}

/*
 * 滚动事件
 */
window.onscroll = function(){
	var top = document.documentElement.scrollTop || document.body.scrollTop;
//	console.log(document.documentElement.scrollTop);
//	if (top >= 733) {
//		document.getElementById("sousuobox").className="gouwufixed";
//	}else{
//		document.getElementById("sousuobox").className="";
//	}
	if(!(document.getElementById('sousuobox').className=='gouwufixed')){
		if (top >= 733) {
			document.getElementById("sousuobox").animate([
				{ transform: 'translateY(-51px)' },
				{ transform: 'translateY(0px)'}
			],{
				duration: 500,
				//iterations: Infinity
			})
			document.getElementById("sousuobox").className="gouwufixed";
		}else{
			document.getElementById("sousuobox").className="";
		}
	}
	if(top < 733){
		document.getElementById("sousuobox").className="";
	}
	if(!(document.getElementById('wei-tui-fixed').className=='weinifixed')){
		if (top >= 3450) {
			document.getElementById("wei-tui-fixed").animate([
				{ transform: 'translateY(-51px)' },
				{ transform: 'translateY(0px)'}
			],{
				duration:500,
			})
			document.getElementById("wei-tui-fixed").className="weinifixed";
		}
	}
	if(top<3450){
		document.getElementById("wei-tui-fixed").className="";
	}
//	if (top >= 3450) {
//		document.getElementById("wei-tui-fixed").className="weinifixed";
//	}else{
//		document.getElementById("wei-tui-fixed").className="";
//	}
}



















/*
 * 秒杀
 */
//$(document).ready(function () {
//		var oDate = new Date();
//		var nowTime = oDate.getTime(); //现在的毫秒数
//		oDate.setDate(oDate.getDate() + 1); // 设定截止时间为第二天
//		var targetDate = new Date(oDate.toLocaleDateString());
//		run(targetDate);
//	});
//
//	function run(enddate) {
//		getDate(enddate);
//		setInterval("getDate('" + enddate + "')", 500);
//	}
//
//	function getDate(enddate) {
//		var oDate = new Date(); //获取日期对象
//
//		var nowTime = oDate.getTime(); //现在的毫秒数
//		var enddate = new Date(enddate);
//		var targetTime = enddate.getTime(); // 截止时间的毫秒数
//		var second = Math.floor((targetTime - nowTime) / 1000); //截止时间距离现在的秒数
//
//		var day = Math.floor(second / 24 * 60 * 60); //整数部分代表的是天；一天有24*60*60=86400秒 ；
//		second = second % 86400; //余数代表剩下的秒数；
//		var hour = Math.floor(second / 3600); //整数部分代表小时；
//		second %= 3600; //余数代表 剩下的秒数；
//		var minute = Math.floor(second / 60);
//		second %= 60;
//		var spanH = $('.se-txt')[0];
//		var spanM = $('.se-txt')[1];
//		var spanS = $('.se-txt')[2];
//
//		spanH.innerHTML = tow(hour);
//		spanM.innerHTML = tow(minute);
//		spanS.innerHTML = tow(second);
//	}
//
//	function tow(n) {
//		return n >= 0 && n < 10 ? '0' + n : '' + n;
//	}
