'use strict';
new WOW().init();//wow animate

// SaidbarTextArea
function SaidbarTextArea1() {
	let btn = document.getElementById('saidbar__buttonOn1');
	let title = document.getElementById('saidHead__title1');
	let background = document.getElementById('saidBar__hed1');
	let textOff = document.getElementById('textOff1');
	let contains = textOff.classList.contains('saidBar__textOff1');

	if (btn.value === '-') {
		btn.value = '+';
	} else btn.value = '-';

	textOff.classList.toggle('saidBar__textOff1');

	if (contains != true) {
		background.style.backgroundColor = '#0087be';
		title.style.color = '#fff';
	} else {
		background.style.backgroundColor = '#e2e2e2';
		title.style.color = '#494949';
	}

}

function SaidbarTextArea2() {
	let btn = document.getElementById('saidbar__buttonOn2');
	let title = document.getElementById('saidHead__title2');
	let background = document.getElementById('saidBar__hed2');
	let textOff = document.getElementById('textOff2');
	let contains = textOff.classList.contains('saidBar__textOff2');

	if (btn.value === '-') {
		btn.value = '+';
	} else btn.value = '-';

	textOff.classList.toggle('saidBar__textOff2');

	if (contains != true) {
		background.style.backgroundColor = '#0087be';
		title.style.color = '#fff';
	} else {
		background.style.backgroundColor = '#e2e2e2';
		title.style.color = '#494949';
	}
}
function SaidbarTextArea3() {
	let btn = document.getElementById('saidbar__buttonOn3');
	let title = document.getElementById('saidHead__title3');
	let background = document.getElementById('saidBar__hed3');
	let textOff = document.getElementById('textOff3');
	let contains = textOff.classList.contains('saidBar__textOff3');

	if (btn.value === '-') {
		btn.value = '+';
	} else btn.value = '-';

	textOff.classList.toggle('saidBar__textOff3');

	if (contains != true) {
		background.style.backgroundColor = '#0087be';
		title.style.color = '#fff';
	} else {
		background.style.backgroundColor = '#e2e2e2';
		title.style.color = '#494949';
	}
}
function SaidbarTextArea4(){
	let btn = document.getElementById('saidbar__buttonOn4');
	let title = document.getElementById('saidHead__title4');
	let background = document.getElementById('saidBar__hed4');
	let textOff = document.getElementById('textOff4');
	let contains = textOff.classList.contains('saidBar__textOff4');

		if(btn.value === '-'){
		 	btn.value = '+';
		 }else btn.value = '-';

	 textOff.classList.toggle('saidBar__textOff4');

	 	if(contains != true){
	 		background.style.backgroundColor = '#0087be';
	 		title.style.color = '#fff';
	 	}else{
	 		background.style.backgroundColor = '#e2e2e2';
	 		title.style.color = '#494949';
	 	} 
};


 // lightGallery
lightGallery(document.getElementById('lightgallery'));

// fix Header
window.addEventListener('scroll', function () {
	let fixheader = document.querySelector('.fix-head');
		fixheader.classList.remove('fixed');
	if (pageYOffset > 195 && screen.width > 1024) {
		fixheader.classList.add('fixed');
	} else fixheader.classList.remove('fixed');		
});


// smooth scroll

function SmoothScrool(element){
	window.scroll({
		left: 0,
		top: element.offsetTop - 80,
		behavior: 'smooth'
	})
};
let home_nav = document.querySelector('.home_nav');
let about_nav = document.querySelector('.about_nav');
let service_nav = document.querySelector('.service_nav');
let gallery_nav = document.querySelector('.gallery_nav');
let blog_nav = document.querySelector('.blog_nav');
let contactUs = document.querySelector('.contactUs_nav');

let home_nav2 = document.querySelector('.home_nav2');
let about_nav2 = document.querySelector('.about_nav2');
let service_nav2 = document.querySelector('.service_nav2');
let gallery_nav2 = document.querySelector('.gallery_nav2');
let blog_nav2 = document.querySelector('.blog_nav2');
let contactUs2 = document.querySelector('.contactUs_nav2');

let home_nav3 = document.querySelector('.home_nav3');
let about_nav3 = document.querySelector('.about_nav3');
let service_nav3 = document.querySelector('.service_nav3');
let gallery_nav3 = document.querySelector('.gallery_nav3');
let blog_nav3 = document.querySelector('.blog_nav3');
let contactUs3 = document.querySelector('.contactUs_nav3');

let footer = document.getElementById('footer');
let header = document.getElementById('header');
let service = document.querySelector('.feature');
let WhyChooseUs = document.getElementById('WhyChooseUs');
let gallery = document.getElementById('gallery');
let blog = document.getElementById('blog');
			

home_nav.addEventListener('click', ()=>{
	SmoothScrool(header);
});
about_nav.addEventListener('click', ()=>{
	SmoothScrool(WhyChooseUs);
});
service_nav.addEventListener('click', ()=>{
	SmoothScrool(service);
});
gallery_nav.addEventListener('click', ()=>{
	SmoothScrool(gallery);
});
blog_nav.addEventListener('click', ()=>{
	SmoothScrool(blog);
});
contactUs.addEventListener('click', ()=>{
	SmoothScrool(footer);
});

home_nav2.addEventListener('click', ()=>{
	SmoothScrool(header);
});
about_nav2.addEventListener('click', ()=>{
	SmoothScrool(WhyChooseUs);
});
service_nav2.addEventListener('click', ()=>{
	SmoothScrool(service);
});
gallery_nav2.addEventListener('click', ()=>{
	SmoothScrool(gallery);
});
blog_nav2.addEventListener('click', ()=>{
	SmoothScrool(blog);
});
contactUs2.addEventListener('click', ()=>{
	SmoothScrool(footer);
});

home_nav3.addEventListener('click', ()=>{
	SmoothScrool(header);
});
about_nav3.addEventListener('click', ()=>{
	SmoothScrool(WhyChooseUs);
});
service_nav3.addEventListener('click', ()=>{
	SmoothScrool(service);
});
gallery_nav3.addEventListener('click', ()=>{
	SmoothScrool(gallery);
});
blog_nav3.addEventListener('click', ()=>{
	SmoothScrool(blog);
});
contactUs3.addEventListener('click', ()=>{
	SmoothScrool(footer);
});



 // anime.min 

var animenum = setInterval(function () {
	var namber1000 = document.querySelector('#namber1000'),
		namber2020 = document.querySelector('#namber2020'),
		namber1105 = document.querySelector('#namber1105'),
		namber500 = document.querySelector('#namber500');

	anime({
		targets: namber1000,
		innerHTML: [0, 1000 + '+'],
		easing: 'linear',
		round: 1
	});

	anime({
		targets: namber2020,
		innerHTML: [0, 2020],
		easing: 'linear',
		round: 1
	});

	anime({
		targets: namber1105,
		innerHTML: [0, 1105],
		easing: 'linear',
		round: 1
	});

	anime({
		targets: namber500,
		innerHTML: [0, 500 + '+'],
		easing: 'linear',
		round: 1
	});

	if (pageYOffset > 1326) {
		clearInterval(animenum);
	}

}, 1000);

function burgerMenu() {
	let fixheader = document.querySelector('.HeaderFixed');
	let burgerMenuLine = document.querySelector(".burger-menu__button-line");

		fixheader.classList.toggle("burger-menu__nav");
		burgerMenuLine.classList.toggle("button-lineX");			
};










