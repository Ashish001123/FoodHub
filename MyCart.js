function addToCart(name, price, img) {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cartData.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartData.push({ name, price, img, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cartData));
    GoToCart();  
}

