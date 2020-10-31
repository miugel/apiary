import { ADD_TO_CART, DECREASE, INCREASE, REMOVE, PERSIST_CART } from '../actions';

const initialState = {
    cart: [
        {
            sku: 'sku_GhmqRa7zJiHUB2',
            quantity: 0
        },
        {
            sku: 'sku_GxZEVSe3oxrPQs',
            quantity: 0
        }
    ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let addToCartNewCart = state.cart.map(item => item.sku === action.payload.sku ? {...item, quantity: item.quantity + action.payload.quantity} : item)
            localStorage.setItem('cart', JSON.stringify(addToCartNewCart));

            return {
                cart: addToCartNewCart
            };

        case DECREASE:
            let decreaseNewCart = state.cart.map(item => item.sku === action.payload ? {...item, quantity: item.quantity - 1} : item)
            localStorage.setItem('cart', JSON.stringify(decreaseNewCart));

            return {
                cart: decreaseNewCart
            };

        case INCREASE:
            let increaseNewCart = state.cart.map(item => item.sku === action.payload ? {...item, quantity: item.quantity + 1} : item)
            localStorage.setItem('cart', JSON.stringify(increaseNewCart));

            return {
                cart: increaseNewCart
            };

        case REMOVE:
            let removeNewCart = state.cart.map(item => item.sku === action.payload ? {...item, quantity: 0} : item)
            localStorage.setItem('cart', JSON.stringify(removeNewCart));

            return {
                cart: removeNewCart
            };

        case PERSIST_CART:
            return {
                cart: action.payload
            };

        default:
            return state;
    };
};