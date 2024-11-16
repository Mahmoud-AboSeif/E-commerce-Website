// Header swiper slide with loop
var headerSwiper = new Swiper(".slide-swp", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true
    },
    autoplay: {
        delay: 2000,
    },
    loop: true
});

// Deals and all products swiper slide with loop
var dealsSwiper = new Swiper(".slide-product, .all-slide-product", {
    autoplay: {
        delay: 2500,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    
    breakpoints: {
        1200: { slidesPerView: 5, spaceBetween: 20 },
        900: { slidesPerView: 4, spaceBetween: 20 },
        700: { slidesPerView: 3, spaceBetween: 15 },
        0: { slidesPerView: 2, spaceBetween: 10 }
    }
});

// Swiper slide for electronic, appliances, and mobile products
var categorySwiper = new Swiper(".slide-product-electronic, .slide-product-appliances, .slide-product-mobiles", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        1200: { slidesPerView: 5, spaceBetween: 26 },
        900: { slidesPerView: 4, spaceBetween: 20 },
        700: { slidesPerView: 3, spaceBetween: 15 },
        0: { slidesPerView: 2, spaceBetween: 10 }
    }
});
