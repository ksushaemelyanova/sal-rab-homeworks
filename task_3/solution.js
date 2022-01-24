function renderCartItem(item) {
    const product = item;

    // let itemCountText;
    // itemCountText = '';
    // itemCountText = itemCountText + product.count;
    // itemCountText = itemCountText + ` × `;
    // itemCountText = itemCountText + product.price;
    // itemCountText = itemCountText + ` ₽ = `;
    
    // let sum;
    // sum = product.count * product.price;
    // itemCountText = itemCountText + sum;
    // itemCountText = itemCountText + ` ₽`;

    
    itemCountText = ('' + product.count + ` × ` + product.price + ` ₽ = `) + (product.count * product.price + ` ₽`);
    

    
    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
