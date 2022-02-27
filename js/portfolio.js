$(document).ready(() => {
  // navbar sticky
  let nav_offset_top = $(".header").height() + 50;

  function navbarFixed() {
    if ($(".header").length) {
      $(window).scroll(() => {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header .main-menu").addClass("navbar_fixed");
        } else {
          $(".header .main-menu").removeClass("navbar_fixed");
        }
      });
    }
  }
  navbarFixed();
});
