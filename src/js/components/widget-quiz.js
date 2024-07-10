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