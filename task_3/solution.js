function renderCartItem(item) {
    const product = item;

    itemCountText = ('' + product.count + ` × ` + product.price + ` ₽ = `) + (product.count * product.price + ` ₽`);
        
    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
