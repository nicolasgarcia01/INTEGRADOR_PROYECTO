let cartItems = [];

function addToCart(productName, price, image) {
    const item = { productName, price, image };
    cartItems.push(item);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    let total = 0;

    cartList.innerHTML = '';

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${item.image}" alt="${item.productName}" width="50">
            <span>${item.productName}</span>
            <span>$${item.price.toFixed(2)}</span>
        `;
        cartList.appendChild(li);

        total += item.price;
    });

    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}
