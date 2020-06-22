//function deletesc(){
//	var fu = document.getElementById('dian-pu-shang-box');
//	var zi = document.getElementsByClassName('shang-delete')[0].parentNode.parentNode;
//	console.log(zi)
//	fu.removeChild(zi);
//}
function checkdian(){
	var jian2 = document.getElementsByClassName('wu-check-xuan')[0];
	jian2.currentTarget;
//	var jian = parseInt(document.getElementsByClassName('zong-jia-z')[0].innerHTML)-parseInt(document.getElementsByClassName('content-1')[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[0].innerHTML);
	console.log(jian2)
}
//加载事件
//var zong = document.getElementsByClassName('con-content-cen');
//var dan = document.getElementsByClassName('content-5');
//for(var i=0;i<2;i++){
//	console.log(zong[0].html());
//}
window.onload = function(){//document.getElementById('shopping-body').
//	var zong = document.getElementsByClassName('con-content-cen');
//	var dan = document.getElementsByClassName('content-5');
//	for(var i=0;i<zong.length;i++){
//		
//	}
//	console.log(zong.length)
	//
	var chks = document.getElementsByTagName('input');
//	console.log(chks);
	let zongjia = 0;
	//top选
	document.getElementById('chkAll').onchange=function(){
		for(let i=0;i<chks.length;i++){
			const element = chks[i];
			if(element.type=='checkbox'&&this.checked == true){
				element.checked = true;
				if(element.className!="qi-jian-dian"){
					var shu = parseInt(element.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[0].innerText) ;
					zongjia+=shu;
					console.log(shu);
					document.getElementsByClassName('zong-jia-z')[0].innerHTML =zongjia+'.00';
					element.parentNode.parentNode.style.backgroundColor='rgb(255,244,232)';
					
				}
			}else if(element.type=='checkbox'&&this.checked == false){
				element.checked = false;
				element.parentNode.parentNode.style.backgroundColor='white';
//				document.getElementsByClassName('zong-jia-z')[0].innerHTML =00+'.00';
			}
		}
		zongjia = 0;
	}
	//bottom选
	document.getElementById('chkAll2').onchange=function(){
		for(let i=0;i<chks.length;i++){
			const element = chks[i];
			if(element.type=='checkbox'&&this.checked == true){
				element.checked = true;
				if(element.className!="qi-jian-dian"){
					var shu = parseInt(element.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[0].innerText) ;
					zongjia+=shu;
//					console.log(zongjia);
					document.getElementsByClassName('zong-jia-z')[0].innerHTML =zongjia+'.00';
					element.parentNode.parentNode.style.backgroundColor='rgb(255,244,232)';
				}
			}else if(element.type=='checkbox'&&this.checked == false){
				element.checked = false;
				element.parentNode.parentNode.style.backgroundColor='white';
//				document.getElementsByClassName('zong-jia-z')[0].innerHTML =00+'.00';
			}
		}
		zongjia = 0;
	}
	//旗舰店选
//	var chks2 = document.getElementsByClassName('sp-list-xu')[0].getElementsByTagName('input');
	var chks2 = document.getElementsByClassName('shang-pu');
//	console.log(chks2);
	document.getElementById('qi-jian-dian').onchange=function(){
		for(let i=0;i<chks2.length;i++){
			const element = chks2[i];
//			alert();
//			console.log(element);
			if(element.type=='checkbox'&&this.checked == true){
				element.checked = true;
				if(element.className!="qi-jian-dian"){
					var shu = parseInt(element.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[0].innerText) ;
					zongjia+=shu;
//					console.log(zongjia);
					element.parentNode.parentNode.style.backgroundColor='rgb(255,244,232)';
					document.getElementsByClassName('zong-jia-z')[0].innerHTML =zongjia+'.00';
					
				}
			}else if(element.type=='checkbox'&&this.checked == false){
				element.parentNode.parentNode.style.backgroundColor='white';
				element.checked = false;
				
//				document.getElementsByClassName('zong-jia-z')[0].innerHTML =00+'.00';
			}
		}
		zongjia = 0;
	}
	
	for(var i=0;i<chks.length;i++){
		const element = chks[i];
		if(element.type=='checkbox'){
//			console.log(element);
			element.onclick = function(){
				var zong=0;
				var dan=0;
				var zhi = 0;
				if(element.className!='qi-jian-dian'){
					zong = parseInt(document.getElementsByClassName('zong-jia-z')[0].innerText);
					dan = parseInt(element.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[0].innerText);
					//console.log(element.parentNode.nextElementSibling.childNodes[1].childNodes[9].childNodes[1].innerTe);
				}
				if(element.className!='qi-jian-dian'&&element.checked ==false){
//					console.log(element);
					//zhi = parseInt(document.getElementsByClassName('zong-jia-z')[0].innerText)-parseInt(element.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[0].innerText)
					zhi = zong-dan;
//					document.getElementsByClassName('zong-jia-z')[0].innerHTML = zhi;
					element.parentNode.parentNode.style.backgroundColor='white';
				}else if(element.className!='qi-jian-dian'&&element.checked ==true){
					//zhi = parseInt(document.getElementsByClassName('zong-jia-z')[0].innerText)+parseInt(element.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[0].innerText)
					zhi=zong+dan;
					element.parentNode.parentNode.style.backgroundColor='rgb(255,244,232)';
				}
				document.getElementsByClassName('zong-jia-z')[0].innerHTML = zhi+'.00';
			}
		}
	}
	//
	
	
}
