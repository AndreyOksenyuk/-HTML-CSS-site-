'use strict';
new WOW().init();//wow animate

//acordion
$(function () {
	$("#accordion").accordion({
		collapsible: true,
		icons: null,
	});
});

// lightGallery
lightGallery(document.getElementById('lightgallery'));

// fix Header
window.addEventListener('scroll', function () {
	let fixheader = document.querySelector('.header__bottom');
	if (pageYOffset > 195 && screen.width > 1024) {
		fixheader.classList.add('fixed');
	} else fixheader.classList.remove('fixed');
});

// smooth scroll
function SmoothScrool(element) {
	window.scroll({
		top: element.offsetTop - 80,
		behavior: 'smooth'
	})
};

document.querySelectorAll('[data-toScroll]').forEach(e => {
	e.addEventListener('click', () => {
		SmoothScrool(document.getElementById(e.getAttribute('data-toScroll')))
	})
})

// anime.min 
let animenum = setInterval(function () {
	document.querySelectorAll('[data-animeNamber]').forEach(e => {
		anime({
			targets: e,
			innerHTML: [0, +e.getAttribute('data-animeNamber')],
			easing: 'linear',
			round: 1
		});
	})

	if (pageYOffset > 1326) {
		clearInterval(animenum);
	}

}, 1000);










