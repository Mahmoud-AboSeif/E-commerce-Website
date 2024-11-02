fetch('products.json')
.then(Response => Response.json())
.then(data => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const swiper_items_products = document.getElementById("swiper-items-products");
    const swiper_items_sale = document.getElementById("swiper-items-sale");
    const swiper_items_electronic = document.getElementById("swiper-items-electronic");
    const swiper_items_appliances = document.getElementById("swiper-items-appliances");
    const swiper_items_mobiles = document.getElementById("swiper-items-mobiles");
    data.forEach(product => {
        if (product.old_price) {
            // if product is in cart when  refresh the website
            const isInCart = cart.some(CartItem => CartItem.id === product.id);
            const percent_disc = Math.floor((product.old_price - product.price)/product.old_price *100);
            swiper_items_sale.innerHTML += `
        
            <article class="swiper-slide product border">
                            <span class="sale-present">${percent_disc}%</span>
                            <div class="img-product flex">
                                <a href="#"><img src="${product.img}" alt="product"></a>
                            </div>
                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p class="name-product">
                                <a href="#">
                                    ${product.name}
                                </a>
                            </p>
                            <div class="price flex">
                                <p>
                                    <span>$${product.price}</span>
                                    <p class="old-price">$${product.old_price}</p>
                                </p>
                            </div>
                            <div class="icons flex">
                                <span class="btn-add-cart ${isInCart ? "active" : ""} flex"data-id="${product.id}" >
                                    <i class="fa-solid fa-cart-shopping"></i>
                                    ${isInCart ? "item in cart" : "add to cart"}
                                </span>
                                <span class="icon-product flex">
                                    <i class="fa-regular fa-heart"></i>
                                </span>
                            </div>
                        </article>
    
            `;
        };
        // if product is in cart when  refresh the website
        const isInCart = cart.some(CartItem => CartItem.id === product.id);
        const old_price_p = product.old_price ? `<p class="old-price">$${product.old_price}</p>` : "";
            const percent_disc_div = product.old_price ? `<span class="sale-present">%${Math.floor((product.old_price - product.price)/product.old_price *100)}</span>` : "";
        swiper_items_products.innerHTML += `
        
            <article class="swiper-slide product border">
                            ${percent_disc_div}
                            <div class="img-product flex">
                                <a href="#"><img src="${product.img}" alt="product"></a>
                            </div>
                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p class="name-product">
                                <a href="#">
                                    ${product.name}
                                </a>
                            </p>
                            <div class="price flex">
                                <p>
                                    <span>$${product.price}</span>
                                    ${old_price_p}
                                </p>
                            </div>
                            <div class="icons flex">
                                <span class="btn-add-cart ${isInCart ? "active" : ""} flex"data-id="${product.id}" >
                                    <i class="fa-solid fa-cart-shopping"></i>
                                    ${isInCart ? "item in cart" : "add to cart"}
                                </span>
                                <span class="icon-product flex data-id="${product.id}"">
                                    <i class="fa-regular fa-heart"></i>
                                </span>
                            </div>
                        </article>
    
            `
    });
    
    
    data.forEach(product => {
        if(product.category === "electronics"){

            // if product is in cart when  refresh the website
            const isInCart = cart.some(CartItem => CartItem.id === product.id);
            const old_price_p = product.old_price ? `<p class="old-price">$${product.old_price}</p>` : "";
            const percent_disc_div = product.old_price ? `<span class="sale-present">%${Math.floor((product.old_price - product.price)/product.old_price *100)}</span>` : "";
        swiper_items_electronic.innerHTML += `
        
            <article class="swiper-slide product border">
                            ${percent_disc_div}
                            <div class="img-product flex">
                                <a href="#"><img src="${product.img}" alt="product"></a>
                            </div>
                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p class="name-product">
                                <a href="#">
                                    ${product.name}
                                </a>
                            </p>
                            <div class="price flex">
                                <p>
                                    <span>$${product.price}</span>
                                    ${old_price_p}
                                </p>
                            </div>
                            <div class="icons flex">
                                    <span class="btn-add-cart ${isInCart ? "active" : ""} flex"data-id="${product.id}" >
                                    <i class="fa-solid fa-cart-shopping"></i>
                                    ${isInCart ? "item in cart" : "add to cart"}
                                </span>
                                <span class="icon-product flex">
                                    <i class="fa-regular fa-heart"></i>
                                </span>
                            </div>
                        </article>
    
            `
        }
    });

    data.forEach(product => {
        if(product.category === "appliances"){

            // if product is in cart when  refresh the website
            const isInCart = cart.some(CartItem => CartItem.id === product.id);
            const old_price_p = product.old_price ? `<p class="old-price">$${product.old_price}</p>` : "";
            const percent_disc_div = product.old_price ? `<span class="sale-present">%${Math.floor((product.old_price - product.price)/product.old_price *100)}</span>` : "";
        swiper_items_appliances.innerHTML += `
        
            <article class="swiper-slide product border">
                            ${percent_disc_div}
                            <div class="img-product flex">
                                <a href="#"><img src="${product.img}" alt="product"></a>
                            </div>
                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p class="name-product">
                                <a href="#">
                                    ${product.name}
                                </a>
                            </p>
                            <div class="price flex">
                                <p>
                                    <span>$${product.price}</span>
                                    ${old_price_p}
                                </p>
                            </div>
                            <div class="icons flex">
                                    <span class="btn-add-cart ${isInCart ? "active" : ""} flex"data-id="${product.id}" >
                                    <i class="fa-solid fa-cart-shopping"></i>
                                    ${isInCart ? "item in cart" : "add to cart"}
                                </span>
                                <span class="icon-product flex">
                                    <i class="fa-regular fa-heart"></i>
                                </span>
                            </div>
                        </article>
    
            `
        }
    });
    data.forEach(product => {
        if(product.category === "mobiles"){

            // if product is in cart when  refresh the website
            const isInCart = cart.some(CartItem => CartItem.id === product.id);
            const old_price_p = product.old_price ? `<p class="old-price">$${product.old_price}</p>` : "";
            const percent_disc_div = product.old_price ? `<span class="sale-present">%${Math.floor((product.old_price - product.price)/product.old_price *100)}</span>` : "";
        swiper_items_mobiles.innerHTML += `
        
            <article class="swiper-slide product border">
                            ${percent_disc_div}
                            <div class="img-product flex">
                                <a href="#"><img src="${product.img}" alt="product"></a>
                            </div>
                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p class="name-product">
                                <a href="#">
                                    ${product.name}
                                </a>
                            </p>
                            <div class="price flex">
                                <p>
                                    <span>$${product.price}</span>
                                    ${old_price_p}
                                </p>
                            </div>
                            <div class="icons flex">
                                    <span class="btn-add-cart ${isInCart ? "active" : ""} flex"data-id="${product.id}" >
                                    <i class="fa-solid fa-cart-shopping"></i>
                                    ${isInCart ? "item in cart" : "add to cart"}
                                </span>
                                <span class="icon-product flex">
                                    <i class="fa-regular fa-heart"></i>
                                </span>
                            </div>
                        </article>
    
            `
        }
    });
});