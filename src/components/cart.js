import React from 'react';
import {connect} from 'react-redux';
import {decrease, increase, remove} from '../actions';
import Header from './header';
import Footer from './footer';
import {inventory} from '../data/inventory';
import styled from 'styled-components';
import {NotificationManager} from 'react-notifications';

const CartContainer = styled.div`
    height: calc(100vh - 272px);
    width: 90%;
    margin: 0 auto;
    margin-top: 64px;
    margin-bottom: 64px;

    h2 {
        margin-bottom: 32px;
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
    }

    .empty {
        font-size: 1rem;
        font-weight: 500;
        color: #333;
        text-align: center;
    }

    .cart-item {
        padding-bottom: 16px;
        margin-bottom: 16px;
        border-bottom: 1px solid lightgray;
        display: flex;
        align-items: center;

        img {
            width: 96px;
            margin-right: 16px;
            border-radius: 3px;
        }

        .details {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .left {
                width: 50%;

                .name {
                    margin-bottom: 2px;
                    font-weight: 600;
                    color: #333;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .price {
                    margin-bottom: 4px;
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: #333;
                }

                .counter {
                    display: flex;
                    align-items: center;

                    i {
                        font-size: 1rem;
                        color: #333;
                        cursor: pointer;
                    }

                    .number {
                        margin: 0 16px;
                        font-weight: 500;
                        color: #333;
                    }
                }
            }

            .remove {
                font-size: 0.875rem;
                font-weight: 500;
                color: #333;
                cursor: pointer;
                transition: 0.25s;

                i {
                    margin-right: 4px;
                }

                :hover {
                    opacity: 0.5;
                }
            }
        }
    }

    .checkout {
        margin-top: 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .total {
            font-weight: 500;
            color: #333;
        }

        button {
            padding: 12px 32px;
            border-radius: 3px;
            background: linear-gradient(to right, #ffb347, #ffcc33);
            border: none;
            font-family: 'Quicksand', sans-serif;
            font-size: 1rem;
            font-weight: 600;
            color: #333;
            cursor: pointer;
            transition: 0.25s;

            :hover {
                opacity: 0.5;
            }
        }
    }

    @media(min-width: 1024px) {
        width: 972.8px;
    }
`;

/* global Stripe */
const stripe = Stripe('pk_test_jlwufytqI1hnlgTUDi3DD7qh00P74sLvEM');

const Cart = props => {
    const onSubmit = () => {
        stripe.redirectToCheckout({
            items: props.cart.filter(item => item.quantity > 0),
            successUrl: 'https://apiarykeyboards.netlify.com',
            cancelUrl: 'https://apiarykeyboards.netlify.com',
        }).then(result => {
            console.log(result.error.message);
        });
    };

    return (
        <>
            <Header/>
            <CartContainer>
                <h2>Cart</h2>
                {props.cart[0].quantity + props.cart[1].quantity === 0 ? <p className='empty'>Nothing in your cart yet!</p> : (
                    <>
                        {props.cart[0].quantity > 0 && <div className='cart-item'>
                            <img src={inventory[0].image} alt={inventory[0].name}/>
                            <div className='details'>
                                <div className='left'>
                                    <p className='name'>{inventory[0].name}</p>
                                    <p className='price'>${inventory[0].price} USD</p>
                                    <div className='counter'>
                                        <i className='fas fa-minus-square' onClick={() => props.decrease(inventory[0].sku)}></i>
                                        <p className='number'>{props.cart[0].quantity}</p>
                                        <i className='fas fa-plus-square' onClick={() => props.increase(inventory[0].sku)}></i>
                                    </div>
                                </div>
                                
                                <p className='remove' onClick={() => {
                                    NotificationManager.error(props.cart[0].quantity > 1 ? 'Deleted items from your cart' : 'Deleted an item from your cart', null, 3000);
                                    props.remove(inventory[0].sku);
                                }}><i className='fas fa-times-circle'></i>Remove</p>
                            </div>
                        </div>}

                        {props.cart[1].quantity > 0 && <div className='cart-item'>
                            <img src={inventory[1].image} alt={inventory[1].name}/>
                            <div className='details'>
                                <div className='left'>
                                    <p className='name'>{inventory[1].name}</p>
                                    <p className='price'>${inventory[1].price} USD</p>
                                    <div className='counter'>
                                        <i className='fas fa-minus-square' onClick={() => props.decrease(inventory[1].sku)}></i>
                                        <p className='number'>{props.cart[1].quantity}</p>
                                        <i className='fas fa-plus-square' onClick={() => props.increase(inventory[1].sku)}></i>
                                    </div>
                                </div>
                                
                                <p className='remove' onClick={() => {
                                    NotificationManager.error(props.cart[1].quantity > 1 ? 'Deleted items from your cart' : 'Deleted an item from your cart', null, 3000);
                                    props.remove(inventory[1].sku);
                                }}><i className='fas fa-times-circle'></i>Remove</p>
                            </div>
                        </div>}

                        <div className='checkout'>
                            <p className='total'>Total ${(inventory[0].price * props.cart[0].quantity) + (inventory[1].price * props.cart[1].quantity)} USD</p>
                            <button onClick={onSubmit}>Checkout</button>
                        </div>
                    </>
                )}
            </CartContainer>
            <Footer/>
        </>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    };
};

export default connect(mapStateToProps, {decrease, increase, remove})(Cart);