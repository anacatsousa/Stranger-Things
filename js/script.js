gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
	smooth: 1.5,
	effects: true,
});

function PageAnimation() {
	// Header Animations
	gsap.from('header', {
		opacity: 0,
		duration: 1,
	});

	gsap.from('picture:nth-child(1)', {
		y: -60,
		duration: 1,
	});

	gsap.from('picture:nth-child(2)', {
		y: 60,
		duration: 1,
	});

	// FooterAnimations

	gsap.from('footer', {
		y: '-30%',
		immediateRender: false,
		scrollTrigger: {
			trigger: 'footer',
			scrub: true,
			invalidateOnRefresh: true,
			end: '100% 100%',
		},
	});
}

// Preloader

const tl = gsap.timeline({
	onComplete() {
		PageAnimation();
		gsap.to('#preloader', {
			opacity: 0,
			display: 'none',
		});
	},
});

tl.to('#preloader path', {
	duration: 2,
	strokeDashoffset: 0,
});
tl.to('#preloader path', {
	fill: 'rgb(168, 19, 19)',
	duration: 1,
	strokeDashoffset: 0,
});
