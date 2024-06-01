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


