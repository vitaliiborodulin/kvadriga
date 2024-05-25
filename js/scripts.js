$(function() {

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
if(document.querySelector('.filter__items')){
    let mixer = mixitup('.filter__items');
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
// withus

function navigationFill() {  

    var pr = $('.f-carousel__dots li .f-carousel__dot');
    $(pr).css({ width: "0%" });

    var progressbar = $('.f-carousel__dots li.is-current .f-carousel__dot');
    $(progressbar).animate({ width: "100%" }, 'slow');
}

// navigationFill();

const withus = document.querySelector('.withus__slider');

if(withus) {
    // const withusSliderCarousel = new Carousel(withusSliderContainer, withusSliderOptions, {Autoplay});
    const withusSlider = new Carousel(withus, { 
        // infinite: false,
        // Navigation: false,
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

// services slider
const ss = document.querySelector('.ss__slider');

if(ss) {
    var ssSlider = new Carousel(ss, { 
        Navigation: false,
        Dots: false,
        'infinite' : false, 
        'slidesPerPage' : 2,
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
}




$(window).resize(function(){
    ssSlider.reInit();
});

$('.ss__filter-buttons button').on('click', function(){
    ssSlider.reInit();
});



});