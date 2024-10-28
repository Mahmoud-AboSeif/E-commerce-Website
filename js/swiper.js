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

// swiper slide deals products
var swiper = new Swiper(".slide-product ,.all-slide-product", {
    
    slidesPerView:5,
    spaceBetween:20,
    autoplay:{
        delay:2500,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    
});
// swiper slide electronic products
var swiper = new Swiper(".slide-product-electronic ,.slide-product-appliances,.slide-product-mobiles ", {
    slidesPerView:5,
    spaceBetween:26,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    
});