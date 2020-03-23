import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import { inventory } from './Inventory';
import { NotificationManager } from 'react-notifications';

const  ShopContainer = styled.div`
    margin: 64px 0;

    h2 {
        margin-bottom: 32px;
        font-size: 2rem;
        font-weight: 700;
        color: #333;
        text-align: center;
    }

    .products {
        max-width: 921.6px;
        width: 90%;
        margin: 0 auto;

        .product {
            // margin-bottom: 32px;

            img {
                width: 100%;
                margin-bottom: 8px;
                border-radius: 3px;
            }

            .company {
                margin-bottom: 4px;
                font-size: 0.875rem;
                font-weight: 500;
                color: #333;
                text-align: center;
            }

            .name {
                margin-bottom: 4px;
                font-size: 1.125rem;
                font-weight: 600;
                color: #333;
                text-align: center;
            }

            .price {
                margin-bottom: 16px;
                font-size: 0.875rem;
                font-weight: 500;
                color: #333;
                text-align: center;
            }

            button {
                width: 100%;
                padding: 12px 0;
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
    }

    @media (min-width: 1024px) {
        height: calc(100vh - 144px);

        .products {
            display: flex;
            justify-content: space-between;

            .product {
                width: 47.5%;
            }
        }
    }
`;

/* global Stripe */
const stripe = Stripe('pk_test_jlwufytqI1hnlgTUDi3DD7qh00P74sLvEM');

const Shop = props => {
    const onClick = () => {
        stripe.redirectToCheckout({
            items: props.cart,
            successUrl: 'https://localhost:3000',
            cancelUrl: 'https://localhost:3000',
        }).then(result => {
            console.log(result.error.message);
        });
    };

    return (
        <>
            <Header/>
            <ShopContainer>
                <h2 onClick={onClick}>Shop</h2>

                <div className='products'>
                    {inventory.map((item, index) => (
                        <div key={index} className='product'>
                            <img src={item.image} alt={`${item.name}`}/>
                            <p className='company'>Apiary Keyboards</p>
                            <p className='name'>{item.name}</p>
                            <p className='price'>${item.price} USD</p>
                            <button onClick={() => {
                                props.addToCart(item.sku);
                                NotificationManager.success(`Successfully added an item to your cart`, null, 3000);
                                props.history.push('/cart');
                            }}>Add to cart</button>
                        </div>
                    ))}
                </div>
            </ShopContainer>
            <Footer/>
        </>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    };
};

export default connect(mapStateToProps, { addToCart })(Shop);