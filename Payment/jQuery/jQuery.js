$(function(){
	var chuan = JSON.parse(localStorage.getItem('jine'));
	$('.dizhi-hou').html(chuan.dizhi)
	$('.jiazhi-zong').html(chuan.jia);
})
