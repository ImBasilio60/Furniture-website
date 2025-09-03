$(document).ready(function () {
  $(".toggle-button").click(function () {
    const icon = $(this).find("i");
    icon.toggleClass("fa-bars fa-xmark");

    $(".nav-links").toggleClass("show");
  });

  function initSlickIfNeeded() {
    if ($(window).width() < 1024) {
      if (!$(".slider-images").hasClass("slick-initialized")) {
        $(".slider-images").slick({
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          autoplay: true,
          speed: 800,
          cssEase: "ease-in-out",
          autoplaySpeed: 3000,
        });
      }
    } else {
      if ($(".slider-images").hasClass("slick-initialized")) {
        $(".slider-images").slick("unslick");
      }
    }
  }

  initSlickIfNeeded();

  $(window).on("resize", function () {
    initSlickIfNeeded();
    const navLinks = document.querySelector("ul.nav-links");
    if (navLinks.classList.contains("show")) {
      const icon = $("#toggle");
      icon.toggleClass("fa-bars fa-xmark");
      navLinks.classList.remove("show");
    }
  });
});
