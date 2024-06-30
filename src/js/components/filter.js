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

// reinit masonry
$('.feedback__filters button').on('click', function(){
    $('.feedback__items').masonry({
        itemSelector: '.feedback__item',
        columnWidth: 484,
    });
});


