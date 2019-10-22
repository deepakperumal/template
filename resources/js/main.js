$(function () {
  AOS.init(), $(window).scroll(function () {
    $(window).scrollTop() > 600 ? ($("#nav").addClass("changebg"), $(".navbar").removeClass("bg-transparent")) : $("#nav").removeClass("changebg")
  }), $(document).on("click", ".navbar-toggler", function (a) {
    $(".navbar").addClass("bg-nav1"), a.stopPropagation(), $(".navbar").toggleClass("bg-nav"), $(".navbar").hasClass("bg-nav") ? $(".navbar").removeClass("bg-transparent") : $(".navbar").addClass("bg-transparent")
  }), $(".btn1").click(function (a) {
    $(this).hasClass("monthly") && !$(this).hasClass("border-l") ? ($(".yearly").removeClass("yearly").addClass("monthly"), $(this).removeClass("monthly").addClass("yearly")) : ($(".monthly").removeClass("monthly").addClass("yearly"), $(this).removeClass("yearly").addClass("monthly"))
  }), $(".ic").click(function (a) {
    var s = $(this).attr("data-id");
    $(".carousal-image-wrap").eq(s).siblings().removeClass("fadeInLeft fadeInRight");
    var e = "";
    if (s > $(this).parent().find(".i-active").index()) e = "fadeInRight";
    else {
      if (!(s < $(this).parent().find(".i-active").index())) return;
      e = "fadeInLeft"
    }
    $(".carousal-image-wrap").eq(s).removeClass("active1").addClass("animated " + e + " "), $(".carousal-image-wrap").eq(s).siblings().addClass("active1").removeClass("animated"), $(this).addClass("i-active").siblings().removeClass("i-active")
  }), $(".ic1").click(function (a) {
    var s = $(this).attr("data-id");
    $(".carousal-image-wrap").eq(s).siblings().removeClass("fadeInLeft fadeInRight");
    var e = "";
    if (s > $(this).parent().find(".i-active").index()) e = "fadeInRight";
    else {
      if (!(s < $(this).parent().find(".i-active").index())) return;
      e = "fadeInLeft"
    }
    $(".carousal-image-wrap1").eq(s).removeClass("active1").addClass("animated " + e + " "), $(".carousal-image-wrap1").eq(s).siblings().addClass("active1").removeClass("animated " + e + " "), $(this).addClass("i-active").siblings().removeClass("i-active")
  })
});