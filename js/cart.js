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

    var total_price = 0;
    var total_count = 0; 
    
    cartItemContainer.innerHTML="";
    cart.forEach((item , index) => {
        let total_price_item = item.price * item.quantity;

        total_price += total_price_item ;
        total_count += item.quantity ;

        cartItemContainer.innerHTML +=`
        
        <article class="item-cart flex">
                <img src="${item.img}" alt="product">
                <div class="content">
                    <h4>${item.name}</h4>
                    <p class="price-cart">$${total_price_item}</p>
                    <div class="quantity-control flex">
                        <button class="decrease-quantity"  data-index = ${index}>-</button>
                        <span class="quantity flex">${item.quantity}</span>
                        <button class="increase-quantity" data-index = ${index}>+</button>
                    </div>
                </div>
                <button class="delete-items" data-index = "${index}">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </article>
        `
    })
    
    // total price total cont in cart
    const price_cart_total= document.querySelector('.price-cart-total');
    const count_item_cart= document.querySelector ('.count-item-cart');
    const count_item_header= document.querySelector('.count-item-header');
    price_cart_total.innerHTML = `$${total_price}`;
    count_item_header.innerHTML =total_count;
    count_item_cart.innerHTML = total_count;

    // increase and decrease buttons
    const increaseButton = document.querySelectorAll('.increase-quantity');
    const decreaseButton = document.querySelectorAll('.decrease-quantity');
    increaseButton.forEach(button => {
        button.addEventListener('click' , (event) => {
            const itemIndex = event.target.getAttribute("data-index");
            increaseQuantity(itemIndex)
        })
    })
    decreaseButton.forEach(button => {
        button.addEventListener('click' , (event) => {
            const itemIndex = event.target.getAttribute("data-index");
            decreaseQuantity(itemIndex)
        })
    })

    function increaseQuantity(index){
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart[index].quantity += 1;
        localStorage.setItem('cart' , JSON.stringify(cart));
        updateCart();
    }
    function decreaseQuantity(index){
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart[index].quantity>1 ? cart[index].quantity -= 1: ""; 
        
        localStorage.setItem('cart' , JSON.stringify(cart));
        updateCart();
    }




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