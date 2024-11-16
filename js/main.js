// Define the category navigation list and menu icon
let category_nav_list = document.querySelector(".category_nav_list");
let menuIcon = document.getElementById('menuIcon');

// Function to toggle the category menu and switch the icon
if (category_nav_list) {
    function open_Category() {
        category_nav_list.classList.toggle('active');
        if (menuIcon) {
            if (menuIcon.classList.contains('fa-bars')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            } else {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        }
    }
}

// Define the category button, arrow icon, and slider
let category_btn = document.querySelector('.category-btn');
let fa_angle_down = document.querySelector(".fa-angle-down");
let slider = document.querySelector(".slider");

// Event listener to rotate the arrow and toggle the last layer class
if (category_btn && fa_angle_down && slider) {
    category_btn.addEventListener('click', () => {
        fa_angle_down.classList.toggle('rotated');
        slider.classList.toggle('last_layer');
    });
}

// Define the "up" button for scrolling
let up = document.querySelector(".up");

// Function to show the "up" button when scrolling down and scroll smoothly to top
if (up) {
    window.onscroll = function() {
        if (this.scrollY >= 2100) {
            up.classList.add("show");
        } else {
            up.classList.remove("show");
        }
    };

    up.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
}

// Define the menu buttons for opening and closing the navigation links
let open_menu = document.querySelector(".open-menu");
let close_menu = document.querySelector(".close-menu");
let nav_links = document.querySelector(".nav-links");

// Event listeners to open and close the navigation menu
if (open_menu && close_menu && nav_links) {
    open_menu.addEventListener('click', () => {
        nav_links.classList.add('active');
    });

    close_menu.addEventListener('click', () => {
        nav_links.classList.remove('active');
    });

    // Function to toggle the menu's active state
    function cs_menu() {
        nav_links.classList.toggle('active');
    }
}

// Define the icon for product and add a click event to toggle visibility
let icon_product = document.querySelector('.icon-product');
if (icon_product) {
    icon_product.addEventListener('click', () => {
        icon_product.classList.toggle('show');
    });
}
