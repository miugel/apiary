export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = (sku, quantity) => ({
    type: ADD_TO_CART,
    payload: {sku: sku, quantity: quantity}
});