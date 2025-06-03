var lastScrollTop = 0;
navbar = document.querySelector('.nav');
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-180px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
  
});

var SecondScrollTop = 0;
sideLanguage = document.querySelector('.language');
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > SecondScrollTop) {
    sideLanguage.style.top = "0";
  } else {
    sideLanguage.style.top = "65px";
  }
  SecondScrollTop = scrollTop;
  
}); 




