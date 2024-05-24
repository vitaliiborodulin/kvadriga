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
