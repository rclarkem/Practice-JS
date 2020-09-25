$(document).ready(function () {
  // sticky nav
  $('.js--section-features').waypoint(
    function (direction) {
      if (direction == 'down') {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    },
    {
      offset: '60px',
    }
  );

  // scroll on buttons
  $('.js--scroll-to-contact').click(function () {
    $('html, body').animate({ scrollTop: $('.js--contact').offset().top }, 1000);
  });

  $('.js--scroll-to-works').click(function () {
    $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
  });
  $('.js--scroll-to-iphone').click(function () {
    $('html, body').animate({ scrollTop: $('#iphone').offset().top }, 1000);
  });

  // Animations

  $('.js--wp-1').waypoint(
    function (direction) {
      $('.js--wp-1').addClass('animate__fadeIn');
    },
    {
      offset: '50%',
    }
  );

  // $(window).resize(function () {
  //   var nav = $('.js--main-nav');

  //   var icon = $('.js--nav-icon i');

  //   if ($(window).width() > 767) {
  //     nav.css('display', 'block');

  //     icon.addClass('ion-close-round');

  //     icon.removeClass('ion-navicon-round');
  //   } else {
  //     nav.css('display', 'none');

  //     icon.addClass('ion-navicon-round');

  //     icon.removeClass('ion-close-round');
  //   }
  // });
});
