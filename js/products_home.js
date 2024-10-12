fetch('products.json')
.then(Response => Response.json())
.then(data => {

    const swiper_items_products = document.getElementById("swiper-items-products");
    const swiper_items_sale = document.getElementById("swiper-items-sale");
    const swiper_items_electronic = document.getElementById("swiper-items-electronic");
    const swiper_items_appliances = document.getElementById("swiper-items-appliances");
    const swiper_items_mobiles = document.getElementById("swiper-items-mobiles");
    data.forEach(product => {
        // Swiper All products
        swiper_items_products.innerHTML += `
        <article class="swiper-slide product">
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
                        <div class="price-electronic flex">
                            <span>$${product.price}</span>
                        </div>
                        <div class="icons flex">
                            <span class="btn-add-cart flex">
                                <i class="fa-solid fa-cart-shopping"></i>
                                add to cart
                            </span>
                            <span class="icon-product flex">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>
                    </article>
        
        `;
        // Swiper deals products
        if (product.old_price) {
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
                                <span class="btn-add-cart flex">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                    add to cart
                                </span>
                                <span class="icon-product flex">
                                    <i class="fa-regular fa-heart"></i>
                                </span>
                            </div>
                        </article>
    
            `
        };

        // Swiper electronics products
        if(product.category === "electronics"){

            swiper_items_electronic.innerHTML += `
            <article class="swiper-slide product">
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
                        <div class="price-electronic flex">
                            <span>$${product.price}</span>
                        </div>
                        <div class="icons flex">
                            <span class="btn-add-cart flex">
                                <i class="fa-solid fa-cart-shopping"></i>
                                add to cart
                            </span>
                            <span class="icon-product flex">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>
                    </article>
            `
        };
        // Swiper appliances products
        if(product.category === "appliances")
        {
            
            swiper_items_appliances.innerHTML += `
            <article class="swiper-slide product">
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
                            <span>$${product.price}</span>
                        </div>
                        <div class="icons flex">
                            <span class="btn-add-cart flex">
                                <i class="fa-solid fa-cart-shopping"></i>
                                add to cart
                            </span>
                            <span class="icon-product flex">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>
                    </article>
            `
        };
        // Swiper mobiles products
        if(product.category === "mobiles")
        {
            
            swiper_items_mobiles.innerHTML += `
            <article class="swiper-slide product">
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
                            <span>$${product.price}</span>
                        </div>
                        <div class="icons flex">
                            <span class="btn-add-cart flex">
                                <i class="fa-solid fa-cart-shopping"></i>
                                add to cart
                            </span>
                            <span class="icon-product flex">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>
                    </article>
            `
        };
    })    

});

