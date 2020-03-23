export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = sku => ({
    type: ADD_TO_CART,
    payload: sku
});