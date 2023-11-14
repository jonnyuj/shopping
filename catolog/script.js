document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart() {
        const productName = this.getAttribute('data-product');
        const productPrice = parseFloat(this.getAttribute('data-price'));

        
        const item = {
            name: productName,
            price: productPrice
        };

        
        addToCartFunction(item);

        
        window.location.href = 'cart.html';
    }

    function addToCartFunction(item) {
        
    }
});
