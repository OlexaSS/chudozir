$(function(){

$('.slider-min').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 2,
   vertical: true,
   verticalSwiping: true,
   slidesToScroll: 1,
   arrows: false,
   asNavFor: '.slider-big',
   responsive: [
          {
            breakpoint: 1171,
            settings: {
              	vertical: false,
   				verticalSwiping: false
            }
          }
    ]
});

$('.slider-big').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1, 
  centerMode: true,
  fade: true,
  prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/prev-arrow.png" alt="">',
  nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/next-arrow.png" alt="">',
  asNavFor: '.slider-min'
});

$('.review__slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  centerMode: true,
  centerPadding: 400,
  adaptiveHeight: true,
  dotsClass: 'dots-style',
  prevArrow: '<img class="slider-arrows review-arrows__left" src="images/prev-arrow.png" alt="">',
  nextArrow: '<img class="slider-arrows review-arrows__right" src="images/next-arrow.png" alt="">',
  responsive: [
          {
            breakpoint: 620,
            settings: {
              	centerMode: false,
  				centerPadding: 0,
            }
          }
    ]
});

$('.sertificates__slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  centerMode: true,
  centerPadding: 30,
  dotsClass: 'dots-style sertificates-dots',
  prevArrow: '<img class="slider-arrows sertificates-arrows__left" src="images/prev-arrow.png" alt="">',
  nextArrow: '<img class="slider-arrows sertificates-arrows__right" src="images/next-arrow.png" alt="">',
  responsive: [
          {
            breakpoint: 1170,
            settings: {
              	centerPadding: 0,
              	slidesToShow: 2,
              	centerMode: true
            }
        },
           {
            breakpoint: 780,
            settings: {
              	slidesToShow: 1,
              	centerPadding: 30
            }
            
        }
    ]
});

$('.popup-btn').magnificPopup({
     items: {
        type: 'inline',
        src: $('<form class="white-popup popup-form" action="#">\
            <div class="popup-slider">\
                <div class="popup__item">\
                    <button class="btn-all popup-btn--callback" id="callback1">Давайте мы перезвоним</button>\
                    <button class="btn-all popup-btn btn--diagnostic" id="callback2">Записаться на диагностику зрения</button>\
                    <button class="btn-all popup-btn" id="callback3">Записаться на диагностику</button>\
                </div>\
                <div class="popup__item">\
                    <button class="btn-all popup-btn--callback" id="callback1">Давайте мы перезвоним</button>\
                    <button class="btn-all popup-btn btn--diagnostic" id="callback2">Записаться на диагностику зрения</button>\
                    <button class="btn-all popup-btn" id="callback3">Записаться на диагностику</button>\
                </div>\
                <div class="popup__item">\
                    <button class="btn-all popup-btn--callback" id="callback1">Давайте мы перезвоним</button>\
                    <button class="btn-all popup-btn btn--diagnostic" id="callback2">Записаться на диагностику зрения</button>\
                    <button class="btn-all popup-btn" id="callback3">Записаться на диагностику</button>\
                </div>\
                <div class="popup__item">\
                    <button class="btn-all popup-btn--callback" id="callback1">Давайте мы перезвоним</button>\
                    <button class="btn-all popup-btn btn--diagnostic" id="callback2">Записаться на диагностику зрения</button>\
                    <button class="btn-all popup-btn" id="callback12">Записаться на диагностику</button>\
                </div>\
                <div class="popup__item">\
                    <button class="btn-all popup-btn--callback" id="callback13">Давайте мы перезвоним</button>\
                    <button class="btn-all popup-btn btn--diagnostic" id="callback3">Записаться на диагностику зрения</button>\
                    <button class="btn-all popup-btn" id="callback15">Записаться на диагностику</button>\
                </div>\
            </div>\
        </form>')
    },
    midClick: true,
  	type: 'inline',
  	callbacks: {
    open() {
      const $slider = $('.popup-slider');
      if (!$slider.hasClass('slick-initialized')) {
        $slider.slick({
          infinite: true,
					  speed: 300,
					  slidesToShow: 1,
					   slidesToScroll: 1,
					   dots: true,
					   arrows: true,
					   dotsClass: 'popup__dots',
					  prevArrow: '<img class="popup-arrows popup-arrows__left" src="images/prev-arrow.png" alt="">',
					  nextArrow: '<img class="popup-arrows popup-arrows__right" src="images/next-arrow.png" alt="">'
        });
      }
      $slider.slick('slickGoTo', +$(this).attr('index'));
    },
  },

});

$('body').on('click','#callback1', function(){
    alert('Нажали кнопку 1');    
})

$('body').on('click','#callback2', function(){
    alert('Нажали кнопку 2');    
})
$('body').on('click','#callback3', function(){
    alert('Нажали кнопку 3');    
})

$('.menu-btn').on('click', function(){
      $('.header-contacts').toggleClass('active');
    });

});