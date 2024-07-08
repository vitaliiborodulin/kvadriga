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

// staff slider
const staffSlider = new Swiper('.staff__slider', {

    loop: true,
    parallax: true,
    watchSlidesProgress: true,
    slidesPerView: 1.1,
    spaceBetween: 16,

    breakpoints: {
        576: {
          slidesPerView: 2.1,
          spaceBetween: 20,
          loop: false,
          parallax: false,
        },
        1200: {
          slidesPerView: 2.5,
          spaceBetween: 24,
          loop: false,
          parallax: false,
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
    },
});

// cs slider
let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');

if(mobile.matches) {
    const csSlider = new Swiper('.cs__slider', {
      slidesPerView: 1.1,
      spaceBetween: 8,
      // autoHeight: true
    });
}

// cs slider more service
const csSliderMore = new Swiper('.cs__slider-more', {

  slidesPerView: 1.1,
  spaceBetween: 16,

  breakpoints: {
      576: {
        slidesPerView: 1.8,
        spaceBetween: 24,
      },
  //     1200: {
  //       slidesPerView: 1.9,
  //       spaceBetween: 24,
  //     },

  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      dragSize: 300
  },
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