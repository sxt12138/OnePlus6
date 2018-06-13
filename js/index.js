window.onload = function(){
		let index = 0;
		let timer = null;
		function move(){
			index++;
			if(index >= $('.carousel img').length){
				index = 0;
			}
			$('.carousel img').eq(index).fadeIn(1000).siblings().fadeOut(1000);
			$('li').eq(index).addClass('active').siblings().removeClass('active');
		}

		function autoMove(){
			timer = setInterval(()=>{
				move();
			},3000)
		}

		autoMove();

		$('.carousel').hover(function(){
			clearInterval(timer);
		},function(){
			autoMove();
		})

		$('li').each((k,v)=>{
			$(v).click(function(){
				index = k;
				$(this).addClass('active').siblings().removeClass('active');
				$('.carousel img').eq(index).fadeIn(1000).siblings().fadeOut(1000);
				
			})
		})
		go();
		gie();
		erw();
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