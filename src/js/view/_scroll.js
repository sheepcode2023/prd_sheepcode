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
