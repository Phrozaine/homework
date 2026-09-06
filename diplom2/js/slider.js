export const slider = () => {
  new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-scrollbar",
    },
    autoplay: {
      delay: 10000,
      waitForTransition: true,
    },
    mousewheel: true,
  });
};
