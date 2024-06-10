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

// news slider
const ns = document.querySelector('.news__slider');

if(ns) {
    var newsSlider = new Carousel(ns, { 
        // Navigation: false,
        Dots: false,
        infinite : false,
    });
}

// case slider
// const cs = document.querySelector('.case__slider');

// if(cs) {
//     var caseSlider = new Carousel(cs, { 
//         // Navigation: false,
//         dragFree: false,
//         // Dots: false,
//         infinite : false,
//     });
// }

const caseSlider = new Swiper('.case__slider', {
    // Optional parameters
    // direction: 'vertical',
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

// const feedbackSlider = new Swiper('.feedback__slider', {
//     loop: true,

//     slidesPerView: 3,
//     spaceBetween: 16,
    
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     scrollbar: {
//         el: '.swiper-scrollbar',
//         draggable: true,
//         // dragSize: 20
//     }
// });


var licenseSlider = new Swiper('.license__slider', {
    loop: true,
    slidesPerView: 1.1,
    spaceBetween: 0,
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