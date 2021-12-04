document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const eLoading = document.querySelector(".loading");
        eLoading.classList.add("hide");
    }, 1200);
});

const swiperHero = new Swiper(".hero-swiper", {
    loop: true,

    pagination: {
        el: ".swiper-pagination",
    },
});

const swiperCarousel = new Swiper(".carousel-swiper", {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 500,
        modifier: 1.5,
        slideShadows: false,
    },

    // Navigation arrows
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },

    pagination: {
        el: ".swiper-pagination",
    },
});

const colaYears = [1899, 1906, 1915, 1916, 1961, 1993, 2007];
const swiperStory = new Swiper(".story-swiper", {
    loop: true,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    initialSlide: colaYears.length - 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: (idx, className) => {
            return `<div class="${className}">
                <img src="assets/images/small-cola-${colaYears[idx]}.png" alt="Cola ${colaYears[idx]}">
                <p>${colaYears[idx]}</p>
            </div>`;
        },
    },
});
