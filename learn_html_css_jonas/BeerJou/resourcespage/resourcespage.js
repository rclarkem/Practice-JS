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

  $('.js--nav-icon').click(function () {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon ion-icon');

    nav.slideToggle(200);

    if (icon.attr('name') === 'menu-outline') {
      icon.attr('name', 'close-outline');
    } else {
      icon.attr('name', 'menu-outline');
    }
  });

  $(window).resize(function () {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon ion-icon');
    if ($(window).width() > 767) {
      nav.css('display', 'block');
      icon.attr('name', 'close-outline');
    } else {
      nav.css('display', 'none');
      icon.attr('name', 'menu-outline');
    }
  });
});
