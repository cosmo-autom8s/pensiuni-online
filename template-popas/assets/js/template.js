(function() {
  "use strict";

  if (window.AOS) {
    AOS.init({
      ease: "slide",
      once: true
    });
  }

  if (window.tns && document.querySelector(".room-slider")) {
    tns({
      container: ".room-slider",
      items: 1,
      mode: "carousel",
      autoplay: true,
      speed: 700,
      nav: true,
      controls: false,
      autoplayButtonOutput: false,
      gutter: 20,
      responsive: {
        0: {
          items: 1,
          gutter: 0
        },
        768: {
          items: 2,
          gutter: 20
        },
        1000: {
          items: 3,
          gutter: 20
        }
      }
    });
  }

  if (window.tns && document.querySelector(".review-slider")) {
    tns({
      container: ".review-slider",
      items: 1,
      mode: "carousel",
      autoplay: true,
      speed: 700,
      nav: true,
      controls: false,
      autoplayButtonOutput: false,
      gutter: 20,
      responsive: {
        0: {
          items: 1,
          gutter: 0
        },
        600: {
          items: 2,
          gutter: 20
        },
        1000: {
          items: 3,
          gutter: 20
        }
      }
    });
  }

  var backToTop = document.querySelector(".m-backtotop");

  if (backToTop) {
    var toggleBackToTop = function() {
      if (window.scrollY > window.innerHeight * 2) {
        backToTop.classList.add("active");
      } else {
        backToTop.classList.remove("active");
      }
    };

    window.addEventListener("scroll", toggleBackToTop);
    toggleBackToTop();

    backToTop.addEventListener("click", function(event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();
