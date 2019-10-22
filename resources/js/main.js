$(function () {
  AOS.init();
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
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

  $('.btn1').click(function (e) {

    if ($(this).hasClass('monthly') && !$(this).hasClass('border-l')) {

      $('.yearly').removeClass('yearly').addClass('monthly')
      $(this).removeClass('monthly').addClass('yearly')

    } else {
      $('.monthly').removeClass('monthly').addClass('yearly')
      $(this).removeClass('yearly').addClass('monthly')
    }

  })

  $('.ic').click(function (e) {

    var index = $(this).attr('data-id')

    $('.carousal-image-wrap').eq(index).siblings().removeClass('fadeInLeft fadeInRight')

    var class1 = '';




    if (index > $(this).parent().find('.i-active').index())

      class1 = 'fadeInRight'

    else

      class1 = 'fadeInLeft'

    $('.carousal-image-wrap').eq(index).removeClass('active1').addClass('animated ' + class1 + ' ')
    $('.carousal-image-wrap').eq(index).siblings().addClass('active1').removeClass('animated')

    $(this).addClass('i-active').siblings().removeClass('i-active')


  })


  $('.ic1').click(function (e) {

    var index = $(this).attr('data-id')
    $('.carousal-image-wrap').eq(index).siblings().removeClass('fadeInLeft fadeInRight')

    var class1 = '';




    if (index > $(this).parent().find('.i-active').index())

      class1 = 'fadeInRight'

    else

      class1 = 'fadeInLeft'



    $('.carousal-image-wrap1').eq(index).removeClass('active1').addClass('animated ' + class1 + ' ')
    $('.carousal-image-wrap1').eq(index).siblings().addClass('active1').removeClass('animated ' + class1 + ' ')

    $(this).addClass('i-active').siblings().removeClass('i-active')


  })


});