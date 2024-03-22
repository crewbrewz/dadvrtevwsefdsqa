var TxtRotate = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	}
	else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">'+this.txt+'&nbsp</span>';

	var that = this;
	var delta = 175 - Math.random() * 100;

	if (this.isDeleting) { delta /= 2; }

	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period / 1.3;
		this.isDeleting = true;
	}
	else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 350;
	}

	setTimeout(function() {
		that.tick();
	}, delta);
};


// --- //

window.addEventListener('load', function () {
	document.getElementsByTagName("body")[0].style.opacity = "1";
	document.getElementsByClassName("tilt")[0].style.transform = "scale(1)";
	
	// - //
	
	var elements = document.getElementsByClassName('rotate');
	
	for (var i=0; i<elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-rotate');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
			new TxtRotate(elements[i], JSON.parse(toRotate), period);
		}
	}
});

// --- //

Splitting();

var scroll = new SmoothScroll('a[href*="#"]');

// --- //

if (isMobile()) {
	console.log(1);
	let jsScroll = document.getElementsByClassName('js-scroll')[0],
		jsCont = document.getElementsByClassName('js-cont')[0];
	jsScroll.style.position = "unset";
	jsCont.style.overflow = "auto";
}
else {
	let body = document.body,
		jsScroll = document.getElementsByClassName('js-scroll')[0],
		speed = .055;

	var offset = 0;

	body.style.height = jsScroll.clientHeight + "px";

	function smoothScroll() {
		offset += (window.pageYOffset - offset) * speed;
			
		var scroll = "translateY(-" + offset + "px) translateZ(0)";
		jsScroll.style.transform = scroll;
			
		raf = requestAnimationFrame(smoothScroll);
	}

	smoothScroll();

	window.onresize = function() {
		setTimeout(function() {
			body.style.height = jsScroll.clientHeight + "px";
			closeAllAccordions();
		}, 850);
	}

	// --- //

	const tilt = document.querySelector('.tilt');

	function transform(x, y) {
		const offsetX = -(y - (canvas.height / 2)) / 65;
		const offsetY = (x - (canvas.width / 2)) / 65;
			
		tilt.style.transform = "perspective(1000px)"
			+ "rotateX(" + offsetX + "deg)"
			+ "rotateY(" + offsetY + "deg)";
	}

	landing.addEventListener('mouseleave', e => {
		tilt.style.transform = "perspective(1000px)";
	});
}

let lastX = 0, lastY = 0, range = 5;

function outside(x, y) {
	return x < (lastX - range) ||
		x > (lastX + range) ||
		y < (lastY - range) ||
		y > (lastY + range);
}

// --- //

const default_page = document.getElementById("default");
const pricing_page = document.getElementById("pricing");
const payment_page = document.getElementById("payment");

// --

document.getElementById("main_btn").onclick = function() {
	default_page.style.opacity = "0";
	default_page.style.top = "22vh";
	
	pricing_page.style.display = "flex";

	setTimeout(function() {
		default_page.style.display = "none";
		 
		pricing_page.style.opacity = "1";
		pricing_page.style.top = "26vh";
	}, 500);
};

// --

document.getElementById("back_btn").onclick = function() {
	pricing_page.style.opacity = "0";
	pricing_page.style.top = "20vh";
	
	setTimeout(function() {
		pricing_page.style.display = "none";
		default_page.style.display = "block";

		setTimeout(function() {
			default_page.style.opacity = "1";
			default_page.style.top = "28vh";
		}, 15);
	}, 500);
};

// --

const dailyupper1 = document.getElementById("daily-upper-1");
const dailyupper2 = document.getElementById("daily-upper-2");

const weeklyupper1 = document.getElementById("weekly-upper-1");
const weeklyupper2 = document.getElementById("weekly-upper-2");

const monthupper1 = document.getElementById("month-upper-1");
const monthupper2 = document.getElementById("month-upper-2");

const lifetimeupper1 = document.getElementById("lifetime-upper-1");
const lifetimeupper2 = document.getElementById("lifetime-upper-2");

document.getElementById("daily-button").onclick = function() {
	dailyupper1.style.opacity = "0";
	
	setTimeout(function() {
		dailyupper1.style.display = "none";
		dailyupper2.style.display = "block";
		
		setTimeout(function () {
			dailyupper2.style.opacity = "1";
		}, 15);
	}, 450);
};

document.getElementById("daily-back").onclick = function() {
	dailyupper2.style.opacity = "0";
	
	setTimeout(function() {
		dailyupper2.style.display = "none";
		dailyupper1.style.display = "block";
		
		setTimeout(function () {
			dailyupper1.style.opacity = "1";
		}, 15);
	}, 450);
};

//

document.getElementById("weekly-button").onclick = function() {
	weeklyupper1.style.opacity = "0";
	
	setTimeout(function() {
		weeklyupper1.style.display = "none";
		weeklyupper2.style.display = "block";
		
		setTimeout(function () {
			weeklyupper2.style.opacity = "1";
		}, 15);
	}, 450);
};

document.getElementById("weekly-back").onclick = function() {
	weeklyupper2.style.opacity = "0";
	
	setTimeout(function() {
		weeklyupper2.style.display = "none";
		weeklyupper1.style.display = "block";
		
		setTimeout(function () {
			weeklyupper1.style.opacity = "1";
		}, 15);
	}, 450);
};

//

document.getElementById("month-button").onclick = function() {
	monthupper1.style.opacity = "0";
	
	setTimeout(function() {
		monthupper1.style.display = "none";
		monthupper2.style.display = "block";
		
		setTimeout(function () {
			monthupper2.style.opacity = "1";
		}, 15);
	}, 450);
};

document.getElementById("month-back").onclick = function() {
	monthupper2.style.opacity = "0";
	
	setTimeout(function() {
		monthupper2.style.display = "none";
		monthupper1.style.display = "block";
		
		setTimeout(function () {
			monthupper1.style.opacity = "1";
		}, 15);
	}, 450);
};

//

document.getElementById("lifetime-button").onclick = function() {
	lifetimeupper1.style.opacity = "0";
	
	setTimeout(function() {
		lifetimeupper1.style.display = "none";
		lifetimeupper2.style.display = "block";
		
		setTimeout(function () {
			lifetimeupper2.style.opacity = "1";
		}, 15);
	}, 450);
};

document.getElementById("lifetime-back").onclick = function() {
	lifetimeupper2.style.opacity = "0";
	
	setTimeout(function() {
		lifetimeupper2.style.display = "none";
		lifetimeupper1.style.display = "block";
		
		setTimeout(function () {
			lifetimeupper1.style.opacity = "1";
		}, 15);
	}, 450);
};
// --- //

const _faqField = document.querySelectorAll(".faq-div");

_faqField.forEach((_div) => {
	_div.onclick = function() {
		const _contentField = this.getElementsByTagName("div")[1];
		const _faqIcon = this.getElementsByTagName("i")[0];

		if (_contentField.style.maxHeight) {
			closeAllAccordions();
			_contentField.style.maxHeight = null;
			_contentField.style.opacity = null;
			_contentField.style.transform = "translate(0, -16px)";
			_div.style.border = "1px solid rgba(255, 255, 255, .125)";
			_faqIcon.style.transform = null;
		}
		else {
			closeAllAccordions();
			_contentField.style.maxHeight = _contentField.scrollHeight + "px";
			_contentField.style.opacity = "1";
			_contentField.style.transform = "translate(0, 0)";
			_div.style.border = "1px solid rgba(255, 255, 255, .25)";
			_faqIcon.style.transform = "rotate(180deg)";
		}
	};
});

function closeAllAccordions() {
	_faqField.forEach((_div) => {
		const _contentField = _div.getElementsByTagName("div")[1];
		_contentField.style.maxHeight = null;
		_contentField.style.opacity = null;
		_contentField.style.transform = "translate(0, -16px)";
		_div.style.border = "1px solid rgba(255, 255, 255, .125)";
		_div.getElementsByTagName("i")[0].style.transform = null;
	});
}

const _faqExtension = document.getElementById("faq-extension");
const _faqExtender = document.getElementById("faq-extender");
const _faqExtenderText = document.getElementById("faq-extender-text");
const _faqExtender1 = document.getElementById("faq-extender-1");
const _faqExtender2 = document.getElementById("faq-extender-2");

_faqExtender.onclick = function() {
	if (_faqExtension.style.display == "none") {
		_faqExtenderText.textContent = "Reduce";
		_faqExtender1.style.transform = "rotate(180deg)";
		_faqExtender2.style.transform = "rotate(180deg)";
		
		_faqExtension.style.display = "block";
		document.body.style.height = document.getElementsByClassName('js-scroll')[0].clientHeight + "px";
	}
	else {
		_faqExtenderText.textContent = "Extend";
		_faqExtender1.style.transform = "unset";
		_faqExtender2.style.transform = "unset";
		
		_faqExtension.style.display = "none";
		document.body.style.height = document.getElementsByClassName('js-scroll')[0].clientHeight + "px";
	}
};
