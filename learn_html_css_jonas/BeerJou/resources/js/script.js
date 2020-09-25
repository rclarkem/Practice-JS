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
  $('.js--wp-2').waypoint(
    function (direction) {
      $('.js--wp-2').addClass('animate__fadeInUpBig');
    },
    {
      offset: '70%',
    }
  );

  $('.js--nav-icon').click(function () {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon ion-icon');

    nav.slideToggle(200);

    if (icon.hasClass('menu-outline')) {
      icon.addClass('ion-close-round');
      icon.removeClass('menu-outline');
    } else {
      icon.addClass('menu-outline');
      icon.removeClass('ion-close-round');
    }
  });

  // $('.js--nav-icon, .js--main-nav a, .logo-black').click(function (element) {
  //   var nav = $('.js--main-nav');
  //   var icon = $('.js--nav-icon ion-icon');

  //   //Gets the class name of the element that triggered the event
  //   var clicked = element.target.className;

  //   //Exists the function if the menu is closed AND the logo-black element (logo image) was clicked
  //   if (icon.hasClass('menu-outline') && clicked == 'logo-black') return;

  //   //Opens and closes the menu
  //   if ($(window).width() < 768) {
  //     nav.slideToggle(200);
  //   }

  //   //Changes icon states of the menu button
  //   if (icon.hasClass('menu-outline')) {
  //     icon.addClass('ion-close-round');
  //     icon.removeClass('menu-outline');
  //   } else {
  //     icon.addClass('menu-outline');
  //     icon.removeClass('ion-close-round');
  //   }
  // });

  $(window).resize(function () {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon ion-icon');

    if ($(window).width() > 767) {
      nav.css('display', 'block');
      icon.addClass('ion-close-round');
      icon.removeClass('menu-outline');
    } else {
      nav.css('display', 'none');
      icon.addClass('menu-outline');
      icon.removeClass('ion-close-round');
    }
  });

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
