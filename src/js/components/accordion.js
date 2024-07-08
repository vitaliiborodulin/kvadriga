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