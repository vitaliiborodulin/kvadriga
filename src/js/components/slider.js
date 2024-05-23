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