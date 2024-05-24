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
// withus

// function navigationFill() {  

//     // var pr = $(".owl-theme .owl-dots .owl-dot span");
//     // $(pr).css({ width: "0%" });

//     var progressbar = $(".f-carousel__dots li.is-current");
//     $(progressbar).animate({ width: "100%" }, 'slow');
//     console.log('done')
// }

// navigationFill();

const withusSliderContainer = document.querySelector('.withus__slider');

const withusSliderOptions = { 
    Navigation: false,
    // Dots: false,
    Autoplay : {
        timeout : 2000
    },
    // on: {
    //     change: (instance) => {
    //         console.log(1)
    //     }
    // }
};

if(withusSliderContainer) {
    // const withusSliderCarousel = new Carousel(withusSliderContainer, withusSliderOptions, {Autoplay});
    const withusSliderCarousel = new Carousel(withusSliderContainer, withusSliderOptions);
}



});