var swiper = new Swiper(".gallery__swiper", {
    cssMode: true,
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    navigation: {
      nextEl: ".gallery-button-next",
      prevEl: ".gallery-button-prev",
    },
    pagination: {
      el: ".gallery-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
});
var swiper = new Swiper(".check__swiper", {
    cssMode: true,
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    navigation: {
      nextEl: ".gallery-button-next",
      prevEl: ".gallery-button-prev",
    },
    pagination: {
      el: ".gallery-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
});