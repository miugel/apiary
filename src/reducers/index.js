import { ADD_TO_CART } from '../actions';

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
            return {
                cart: state.cart.map(item => item.sku === action.payload.sku ? { ...item, quantity: item.quantity + action.payload.quantity } : item)
            };

        default:
            return state;
    };
};