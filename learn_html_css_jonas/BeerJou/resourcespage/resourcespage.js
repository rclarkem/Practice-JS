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

  // // scroll on buttons
  // $('.js--scroll-to-contact').click(function () {
  //   $('html, body').animate({ scrollTop: $('.js--contact').offset().top }, 1000);
  // });

  // $('.js--scroll-to-works').click(function () {
  //   $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
  // });
  // $('.js--scroll-to-iphone').click(function () {
  //   $('html, body').animate({ scrollTop: $('#iphone').offset().top }, 1000);
  // });

  // // Animations

  // $('.js--wp-1').waypoint(
  //   function (direction) {
  //     $('.js--wp-1').addClass('animate__fadeIn');
  //   },
  //   {
  //     offset: '50%',
  //   }
  // );
  // $('.js--wp-2').waypoint(
  //   function (direction) {
  //     $('.js--wp-2').addClass('animate__fadeInUpBig');
  //   },
  //   {
  //     offset: '70%',
  //   }
  // );

  $('.js--nav-icon').click(function () {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon ion-icon');

    nav.slideToggle(200);

    if (icon.attr('name') === 'menu-outline') {
      icon.attr('name', 'close-outline');
      // icon.removeClass('menu-outline');
    } else {
      icon.attr('name', 'menu-outline');
      // icon.atrr('ion-close-round');
    }
  });

  $(window).resize(function () {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon ion-icon');

    if ($(window).width() > 767) {
      nav.css('display', 'block');
      icon.attr('name', 'close-outline');
      // icon.removeClass('menu-outline');
    } else {
      nav.css('display', 'none');
      icon.attr('name', 'menu-outline');
      // icon.removeClass('ion-close-round');
    }
  });
});
