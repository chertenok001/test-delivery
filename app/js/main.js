$(function () {
  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();

  window.onscroll = function showHeader() {
    var header__top = document.querySelector(".header__top");
    if (window.pageYOffset > 0) {
      header__top.classList.add("header__fixed");
    } else {
      header__top.classList.remove("header__fixed");
    }
  };

 
});







