$(window).scroll(function () {
  if ($('#menu').offset().top > 56) {
    $('#menu ').addClass('bg-info hvr-grow');
  } else {
    $('#menu').removeClass('bg-info hvr-grow');
  }
});
