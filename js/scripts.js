$(function() {

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
new ClipboardJS('.header__copy-btn');

// var clipboardDemos=new ClipboardJS('.header__copy-btn');

// clipboardDemos.on('success',function(e){
//     e.clearSelection();
//     console.info('Action:',e.action);
//     console.info('Text:',e.text);
//     console.info('Trigger:',e.trigger);
//     showTooltip(e.trigger,'Copied!');
// });

// clipboardDemos.on('error',function(e){
//     console.error('Action:',e.action);
//     console.error('Trigger:',e.trigger);
//     showTooltip(e.trigger,fallbackMessage(e.action));
// });
// $('.faq__ask:first').addClass('active');
// $('.faq__answer:first').show();

$('.faq__ask').on('click', function () {
    const answer = $(this).next();

    if (!$(this).hasClass('active')){
        $('.faq__ask').removeClass('active');
        $('.faq__answer').slideUp(300);
        $(this).addClass('active');
        answer.slideDown(300);
    } else {
        $(this).removeClass('active');
        answer.slideUp(300);
    }
});


$('.accomp__title').on('click', function () {
    const descr = $(this).next();
    const heightMax = $('.accomp__descr p').height();

    if (!$(this).hasClass('active')){
        $(this).addClass('active');
        descr.addClass('open');
        descr.css('max-height', heightMax);
    } else {
        $(this).removeClass('active');
        descr.removeClass('open');
        descr.css('max-height', 64);
    }
});

// виджет содержания

$('.context-title').on('click', function () {
    const text = $(this).next();

    if (!$(this).hasClass('active')){
        $(this).addClass('active');
        text.slideDown(300);
    } else {
        $(this).removeClass('active');
        text.slideUp(300);
    }
});
if(document.querySelector('.filter__items')){
    let mixer = mixitup('.filter__items', {
        animation: {
            enable: false
        },
    });
    mixer.filter('all');
}

// services slider
if(document.querySelector('.ssfilter__items')){
    var mixer = mixitup('.ssfilter__items', {
        animation: {
            enable: false
        },
    });
    mixer.filter('all');
}

// reinit masonry
$('.feedback__filters button').on('click', function(){
    $('.feedback__items').masonry({
        itemSelector: '.feedback__item',
        columnWidth: 484,
    });
});
$('.rp').each(function(){
    const form = $(this),
    check = form.find('.form__checkbox'),
        btn = form.find('.form__submit');

    form.find('.rpole').addClass('field-is-not-filled');

    // Функция проверки полей формы
    function checkInput(){
        form.find('.rpole').each(function(){
            if($(this).val() != ''){
                $(this).removeClass('field-is-not-filled');
            } else {
                $(this).addClass('field-is-not-filled');
            }
        });
    }

    // Функция подсветки незаполненных полей
    // function lightEmpty(){
    //     form.find('.field-is-not-filled').css({'border-color':'#d8512d'});
    //     setTimeout(function(){
    //         form.find('.field-is-not-filled').removeAttr('style');
    //     },500);
    // }

    setInterval(function(){
        checkInput();
        const sizeEmpty = form.find('.field-is-not-filled');

        if(sizeEmpty.length > 0 || !check.is(':checked')){
            if(btn.hasClass('disabled')){
                return false
            } else {
                btn.addClass('disabled')
            }
        } else {
            btn.removeClass('disabled')
        }

        console.log(!check.is(':checked'))
        
    },500);

    btn.click(function(){
        if($(this).hasClass('disabled')){
            lightEmpty();
            return false
        } else {
            form.submit();
        }
    });
});


// document.querySelector('select').addEventListener('change', function() {
//     this.classList.toggle('selected', !!this.value);
//   });
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

Fancybox.bind('[data-fancybox="single"]', {
    groupAttr: false,
});

Fancybox.bind('[data-fancybox="gallery"]', {
    groupAll: true,
    Thumbs: {
        type: "classic",
    },
});
// withus slider
const withusSlider = new Swiper('.withus__slider', {
    loop: true,
    autoplay: {
        delay: 5000,
    },
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

// service slider
const ssSlider = new Swiper('.ss__slider', {
    // loop: true,
    
    slidesPerView: 1.2,
    spaceBetween: 16,
    breakpoints: {
        1200: {
            slidesPerView: 3.2,
            spaceBetween: 24,
        },
        894: {
            slidesPerView: 1.6,
            spaceBetween: 20,
        },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

$(window).resize(function(){
    ssSlider.update();
});

$('.ss__filter-buttons button').on('click', function(){
    ssSlider.update();
});

// news slider
const newsSlider = new Swiper('.news__slider', {
    loop: true,
    slidesPerView: 1.2,
    spaceBetween: 16,
    breakpoints: {
        768: {
            slidesPerView: 2.5,
            spaceBetween: 24,
        },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});

// case slider
const caseSlider = new Swiper('.case__slider', {
    // loop: true,

    slidesPerView: 1.1,
    spaceBetween: 16,

    breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 3.2,
          spaceBetween: 24
        }
    },

    // autoplay: {
    //     delay: 5000,
    //   },
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: 300
    }
});

// feedback slider
const fsSlider = new Swiper('.fs__slider', {
    // loop: true,

    slidesPerView: 1.1,
    spaceBetween: 16,

    breakpoints: {
        768: {
          slidesPerView: 1.7,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 2.2,
          spaceBetween: 24
        },

    },
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: 300
    }
});


var licenseSlider = new Swiper('.license__slider', {
    loop: true,
    slidesPerView: 1.1,
    spaceBetween: 1,
    // breakpoints: {
    //     768: {
    //       slidesPerView: 1.2
    //     },
    // },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
        delay: 5000,
    },
  });
$('.feedback__items').masonry({
    // options
    itemSelector: '.feedback__item',
    columnWidth: 484,
    // columnWidth: '.grid-sizer',
    // percentPosition: true
});
const mapHideBtn = $('.map__hide');

if(window.matchMedia('(max-width: 768px)').matches){

    mapHideBtn.on('click', function(){
        const mapInfo = $(this).parent();
        let mapInfoHeight = mapInfo.height();
        mapInfo.css('max-height', 0);

        if(mapInfoHeight > 0) {
            $(mapInfo).animate({ 'max-height': 0 }, 'slow').addClass('hide');
        } else {
            $(mapInfo).animate({ 'max-height': '45%' }, 'slow').removeClass('hide');
        }
    });

} else {

    mapHideBtn.on('click', function(){
        const mapInfo = $(this).parent();
        let mapInfoWidth = mapInfo.width();
        
        if(mapInfoWidth > 0) {
            $(mapInfo).animate({ width: 0 }, 'slow').addClass('hide');
        } else {
            $(mapInfo).animate({ width: 512 }, 'slow').removeClass('hide');
        }
    });

}

});