$(function() {

var ss_custom = {
	"main_bar_sticky": "true"
};

function animateNav() {
	var win_scroll = $(window).scrollTop(),
			win_height = $(window).height(),
			main_nav = $('.header__bottom'),
			main_nav_offset = '',
			scroll_by = 100;

	main_nav_offset = $(main_nav).outerHeight();

	if (win_scroll > scroll_by) {
			$(main_nav).addClass('sticky-nav');
			window.setTimeout(function() {
					$(main_nav).addClass('fix');
			}, 200);
	} else {
			$(main_nav).removeClass('sticky-nav fix');
	}

}

animateNav();

$(window).on('load scroll', function() {
	animateNav();
});
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
// withus
function navigationFill() {  

    var pr = $('.f-carousel__dots li .f-carousel__dot');
    $(pr).css({ width: "0%" });

    var progressbar = $('.f-carousel__dots li.is-current .f-carousel__dot');
    $(progressbar).animate({ width: "100%" }, 'slow');
}

const withus = document.querySelector('.withus__slider');

if(withus) {
    const withusSlider = new Carousel(withus, { 
        // infinite: false,
        Navigation: false,
        // Dots: false,
        Autoplay : {
            timeout : 2000
        },
        on: {
            change: navigationFill
        }
    }, {Autoplay});
    // });
}

// service slider
const ss = document.querySelector('.ss__slider');

if(ss) {
    var ssSlider = new Carousel(ss, { 
        Navigation: false,
        Dots: false,
        infinite : false,
        dragFree: false
        // 'slidesPerPage' : 2,
        // 'friction' : 0.8,
        // 'center': true, 
        // Autoplay : {
        //     timeout : 2000
        // },
        // on: {
        //     change: (instance) => {
        //         console.log(1)
        //     }
        // }
    });

    $(window).resize(function(){
        ssSlider.reInit();
    });
    
    $('.ss__filter-buttons button').on('click', function(){
        ssSlider.reInit();
    });
}
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