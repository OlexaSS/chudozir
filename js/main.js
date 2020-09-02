$(function(){

$('.glasses-slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/prev-arrow.png" alt="">',
  nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/next-arrow.png" alt="">',
  responsive: [
          {
            breakpoint: 641,
            settings: {
              slidesToShow: 1
            }
          }
    ]
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

//закрыть по всему клику вне окна
let closePopupOnWindow = () => {
  $(document).mouseup(function(e){
    let popup = $('.js-popup-action');
    if (e.target != popup[0] && popup.has(e.target).length === 0){
      $('.js-overlay-action').fadeOut();
      $('.wrapper').css('filter', 'none');
      $('body').removeClass('lock');
    }
  });
}
 //закрыть окно на крестик
let closePopupOnBtn = () => {
  $('.js-close-popup').click(function(){
    $('.js-overlay-action').fadeOut();
    $('.wrapper').css('filter', 'none');
    $('body').removeClass('lock');
  });
}

let callback = $('.js-callback');
let getCoastBtn = $('.js-getCoastBtn');
let getAxessoriesBtn = $('.js-getAxessories');
let getSpectaclesBtn = $('.js-getSpectacles');
let getAppointmentBtn = $('.js-appointment');
let getQuestionBtn = $('.js-question');


let openPopup = (element) =>{
  element.click(function(event){
    event.preventDefault();
  $('.wrapper').css('filter', 'blur(5px)');
  $('body').addClass('lock');
  $('.js-overlay-action').fadeIn();
  $('.popup-slider').slick('setPosition');
  closePopupOnBtn();  
  closePopupOnWindow();
  });
}

openPopup(callback);
openPopup(getCoastBtn);
openPopup(getAxessoriesBtn);
openPopup(getSpectaclesBtn);
openPopup(getAppointmentBtn);
openPopup(getQuestionBtn);


$('.menu-btn').on('click', function(){
      $('.header-contacts').toggleClass('active');
    });

window.addEventListener('resize', function(){
      let w = $(window).width();
    console.log (w);
      
  });


});
