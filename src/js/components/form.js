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


// document.querySelector('select').addEventListener('change', function() {
//     this.classList.toggle('selected', !!this.value);
//   });