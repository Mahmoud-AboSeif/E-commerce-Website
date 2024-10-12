fetch('products.json')
.then(Response => Response.json())
.then(data => {
    console.log(data);

    const swiper_items_sale = document.getElementById("swiper-items-sale");

    data.forEach(product => {
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
                                    <span>${product.price}</span>
                                    <p class="old-price">${product.old_price}</p>
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
        }

    })    

});

