// Function to create header dynamically
function createHeader() {
    // Create a header element
    const header = document.createElement('header');
    // Set inner HTML for the header
    header.innerHTML = `
        <div class="container">
            <h1>Zima- The 90s drink</h1>
            <nav>
                <ul>
                    <li><a href="homepage.html">Home</a></li>
                    <li><a href="product.html">Product</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="company.html">About us</a></li>
                </ul>
            </nav>
        </div>
    `;
    // Insert the header as the first child of the body
    document.body.insertBefore(header, document.body.firstChild);
}

// Function to create footer dynamically
function createFooter() {
    // Create a footer element
    const footer = document.createElement('footer');
    // Set inner HTML for the footer
    footer.innerHTML = `
        <div class="container">
            <p>&copy; 2024 Zima- The 90s drink. All rights reserved.</p>
        </div>
    `;
    // Append the footer to the body
    document.body.appendChild(footer);
}

// Event listener to execute when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Log a message when the page is loaded
    console.log('Page loaded');

    // Create header and footer
    createHeader();
    createFooter();

    // Get all product cards
    const productCards = document.querySelectorAll('.product-card');

    // Add click event listener to each product card
    productCards.forEach(function(card) {
        // Get the "Add to Cart" button and quantity input element for each card
        const addToCartBtn = card.querySelector('.btn-add-to-cart');
        const quantityInput = card.querySelector('.quantity');

        // Add click event listener to the "Add to Cart" button
        addToCartBtn.addEventListener('click', function() {
            // Get the price of the product from data attribute
            const price = parseFloat(card.getAttribute('data-price'));
            // Get the quantity of the product from the input field
            const quantity = parseInt(quantityInput.value);
            // Calculate the total price
            const totalPrice = price * quantity;
            // Display an alert with the total price
            alert('Added to cart. Total: $' + totalPrice.toFixed(2));
        });
    });
});
