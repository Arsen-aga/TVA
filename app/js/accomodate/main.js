//= ../libs/swiper.js

if (document.querySelectorAll(".item-accord__show")) {
  const accordItemsShow = document.querySelectorAll(".item-accord__show");

  accordItemsShow.forEach((item, index) => {
    const parent = item.parentNode;
    item.addEventListener("click", () => {
      if (parent.classList.contains("active")) {
        accordItemsShow.forEach((e) => e.parentNode.classList.remove("active"));
      } else {
        accordItemsShow.forEach((e) => e.parentNode.classList.remove("active"));
        parent.classList.add("active");
      }
    });
  });
}

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    720: {
      slidesPerView: 2,
    },
    960: {
      slidesPerView: 3,
    },
  },
});
