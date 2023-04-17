$(document).ready(function () {
	$(".resize-code").on("click", function () {
		$(this.parentNode.parentNode.parentNode.parentNode).toggleClass("opencode-button");
		e.preventDefault();
	});
	$(".resize-rules").on("click", function () {
		console.log("esto no funciona");
		$(this.parentNode.parentNode).toggleClass("openRules");
	});
	$(".btn-anim").click(function () {
		$(this).toggleClass("is-loading");
	});

	if (document.querySelector(".btncode")) {
		var clipboard = new ClipboardJS(".btncode");
		clipboard.on("success", function (e) {
			console.info("Action:", e.action);
			console.info("Text:", e.text);
			console.info("Trigger:", e.trigger);
			e.clearSelection();
		});
	}


	// Enseñamos el primero ocultamos el resto
	$("#tabguide-nav li:first-child").addClass("active");
	$(".tabguide-content").hide();
	$(".tabguide-content:first").show();
	// Click function
	$("#tabguide-nav li").click(function () {
		$("#tabguide-nav li").removeClass("active");
		$(this).addClass("active");
		$(".tabguide-content").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});

	$(".opencode-button").click(function () {
		$(this.parentNode.parentNode).toggleClass("active");

		return false;
	});

	$(".openshoplook").click(function () {
	
		$("body").toggleClass("openshop");
		return false;
	});


	$('input[type="checkbox"]').click(function () {
		if ($(this).is(":checked")) {
			console.log("Checkbox esta seleccionado.");
		} else if ($(this).is(":not(:checked)")) {
			console.log("Checkbox no esta seleccionado.");
		}
	});

	$("#tabguide-nav li").click(function () {
		$("#tabguide-nav li").removeClass("active");
		$(this).addClass("active");
		$(".tabguide-content").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});

	$(".nav-mainbar-close").click(function () {
		$(".nav-wrap").toggleClass("active");

	
	});



	$("#menlink").click(function () {
		$("body").addClass("menopen");
		$("body").removeClass("womanopen");

		$("#menlink").addClass("link-active");
		$("#womanlink").removeClass("link-active");
	
	});
	
	$("#womanlink").click(function () {
		$("body").addClass("womanopen");
		$("body").removeClass("menopen");

		$("#womanlink").addClass("link-active");
		$("#menlink").removeClass("link-active");

	
	
	});


    var mySwiper = new Swiper ('.swiper-container', {
		// esto es opcional
		direction: 'horizontal',
		slidesPerView: 'auto',
		spaceBetween: 0,
		//visibilityFullFit: true,
		pagination: '.swiper-pagination',
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
	  })





});

if(document.querySelector(".md-scroll-wrap")){

	gsap.registerPlugin(ScrollTrigger);
	ScrollTrigger.saveStyles(".mobile, .desktop");
	
	let container = document.querySelector(".md-scroll-wrap");
	
	ScrollTrigger.matchMedia({
		"(min-width: 768px)": function () {
			gsap.to(".md-scroll-wrap", {
				x: () =>
					-(container.scrollWidth - document.documentElement.clientWidth) + "px",
				ease: "none",
				scrollTrigger: {
					trigger: ".md-scroll",
					invalidateOnRefresh: true,
					pin: true,
					scrub: 1,
					end: () => "+=" + container.offsetWidth,
				},
			});
		},
	});
	
	// Script
	lastScroll = 0;
	$(window).on("scroll", function () {
		var scroll = $(window).scrollTop();
		if (lastScroll - scroll > 0) {
			$("body").addClass("scrollUp");
		} else {
			$("body").removeClass("scrollUp");
		}
		lastScroll = scroll;
	});
	
	
	

}

