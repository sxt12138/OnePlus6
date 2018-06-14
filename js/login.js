window.onload = function(){
		go();
		erw();
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
function erw(){
	let g = document.getElementById("hh");
	let h = document.getElementById("ding");
	g.onmouseover = function(){
		h.style.display = "block";
	}
	g.onmouseout = function(){
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