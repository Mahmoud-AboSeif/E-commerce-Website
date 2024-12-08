
// Open/Close Cart
var cart = document.querySelector('.cart');
function open_close_cart() {
    cart.classList.toggle("active");
}

// Fetch Products and Setup Event Listeners
fetch('./products.json')
    .then(response => response.json())
    .then(data => {
        const addToCartButtons = document.querySelectorAll('.btn-add-cart');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', event => {
                const productId = event.target.getAttribute('data-id');
                const selectedProduct = data.find(product => product.id == productId);
                addToCart(selectedProduct);
                updateButtonStatus(productId, true);
            });
        });
    });

// Add to Cart
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ quantity: 1, ...product });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Update Cart
function updateCart() {
    const cartItemContainer = document.getElementById("cart-item");
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const checkout_items = document.getElementById("checkout_items");
    if(checkout_items){
        checkout_items.innerHTML = "";
    }

    let total_price = 0, total_count = 0;

    cartItemContainer.innerHTML = "";
    cart.forEach((item, index) => {
        const total_price_item = item.price * item.quantity;
        total_price += total_price_item;
        total_count += item.quantity;

        cartItemContainer.innerHTML += `
            <article class="item-cart flex">
                <img src="../${item.img}" alt="product">
                <div class="content">
                    <h4>${item.name}</h4>
                    <p class="price-cart">$${total_price_item}</p>
                    <div class="quantity-control flex">
                        <button class="decrease-quantity" data-index="${index}">-</button>
                        <span class="quantity flex">${item.quantity}</span>
                        <button class="increase-quantity" data-index="${index}">+</button>
                    </div>
                </div>
                <button class="delete-items" data-index="${index}">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </article>
        `;

        // Add to checkout

        if(checkout_items){
            checkout_items.innerHTML += `
            
            <article class="item-cart flex">
                            <div class="image-name flex">
                                <img src="../${item.img}" alt="product">
                                <div class="content">
                                    <h4>${item.name}</h4>
                                    <p class="price-cart">$${total_price_item}</p>
                                    <div class="quantity-control flex">
                                        <button class="decrease-quantity"  data-index = ${index}>-</button>
                                        <span class="quantity flex">$${item.quantity}</span>
                                        <button class="increase-quantity" data-index = ${index}>+</button>
                                    </div>
                                </div>
                            </div>
                            
                            <button class="delete-items" data-index="${index}">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </article>
            `
        }
    });

    // Update total price and item count
    document.querySelector('.price-cart-total').innerHTML = `$${total_price}`;
    document.querySelector('.count-item-cart').innerHTML = total_count;
    document.querySelector('.count-item-header').innerHTML = total_count;

    if(checkout_items){
        const subtotal_checkout = document.querySelector(".subtotal-checkout");
        const total_checkout = document.querySelector(".total-checkout");
        
        subtotal_checkout.innerHTML = `$ ${total_price}`;
        total_checkout.innerHTML = `$ ${total_price + 25}`;
    }

    // Setup event listeners for quantity control and delete buttons
    setupCartItemEventListeners();
}

// Setup Quantity Control and Delete Buttons
function setupCartItemEventListeners() {
    document.querySelectorAll('.increase-quantity').forEach(button => {
        button.addEventListener('click', event => {
            updateQuantity(event.target.getAttribute('data-index'), 1);
        });
    });

    document.querySelectorAll('.decrease-quantity').forEach(button => {
        button.addEventListener('click', event => {
            updateQuantity(event.target.getAttribute('data-index'), -1);
        });
    });

    document.querySelectorAll('.delete-items').forEach(button => {
        button.addEventListener('click', event => {
            removeFromCart(event.target.closest('button').getAttribute('data-index'));
        });
    });
}

// Update Quantity
function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity = Math.max(1, cart[index].quantity + change); // Ensure quantity stays at least 1
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Remove From Cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const removedItem = cart.splice(index, 1)[0];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    updateButtonStatus(removedItem.id, false);
}

// Update Button Status
function updateButtonStatus(productId, inCart) {
    const buttons = document.querySelectorAll(`.btn-add-cart[data-id="${productId}"]`);
    buttons.forEach(button => {
        if (inCart) {
            button.classList.add("active");
            button.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Item In Cart`;
        } else {
            button.classList.remove("active");
            button.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Add to Cart`;
        }
    });
}

// Initial Cart Update
updateCart();
