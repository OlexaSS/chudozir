$(function(){

// glasses-slider============


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

// review__slider===================

$('.review__slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  centerMode: true,
  centerPadding: 400,
  adaptiveHeight: true,
  dotsClass: 'dots-style review-dots',
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

// team__info-slider==================

$(window).on('load', function(){
  if(window.innerWidth < 980){
    $('.team__info-slider:not(.slick-initialized)').slick({

    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    dotsClass: 'dots-style team__slider-dots',
    prevArrow: '<img class="slider-arrows team__slider-arrows--left" src="images/prev-arrow.png" alt="">',
    nextArrow: '<img class="slider-arrows team__slider-arrows--right" src="images/next-arrow.png" alt="">',
    responsive: [
            {
              breakpoint: 710,
              settings: {
                slidesToShow: 1
              }
            }
      ]
    });
  } else{ 
    $('.team__info-slider.slick-initialized').slick('unslick');
  }
});

// sertificates__slider=====================

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

// map links========================================

let mapImg = $('.map-img');


$('.js-link-1').on('click', function(e){
  e.preventDefault();
  mapImg.html('<img class="map-img--mod" src="images/maps/dnepr/1.png" alt="map">')
});

$('.js-link-2').on('click', function(e){
  e.preventDefault();
  mapImg.html('<img class="map-img--mod" src="images/maps/dnepr/2.png" alt="map">')
});

$('.js-link-3').on('click', function(e){
  e.preventDefault();
  mapImg.html('<img class="map-img--mod" src="images/maps/dnepr/3.png" alt="map">')
});

$('.js-link-4').on('click', function(e){
  e.preventDefault();
  mapImg.html('<img class="map-img--mod" src="images/maps/dnepr/4.png" alt="map">')
});

$('.js-link-5').on('click', function(e){
  e.preventDefault();
  mapImg.html('<img class="map-img--mod" src="images/maps/dnepr/5.png" alt="map">')
});

$('.js-link-6').on('click', function(e){
  e.preventDefault();
  mapImg.html('<img class="map-img--mod" src="images/maps/dnepr/6.png" alt="map">')
});

$('.js-link-7').on('click', function(e){
  e.preventDefault();
  mapImg.html('<img class="map-img--mod" src="images/maps/krivoy-rog/1.png" alt="map">')
});

$('.js-link-8').on('click', function(e){
  e.preventDefault();
  mapImg.html('<img class="map-img--mod" src="images/maps/krivoy-rog/2.png" alt="map">')
});

$('.js-link-9').on('click', function(e){
  e.preventDefault();
  mapImg.html('<img class="map-img--mod" src="images/maps/kamenskoe/1.png" alt="map">')
});


// $('.menu-btn').on('click', function(){
//       $('.header-contacts').toggleClass('active');
//     });

});
