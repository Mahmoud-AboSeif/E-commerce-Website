let category_nav_list = document.querySelector(".category_nav_list");
function open_Category(){
    category_nav_list.classList.toggle('active');

    const icon = document.getElementById('menuIcon');
    if(icon.classList.contains('fa-bars'))
    {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }else{
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
};
let category_btn = document.querySelector('.category-btn');
let fa_angle_down = document.querySelector(".fa-angle-down");
    category_btn.addEventListener('click',()=>{
    fa_angle_down.classList.toggle('rotated');
});

function rotate_angle(){
    fa_angle_down.classList.toggle('rotated');
};

let slider = document.querySelector(".slider");
category_btn.addEventListener('click',()=>{
    slider.classList.toggle('last_layer');
});
function last_layer(){
    slider.classList.remove('last_layer');
};
// let icon_product = document.querySelector('.icon-product');
// icon_product.addEventListener('click',()=>{
//     icon_product.classList('show');
// });

// Start btn up scroll
let up = document.querySelector(".up");
window.onscroll = function(){
    this.scrollY >= 2100? up.classList.add("show"):up.classList.remove("show");
};
up.onclick= function(){
window.scrollTo({
top:0,
behavior:'smooth',
})
}
// Start header responsive
let open_menu = document.querySelector(".open-menu");
let close_menu = document.querySelector(".close-menu");
let nav_links = document.querySelector(".nav-links");

open_menu.addEventListener('click' , ()=>{
    nav_links.classList.add('active')
})
close_menu.addEventListener('click' , ()=>{
    nav_links.classList.remove('active')
})
    
    
function cs_menu(){
    nav_links.classList.toggle('active');
}
