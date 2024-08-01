$(function() {

const burger = $('.mobile__burger');
const closeMenu = $('.mobile__close');
const menu = $('.mobile__menu');


burger.on('click', function(e) {
    e.preventDefault();
    menu.addClass('open');
    $('html, body').addClass('overflow');
});

closeMenu.on('click', function(e) {
    e.preventDefault();
    menu.removeClass('open');
    $('html, body').removeClass('overflow');
});

$(document).keyup(function(e) {
    if (e.key === "Escape" || e.keyCode === 27) {
        menu.removeClass('open');
        $('html, body').removeClass('overflow');
    }
});
var sticky = new Sticky('.sticky');

window.onscroll = () => {
    const div = document.querySelector('.content__main');
    const aside = document.querySelector('.aside__wrapper');

    if (window.scrollY >= div.offsetTop + div.clientHeight - aside.clientHeight) {
        sticky.destroy();
        sticky.update();
        console.log('destroy')
    } else {
        sticky.run();
        sticky.update();
        console.log('update')
    }
  };
new ClipboardJS('.mail-copy-btn');

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

$('.cs__act-title').on('click', function () {
    const descr = $(this).next();
    
    if (!$(this).hasClass('active')){
        $(this).addClass('active');
        descr.addClass('open');
        // descr.css('max-height', 700);
    } else {
        $(this).removeClass('active');
        descr.removeClass('open');
        // descr.css('max-height', 140);
    }
});



// agenda
if(window.matchMedia('(min-width: 0px) and (max-width: 768px)').matches){
    $('.cs__agenda-title').on('click', function () {
        const descr = $('.agenda__box');
        const filter = $('.agenda-filter');

        if (!$(this).hasClass('active')){
            $(this).addClass('active');
            filter.slideDown();
            descr.slideDown();
            // descr.css('max-height', 700);
        } else {
            $(this).removeClass('active');
            filter.slideUp();
            descr.slideUp();
            // descr.css('max-height', 140);
        }
    });
}

let mobile1 = window.matchMedia('(min-width: 0px) and (max-width: 768px)');

let mx = 120;

if(mobile1.matches) {
    mx = 72;
}

$('.cs__title').on('click', function () {
    const descr = $(this).next();
    // const heightMax = $('.cs__descr').height();
    // console.log(heightMax);

    if (!$(this).hasClass('active')){
        $(this).addClass('active');
        descr.addClass('open');
        descr.css('max-height', 200);
    } else {
        $(this).removeClass('active');
        descr.removeClass('open');
        descr.css('max-height', mx);
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
// проверяем класс страницы иначе два вида фильтра не работают

if(document.querySelector('.page-contacts') || document.querySelector('.map-section')){

    //map cards filter with requisites
    if(document.querySelector('.map__cards')){
        var mixer = mixitup('.map__cards', {
            animation: {
                enable: false
            },
        });
        mixer.filter('.cat-rus');
    }

} else {

    // all filters (default)
    if(document.querySelector('.filter-all')){
        var mixerAll = mixitup('.filter-all', {
            animation: {
                enable: false
            },
        });
        mixerAll.filter('all');
    }

}

// case page
const filterEarthBtn = $('.filter__button-earth');
const paginationBtns = $('.pagination');
const selectBox = $('.select__box');
const caseBox = $('.case__box');
const mapWrapper = $('.map__wrapper');

const filterButtons = $('.filter__buttons--first button')

let isActiveMap = false;

filterEarthBtn.on('click', function(){
    isActiveMap = true;

    if(isActiveMap){
        caseBox.hide();
        selectBox.hide();
        paginationBtns.hide();
        mapWrapper.show();

        isActiveMap = false;
    }
});

filterButtons.on('click', function(){
    isActiveMap = false;

    if(!isActiveMap){
        caseBox.show();
        selectBox.show();
        paginationBtns.show();
        mapWrapper.hide();
    }
});

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

// header tel popup
const headerTel = $('.header__tel');

headerTel.on('click', function(){
    $(this).toggleClass('open');
    $(this).find('.widget').slideToggle();
});

window.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('.header') && !target.closest('.header__tel')) {
        headerTel.removeClass('open');
        headerTel.find('.widget').slideUp();
    }
});

$(document).keyup(function(e) {
    if (e.key === "Escape" || e.keyCode === 27) {
        headerTel.removeClass('open');
        headerTel.find('.widget').slideUp();
    }
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
    allowTouchMove: false,
    
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
    }
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

// clients slider
const clientsSlider = new Swiper('.clients__slider', {
  // loop: true,

  slidesPerView: 1.1,
  spaceBetween: 16,

  breakpoints: {
      768: {
        slidesPerView: 1.7,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 3.8,
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
const questions = [{
    question: 'Виды деятельности',
    options: [{
            money: 1000,
            html: '<input type="checkbox" class="form__checkbox" name="11" id="11" value="raz"><label for="11">Размещение</label>'
        },
        {
            money: 2000,
            html: '<input type="checkbox" class="form__checkbox" name="12" id="12" value="obez"><label for="12">Обезвреживание</label>'
        },
        {
            money: 3000,
            html: '<input type="checkbox" class="form__checkbox" name="13" id="13" value="util"><label for="13">Утилизация</label>'
        },
        {
            money: 3000,
            html: '<input type="checkbox" class="form__checkbox" name="14" id="14" value="ref"><label for="14">Обработка</label>'
        },
        {
            money: 3000,
            html: '<input type="checkbox" class="form__checkbox" name="15" id="15" value="trans"><label for="15">Транспортирование</label>'
        },
        {
            money: 3000,
            html: '<input type="checkbox" class="form__checkbox" name="16" id="16" value="harv"><label for="16">Сбор</label>'
        },

    ]
},
{
    question: 'Количество отходов',
    options: [{
            money: 10000,
            html: '<input type="radio" class="form__checkbox" name="quant" id="21"><label for="21">Больше 200 шт.</label>'
        },
        {
            money: 2000,
            html: '<input type="radio" class="form__checkbox" name="quant" id="22"><label for="22">Меньше 200 шт.</label>'
        },

    ]
},
{
    question: 'Состав услуг',
    options: [{
            money: 1000,
            html: '<label><input type="checkbox" name="zu" class="form__checkbox"><span class="custom-checkbox custom-checkbox-b"></span>Земельный участок</label>'
        },
        {
            money: 2000,
            html: '<label><input type="checkbox" name="st" class="form__checkbox"><span class="custom-checkbox custom-checkbox-b"></span>Специализированный транспорт</label>'
        },
        {
            money: 3000,
            html: '<label><input type="checkbox" name="tp" class="form__checkbox"><span class="custom-checkbox custom-checkbox-b"></span>Технический персонал</label>'
        },
        {
            money: 3000,
            html: '<label><input type="checkbox" name="so" class="form__checkbox"><span class="custom-checkbox custom-checkbox-b"></span>Специализированное оборудование</label>'
        },
        {
            money: 3000,
            html: '<label><input type="checkbox" name="ez" class="form__checkbox"><span class="custom-checkbox custom-checkbox-b"></span>Экспертное заключение ФБУЗ</label>'
        },
        {
            money: 3000,
            html: '<label><input type="checkbox" name="ps" class="form__checkbox"><span class="custom-checkbox custom-checkbox-b"></span>Получение СЭЗ (Роспотребнадзор)</label>'
        },
        {
            money: 3000,
            html: '<label><input type="checkbox" name="ld" class="form__checkbox"><span class="custom-checkbox custom-checkbox-b"></span>Формирование лицензионного дела</label>'
        },
        {
            money: 3000,
            html: '<label><input type="checkbox" name="so" class="form__checkbox"><span class="custom-checkbox custom-checkbox-b"></span>Сопровождение при проверке (Росприроднадзор)</label>'
        },
        {
            money: 3000,
            html: '<label><input type="checkbox" name="sr" class="form__checkbox"><span class="custom-checkbox custom-checkbox-b"></span>Срочное получение</label>'
        },

    ]
}];


let money = 0;
let indexOfPage = 0;

const numberOfQuestion = $('.quiz__number-of-question'),
    numberOfAllQuestions = $('.quiz__number-of-all-questions');

const question = $('.quiz__name'),
    options = $('.quiz__content');

const btnNext = $('#quiz-next');
const quizProgress = $('.quiz__progress');

const totalScore = $('#total'),
    quizOverModal = $('.quiz__over-modal');

numberOfAllQuestions.html(questions.length);

options.on('click', '.quiz__item', function() {
    $(this).addClass('quiz__item--choose').siblings().removeClass('quiz__item--choose');
    btnNext.prop("disabled", false);
});


function render(indexOfQuestion){

    

    quizProgress.attr('data-progress', indexOfQuestion);

    options.removeClass('last');

    // на третьей карточке инпуты выглядят по-другому
    if (indexOfPage == questions.length - 1) {
        options.addClass('last');
    }

    if (indexOfPage == questions.length) {
        $('.quiz__caption').hide();
        quizOver();
        return;
    }

    question.html(questions[indexOfQuestion].question);

    //вычисляем сколько вариантов ответа нужно
    let optionsNumber = questions[indexOfQuestion].options.length;

    //генерируем нужное количество вариантов ответа
    for (let i = 0; i < optionsNumber; i++) {

        let html = questions[indexOfQuestion].options[i].html;

        let optionMoney = questions[indexOfQuestion].options[i].money;
        
        $('<div class="quiz__item"></div>')
        .append(html)
        .attr('data-money', optionMoney)
        .appendTo(options);
    }
    
    numberOfQuestion.html(indexOfQuestion + 1);

}

function validate() {
    let disableNext = options.children().hasClass('quiz__item--choose');

    if (!disableNext) {
        alert('Выберите вариант ответа!')
    } else {
        options.children().each(function(index, element) {
            if ($(element).hasClass('quiz__item--choose')) {
                //суммируем баллы с выбранным вариантом
                money += parseInt($(element).data('money'));
            }
        });

        //стираем варианты от предыдущего вопроса
        options.html('');
        indexOfPage++;
        render(indexOfPage);
        btnNext.prop('disabled', true)
    }
}


function quizOver() {
    $('.quiz-container').hide();
    totalScore.html(money);
    quizOverModal.show();
}

btnNext.on('click', validate);

$(function() {
    for (let i = 0; i < questions.length; i++) {
        $('<div class="quiz__progress-item"></div>')
        .appendTo(quizProgress);
    }
    render(indexOfPage);
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
if(document.querySelector('#scene')){
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
}

});