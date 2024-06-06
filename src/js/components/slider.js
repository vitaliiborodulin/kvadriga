// withus
// function navigationFill() {  

//     var pr = $('.f-carousel__dots li .f-carousel__dot');
//     $(pr).css({ width: "0%" });

//     var progressbar = $('.f-carousel__dots li.is-current');
//     $(progressbar).animate({ width: "100%" }, 'slow');
// }

const withus = document.querySelector('.withus__slider');

if(withus) {
    const withusSlider = new Carousel(withus, {
        Panzoom: {
            decelFriction: 0.3,
            // touch: false
          },
        // initialSlide: 0,
        // infinite: false,
        Navigation: false,
        // Dots: false,
        slidesPerPage: 1,
        Autoplay : {
            timeout : 2000
        },
        // transition: false,
        on: {
            // change: navigationFill,
            // change: (instance) => {
            //     // Current page
            //     const page = instance.page;
            //     // Page count
            //     const pages = instance.pages.length;
            //     // Current page slides
            //     const slides = instance.pages[page].slides;
            //     console.log(page)
            //   },
        }
    }, {Autoplay});
    // });

    $('.withus__next').on('click', function(){
        withusSlider.slideNext();
    });

    $('.withus__prev').on('click', function(){
        withusSlider.slidePrev();
    });
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

// snews slider
const ns = document.querySelector('.news__slider');

if(ns) {
    var newsSlider = new Carousel(ns, { 
        // Navigation: false,
        Dots: false,
        infinite : false,
    });
}