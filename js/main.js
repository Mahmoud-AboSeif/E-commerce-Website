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


