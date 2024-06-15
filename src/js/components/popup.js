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