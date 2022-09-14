$(document).ready(function () {
  var scroll_start = 0;
  var startchange = 0;
  $(document).scroll(function () {
    scroll_start = $(this).scrollTop();
    if (scroll_start > startchange) {
      $(".navbar").addClass("shadow-sm");
      $(".navbar").removeClass("pt-5");
      $(".navbar").css("background-color", "rgba(255, 255, 255, 1)");
      $(".navbar").css("transition", "500ms");
    } else {
      $(".navbar").removeClass("shadow-sm");
      $(".navbar").addClass("pt-5");
      $(".navbar").css("background-color", "rgba(255, 255, 255, 0)");
      $(".navbar").css("transition", "500ms");
    }
  });
});

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

function scrollToTop() {
  $(window).scrollTop(0);
}
