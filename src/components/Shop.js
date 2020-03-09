import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import product1 from '../img/product1.jpg';
import product2 from '../img/product2.jpg';

const  ShopContainer = styled.div`
    padding: 64px 0;

    h2 {
        margin-top: 32px;
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
            margin-bottom: 32px;

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
                border: 1px solid #ffb347;
                border-radius: 3px;
                background-color: #ffb347;
                font-family: 'Quicksand', sans-serif;
                font-size: 1rem;
                font-weight: 600;
                color: whitesmoke;
                cursor: pointer;
                transition: 0.25s;

                :hover {
                    background-color: whitesmoke;
                    color: #ffb347;
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

const Shop = () => {
    const onClick = () => {
        stripe.redirectToCheckout({
            items: [
              {sku: 'sku_GhmqRa7zJiHUB2', quantity: 2}
            ],
            successUrl: 'https://localhost:3000/success',
            cancelUrl: 'https://localhost:3000/cancel',
          }).then(result => {
            
          });
    };

    return (
        <>
            <Header/>
            <ShopContainer>
                <h2>Shop</h2>

                <div className='products'>
                    <div className='product'>
                        <img src={product1} alt='apiary keyboards sticker'/>
                        <p className='company'>Apiary Keyboards</p>
                        <p className='name'>Apiary Sticker</p>
                        <p className='price'>$3 USD</p>
                        <button onClick={onClick}>Add to cart</button>
                    </div>

                    <div className='product'>
                        <img src={product2} alt='apiary keyboards sticker with handwritten thank you note'/>
                        <p className='company'>Apiary Keyboards</p>
                        <p className='name'>Apiary Sticker + Handwritten Thank You</p>
                        <p className='price'>$5 USD</p>
                        <button onClick={onClick}>Add to cart</button>
                    </div>
                </div>
            </ShopContainer>
            <Footer/>
        </>
    );
};

export default Shop;