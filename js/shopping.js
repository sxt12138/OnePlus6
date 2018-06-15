window.onload = function(){
		go();
		gie();
	}
	function go(){
	let g = document.getElementById("huaguo1");
	let h = document.getElementById("chuxian1");
	g.onmouseover = function(){
		h.style.display = "block";
	}
	g.onmouseout = function(){
		h.style.display = "none";
	}
	h.onmouseover = function(){
		h.style.display = "block";
	}
	h.onmouseout = function(){
		h.style.display = "none";
	}
}
function gie(){
	let g = document.getElementById("huaguo2");
	let h = document.getElementById("chuxian2");
	g.onmouseover = function(){
		h.style.display = "block";
	}
	g.onmouseout = function(){
		h.style.display = "none";
	}
	h.onmouseover = function(){
		h.style.display = "block";
	}
	h.onmouseout = function(){
		h.style.display = "none";
	}
}
window.onscroll=function(){
	let g =document.getElementById("bbian");
	let t = document.documentElement.scrollTop || document.body.scrollTop; 
	let h = document.getElementById("classify_1");
	let j = document.getElementById("classify_2");
	let k = document.getElementById("classify_3");
	let l = document.getElementById("classify_4");
	let m = document.getElementById("classify_5");
	let n = document.getElementById("classify_6");
	if (t>60){
		g.style.position = "fixed";
		g.style.top = 0;
		g.style.height = 75+"px";
		h.style.transform = "scale(0)";
		j.style.transform = "scale(0)";
		k.style.transform = "scale(0)";
		l.style.transform = "scale(0)";
		m.style.transform = "scale(0)";
		n.style.transform = "scale(0)";
	}else if(t<60){
		g.style.position = "";
		g.style.height = 120+"px";
		h.style.transform = "scale(1)";
		j.style.transform = "scale(1)";
		k.style.transform = "scale(1)";
		l.style.transform = "scale(1)";
		m.style.transform = "scale(1)";
		n.style.transform = "scale(1)";

	}
}