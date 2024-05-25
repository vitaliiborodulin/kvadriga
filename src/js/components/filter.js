if(document.querySelector('.filter__items')){
    let mixer = mixitup('.filter__items');
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



