// Fetch the product data from the JSON file
fetch('products.json')
    .then(response => response.json())
    .then(data => {
        // Retrieve the cart from localStorage or initialize as an empty array
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Define elements where the product items will be appended
        const swiper_items_products = document.getElementById("swiper-items-products");
        const swiper_items_sale = document.getElementById("swiper-items-sale");
        const swiper_items_electronic = document.getElementById("swiper-items-electronic");
        const swiper_items_appliances = document.getElementById("swiper-items-appliances");
        const swiper_items_mobiles = document.getElementById("swiper-items-mobiles");

        // Iterate through each product to display them in the appropriate section
        data.forEach(product => {
            // Check if the product has a discount
            if (product.old_price) {
                const isInCart = cart.some(cartItem => cartItem.id === product.id);
                const percent_disc = Math.floor((product.old_price - product.price) / product.old_price * 100);

                // Add the product to the "sale" section
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
                            <a href="#">${product.name}</a>
                        </p>
                        <div class="price flex">
                            <p>
                                <span>$${product.price}</span>
                                <p class="old-price">$${product.old_price}</p>
                            </p>
                        </div>
                        <div class="icons flex">
                            <span class="btn-add-cart ${isInCart ? "active" : ""} flex" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i>
                                ${isInCart ? "item in cart" : "add to cart"}
                            </span>
                            <span class="icon-product flex">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>
                    </article>
                `;
            }

            // Prepare elements for all product listings
            const isInCart = cart.some(cartItem => cartItem.id === product.id);
            const old_price_p = product.old_price ? `<p class="old-price">$${product.old_price}</p>` : "";
            const percent_disc_div = product.old_price ? `<span class="sale-present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : "";

            // Add product to the general product section
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
                        <a href="#">${product.name}</a>
                    </p>
                    <div class="price flex">
                        <p>
                            <span>$${product.price}</span>
                            ${old_price_p}
                        </p>
                    </div>
                    <div class="icons flex">
                        <span class="btn-add-cart ${isInCart ? "active" : ""} flex" data-id="${product.id}">
                            <i class="fa-solid fa-cart-shopping"></i>
                            ${isInCart ? "item in cart" : "add to cart"}
                        </span>
                        <span class="icon-product flex">
                            <i class="fa-regular fa-heart"></i>
                        </span>
                    </div>
                </article>
            `;
        });

        // Display products for specific categories: electronics, appliances, and mobiles
        const categories = {
            electronics: swiper_items_electronic,
            appliances: swiper_items_appliances,
            mobiles: swiper_items_mobiles
        };

        // Iterate through each category and append relevant products
        data.forEach(product => {
            const categoryElement = categories[product.category];
            if (categoryElement) {
                const isInCart = cart.some(cartItem => cartItem.id === product.id);
                const old_price_p = product.old_price ? `<p class="old-price">$${product.old_price}</p>` : "";
                const percent_disc_div = product.old_price ? `<span class="sale-present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : "";

                // Add product to the appropriate category section
                categoryElement.innerHTML += `
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
                            <a href="#">${product.name}</a>
                        </p>
                        <div class="price flex">
                            <p>
                                <span>$${product.price}</span>
                                ${old_price_p}
                            </p>
                        </div>
                        <div class="icons flex">
                            <span class="btn-add-cart ${isInCart ? "active" : ""} flex" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i>
                                ${isInCart ? "item in cart" : "add to cart"}
                            </span>
                            <span class="icon-product flex">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>
                    </article>
                `;
            }
        });
    });
