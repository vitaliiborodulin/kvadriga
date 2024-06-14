// var ss_custom = {
// 	"main_bar_sticky": "true"
// };

// function animateNav() {
// 	var win_scroll = $(window).scrollTop(),
// 			win_height = $(window).height(),
// 			main_nav = $('.header__bottom'),
// 			main_nav_offset = '',
// 			scroll_by = 100;

// 	main_nav_offset = $(main_nav).outerHeight();

// 	if (win_scroll > scroll_by) {
// 			$(main_nav).addClass('sticky-nav');
// 			window.setTimeout(function() {
// 					$(main_nav).addClass('fix');
// 			}, 200);
// 	} else {
// 			$(main_nav).removeClass('sticky-nav fix');
// 	}

// }

// animateNav();

// $(window).on('load scroll', function() {
// 	animateNav();
// });

const header = $('.header__bottom');
const headerHeight = header.outerHeight();

let lastScrollTop = 0;

console.log(headerHeight)

window.addEventListener('scroll', () => {
	console.log(headerHeight)
	let scrollDistance = window.scrollY;

	if (scrollDistance > lastScrollTop) {
		header.removeClass('header--fixed');
	} else {
		header.addClass('header--fixed');
	}

	if (scrollDistance === 0) {
		header.removeClass('header--fixed');

	}

	lastScrollTop = scrollDistance;
});