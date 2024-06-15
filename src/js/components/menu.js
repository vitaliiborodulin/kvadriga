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