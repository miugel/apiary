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
                cart: state.cart.map(item => item.sku === action.payload ? { ...item, quantity: item.quantity + 1 } : item)
            };

        default:
            return state;
    };
};