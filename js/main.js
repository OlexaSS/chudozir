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
       //    {
       //      breakpoint: 1171,
       //      settings: {
       //        	vertical: false,
   				// verticalSwiping: false
       //      }
       //    }
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
  dotsClass: 'dots-style sertificates-dots',
  prevArrow: '<img class="slider-arrows sertificates-arrows__left" src="images/prev-arrow.png" alt="">',
  nextArrow: '<img class="slider-arrows sertificates-arrows__right" src="images/next-arrow.png" alt="">',
  responsive: [
          {
            breakpoint: 1170,
            settings: {
              	centerPadding: 0,
              	slidesToShow: 2,
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


// открыть по клику на кнопку
$('.js-button-action').click(function(){
  $('.wrapper').css('filter', 'blur(5px)');
  $('.js-overlay-action').fadeIn();
  $('.popup-slider').slick('setPosition');
  $('body').toggleClass('lock');
});
//закрыть окно на крестик
$('.js-close-popup').click(function(){
  $('.js-overlay-action').fadeOut();
  $('.wrapper').css('filter', 'none');
  $('body').toggleClass('lock');
});

//закрыть по всему клику вне окна
$(document).mouseup(function(e){
  let popup = $('.js-popup-action');
  if (e.target != popup[0] && popup.has(e.target).length === 0){
    $('.js-overlay-action').fadeOut();
    $('.wrapper').css('filter', 'none');
    $('body').toggleClass('lock');
  }
});

$('.popup-slider').slick({
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

$('.menu-btn').on('click', function(){
      $('.header-contacts').toggleClass('active');
    });


});
