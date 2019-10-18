$(function () {
  AOS.init();
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    console.log(scroll);
    if (scroll > 600) {
      $("#nav").addClass("changebg");
      $('.navbar').removeClass('bg-transparent')
    } else {
      $("#nav").removeClass("changebg");
    }
  })

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


});