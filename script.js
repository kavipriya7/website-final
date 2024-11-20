document.addEventListener('DOMContentLoaded', () => {
    // Select buttons
    const addToCartButton = document.querySelector('.add-to-cart');
    const buyNowButton = document.querySelector('.buy-now');

    // Add event listener for Add to Cart button
    addToCartButton.addEventListener('click', () => {
        alert('Item added to cart!');
        // Perform any additional actions like updating the cart count
    });

    // Add event listener for Buy Now button
    buyNowButton.addEventListener('click', () => {
        window.location.href = 'payment.html'; // Redirect to payment page
    });
});
