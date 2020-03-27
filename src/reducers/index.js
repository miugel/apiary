import {ADD_TO_CART, DECREASE, INCREASE, REMOVE} from '../actions';

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
                cart: state.cart.map(item => item.sku === action.payload.sku ? {...item, quantity: item.quantity + action.payload.quantity} : item)
            };

        case DECREASE:
            return {
                cart: state.cart.map(item => item.sku === action.payload ? {...item, quantity: item.quantity - 1} : item)
            };

        case INCREASE:
            return {
                cart: state.cart.map(item => item.sku === action.payload ? {...item, quantity: item.quantity + 1} : item)
            };

        case REMOVE:
            return {
                cart: state.cart.map(item => item.sku === action.payload ? {...item, quantity: 0} : item)
            };

        default:
            return state;
    };
};