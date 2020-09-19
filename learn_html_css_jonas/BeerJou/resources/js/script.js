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
});
