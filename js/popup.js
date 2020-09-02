$('.js-btnCallback').on('click', function(event){
    event.preventDefault();
    $('.wrapper').css('filter', 'blur(5px)');
    $('body').addClass('lock');
    $('.js-overlay-action').fadeIn().html('<div class="popup js-popup-action">\
            <form class="popup__form" method="post" action="mail.php">\
                <h3 class="popup__form-title">Заполните форму,</h3>\
                <div class="form-text">и наш специалист свяжется с Вами в течении 15 минут</div>\
                <input class="popup__form-input" name="name" type="text" placeholder="Ваше имя" required>\
                <input class="popup__form-input" name="tel" type="tel" placeholder="Ваш телефон" required>\
                <button class="js-callback btn form-btn" type="submit">Давайте мы перезвоним</button>\
            </form>\
            <div class="close-popup js-close-popup"></div>\
        </div>');
});

$('.js-btnDiagnostik').on('click', function(event){
    event.preventDefault();
    $('.wrapper').css('filter', 'blur(5px)');
    $('body').addClass('lock');
    $('.js-overlay-action').fadeIn().html('<div class="popup js-popup-action">\
            <form class="popup__form" method="post" action="mail.php">\
                <h3 class="popup__form-title">Заполните форму,</h3>\
                <div class="form-text">и наш специалист свяжется с Вами в течении 15 минут для уточнения всех деталей</div>\
                <input class="popup__form-input" name="name" type="text" placeholder="Ваше имя" required>\
                <input class="popup__form-input" name="tel" type="tel" placeholder="Ваш телефон" required>\
                <button class="js-callback btn form-btn" type="submit">Записаться на диагностику зрения</button>\
            </form>\
            <div class="close-popup js-close-popup"></div>\
        </div>');
});

$('.js-btnGlasses').on('click', function(event){
    event.preventDefault();
    $('.wrapper').css('filter', 'blur(5px)');
    $('body').addClass('lock');
    $('.js-overlay-action').fadeIn().html('<div class="popup js-popup-action">\
            <form class="popup__form" method="post" action="mail.php">\
                <h3 class="popup__form-title">Заполните форму,</h3>\
                <div class="form-text">чтобы узнать стоимость, и наш менеджер свяжется с Вами в течении 15 минут</div>\
                <input class="popup__form-input" name="name" type="text" placeholder="Ваше имя" required>\
                <input class="popup__form-input" name="tel" type="tel" placeholder="Ваш телефон" required>\
                <button class="js-callback btn form-btn" type="submit">Узнать стоимость</button>\
            </form>\
            <div class="close-popup js-close-popup"></div>\
        </div>');
});

$('.js-btnAxessories').on('click', function(event){
    event.preventDefault();
    $('.wrapper').css('filter', 'blur(5px)');
    $('body').addClass('lock');
    $('.js-overlay-action').fadeIn().html('<div class="popup js-popup-action">\
            <form class="popup__form" method="post" action="mail.php">\
                <h3 class="popup__form-title">Заполните форму,</h3>\
                <div class="form-text">чтобы подобрать аксессуары для очков и линз, и наш менеджер свяжется с Вами в течении 15 минут</div>\
                <input class="popup__form-input" name="name" type="text" placeholder="Ваше имя" required>\
                <input class="popup__form-input" name="tel" type="tel" placeholder="Ваш телефон" required>\
                <button class="js-callback btn form-btn" type="submit">Узнать стоимость</button>\
            </form>\
            <div class="close-popup js-close-popup"></div>\
        </div>');
});

$('.js-btnSpectacles').on('click', function(event){
    event.preventDefault();
    $('.wrapper').css('filter', 'blur(5px)');
    $('body').addClass('lock');
    $('.js-overlay-action').fadeIn().html('<div class="popup js-popup-action">\
            <form class="popup__form" method="post" action="mail.php">\
                <h3 class="popup__form-title">Заполните форму,</h3>\
                <div class="form-text">чтобы подобрать себе очки, и наш менеджер свяжется с Вами в течении 15 минут</div>\
                <input class="popup__form-input" name="name" type="text" placeholder="Ваше имя" required>\
                <input class="popup__form-input" name="tel" type="tel" placeholder="Ваш телефон" required>\
                <button class="js-callback btn form-btn" type="submit">Подобрать себе очки</button>\
            </form>\
            <div class="close-popup js-close-popup"></div>\
        </div>');
});

$('.js-btnTeam').on('click', function(event){
    event.preventDefault();
    $('.wrapper').css('filter', 'blur(5px)');
    $('body').addClass('lock');
    $('.js-overlay-action').fadeIn().html('<div class="popup js-popup-action">\
            <form class="popup__form" method="post" action="mail.php">\
                <h3 class="popup__form-title">Заполните форму,</h3>\
                <div class="form-text">чтобы записаться на прием к специалисту, и наш менеджер свяжется с Вами в течении 15 минут, чтобы уточнить все детали </div>\
                <input class="popup__form-input" name="name" type="text" placeholder="Ваше имя" required>\
                <input class="popup__form-input" name="tel" type="tel" placeholder="Ваш телефон" required>\
                <button class="js-callback btn form-btn" type="submit">Записаться на прием</button>\
            </form>\
            <div class="close-popup js-close-popup"></div>\
        </div>');
});

$('.js-btnQuestion').on('click', function(event){
    event.preventDefault();
    $('.wrapper').css('filter', 'blur(5px)');
    $('body').addClass('lock');
    $('.js-overlay-action').fadeIn().html('<div class="popup js-popup-action">\
            <form class="popup__form" method="post" action="mail.php">\
                <h3 class="popup__form-title">Заполните форму,</h3>\
                <div class="form-text">и наш специалист ответит на все Ваши вопросы в течении 15 минут</div>\
                <input class="popup__form-input" name="name" type="text" placeholder="Ваше имя" required>\
                <input class="popup__form-input" name="tel" type="tel" placeholder="Ваш телефон" required>\
                <button class="js-callback btn form-btn" type="submit">Задать вопрос</button>\
            </form>\
            <div class="close-popup js-close-popup"></div>\
        </div>');
});


//close popup
$('.js-overlay-action').on('click', function(event){
    if( $(event.target).is('.js-close-popup') || $(event.target).is('.js-overlay-action') ) {
      event.preventDefault();
      $(this).fadeOut();
      $('body').removeClass('lock');
      $('.wrapper').css('filter', 'none');
    }
  });

