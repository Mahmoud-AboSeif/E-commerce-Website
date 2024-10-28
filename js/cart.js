//open cart
var cart = document.querySelector('.cart');
function open_close_cart() {
    cart.classList.toggle("active")
}
// Add to cart
fetch('products.json')
.then(Response => Response.json())
.then(data => {
    const addToCartButtons = document.querySelectorAll('.btn-add-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click' , (event) => {
            const productId = event.target.getAttribute('data-id');
            
            const selectedProduct = data.find(product => product.id == productId);

            addToCart(selectedProduct);

            const allMatchingButtons = document.querySelectorAll(`.btn-add-cart[data-id = "${productId}"]`);
            allMatchingButtons.forEach(btn => {
                btn.classList.add("active");
                btn.innerHTML =` <i class="fa-solid fa-cart-shopping"></i>
                Item In Cart`
            })
        })
    })
})

function addToCart(product){
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({quantity : 1 , ...product});
    localStorage.setItem('cart' , JSON.stringify(cart));

    updateCart();
}
function updateCart(){
    const cartItemContainer = document.getElementById("cart-item");
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartItemContainer.innerHTML="";
    cart.forEach((item , index) => {
        cartItemContainer.innerHTML +=`
        
        <article class="item-cart flex">
                <img src="${item.img}" alt="product">
                <div class="content">
                    <h4>${item.name}</h4>
                    <p class="price-cart">$${item.price}</p>
                    <div class="quantity-control flex">
                        <button class="dicrease-quantity">-</button>
                        <span class="quantity flex">${item.quantity}</span>
                        <button class="increase-quantity">+</button>
                    </div>
                </div>
                <button class="delete-items" data-index = "${index}">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </article>
        `
    })


    // delete item from cart
    const deleteButtons = document.querySelectorAll('.delete-items');
    deleteButtons.forEach(button => {
        button.addEventListener('click' , (event) => {
            const itemIndex = event.target.closest('button')
            .getAttribute('data-index');
            removeFromCart(itemIndex);
        })
    })
}

function removeFromCart(index){
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const removeProduct = cart.splice(index , 1)[0];
    localStorage.setItem('cart' , JSON.stringify(cart));

    updateCart();
    updateButtonsStatus(removeProduct.id);
}

function updateButtonsStatus(productId){
    const allMatchingButtons = document.querySelectorAll(`.btn-add-cart[data-id = "${productId}"]`);
        allMatchingButtons.forEach(button => {
            button.classList.remove("active");
            button.innerHTML =` <i class="fa-solid fa-cart-shopping"></i>
            add to cart`
        })
}
updateCart();