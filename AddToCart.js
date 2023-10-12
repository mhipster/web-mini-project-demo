// Function to update the cart count display
function updateCartCount() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.count span').textContent = productNumbers;
    } else {
        document.querySelector('.count span').textContent = '0';
    }
}

// Function to add a product to the cart
function addToCart() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        localStorage.setItem('cartNumbers', parseInt(productNumbers) + 1);
        updateCartCount();
    } else {
        localStorage.setItem('cartNumbers', '1');
        updateCartCount();
    }
}

// Function to clear the cart
function clearCart() {
    localStorage.removeItem('cartNumbers');
    updateCartCount();
}

// Add click event listeners to the "Add to Cart" and "Clear" buttons
let addToCartButton = document.querySelector('.button-add');
let clearButton = document.querySelector('#clearButton'); // Assuming you have a "Clear" button somewhere in your HTML

if (addToCartButton) {
    addToCartButton.addEventListener('click', () => {
        addToCart();
    });
}

if (clearButton) {
    clearButton.addEventListener('click', () => {
        clearCart();
    });
}

// Initial update of the cart count when the page loads
updateCartCount();