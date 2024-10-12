// header swiper slide
var swiper = new Swiper(".slide-swp", {
    pagination: {
    el: ".swiper-pagination",
    dynamicBullets:true,
    Clickable : true
    },
    autoplay:{
        delay:2000,
    },
    loop:true,
});

// swiper slide products

var swiper = new Swiper(".slide-product", {
    slidesPerView:5,
    spaceBetween:20,
    pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    autoplay:{
        delay:3000,
    },
    
});