$(function() {


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