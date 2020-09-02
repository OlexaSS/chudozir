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



$('.menu-btn').on('click', function(){
      $('.header-contacts').toggleClass('active');
    });




});
