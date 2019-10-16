$(document).on('click', '.navbar-toggler', function (e) {
  $('.navbar').addClass('bg-nav1')
  e.stopPropagation();
  $('.navbar').toggleClass('bg-nav')
  if ($('.navbar').hasClass('bg-nav')) {
    $('.navbar').removeClass('bg-transparent')

  } else {
    $('.navbar').addClass('bg-transparent')

  }

})