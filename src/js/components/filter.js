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


