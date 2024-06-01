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