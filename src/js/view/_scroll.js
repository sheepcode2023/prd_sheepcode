const home_fade_targets = document.querySelectorAll(".js-home-section");

home_fade_targets.forEach((el) => {
	gsap.from(el, 0.5, {
		opacity: 0,
		y: 30,
		scrollTrigger: {
			trigger: el,
			start: "top 80%",
			end: "+=200",
			markers: false,
			scrub: 0.5,
			once: true,
		},
	});
});

const header_height = $("header").height();
console.log(header_height)
$(function () {
	$('a[href^="#"]').click(function () {
		var adjust = header_height;
		var speed = 400;
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? "html" : href);
		var position = target.offset().top - adjust;
		$("body,html").animate({ scrollTop: position }, speed, "swing");
		return false;
	});
});
