$(window).scroll(function () {
  if ($('#menu').offset().top > 56) {
    $('#menu').addClass('bg-info');
  } else {
    $('#menu').removeClass('bg-info ');
  }
});
