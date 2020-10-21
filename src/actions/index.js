export const ADD_TO_CART = 'ADD_TO_CART';
export const DECREASE = 'DECREASE';
export const INCREASE = 'INCREASE';
export const REMOVE = 'REMOVE';

export const addToCart = (sku, quantity) => ({
    type: ADD_TO_CART,
    payload: { sku: sku, quantity: quantity }
});

export const decrease = sku => ({
    type: DECREASE,
    payload: sku
});

export const increase = sku => ({
    type: INCREASE,
    payload: sku
});

export const remove = sku => ({
    type: REMOVE,
    payload: sku
});
