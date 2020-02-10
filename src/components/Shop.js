import React, {useEffect} from 'react';
import styled from 'styled-components';
import product1 from '../img/product1.jpg';
import product2 from '../img/product2.jpg';

const  ShopContainer = styled.div`
    padding: 32px 0;

    h2 {
        margin-bottom: 32px;
        font-size: 2rem;
        font-weight: 700;
        color: #333;
        text-align: center;
    }

    .products {
        width: 90%;
        margin: 0 auto;

        .product {
            margin-bottom: 32px;

            img {
                width: 100%;
                margin-bottom: 8px;
            }

            .name {
                margin-bottom: 4px;
                font-size: 1rem;
                font-weight: 500;
                color: #333;
                text-align: center;
            }

            .price {
                font-size: 1rem;
                font-weight: 500;
                color: #333;
                text-align: center;
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
        <ShopContainer>
            <h2>Shop</h2>

            <div className='products'>
                <div className='product'>
                    <img src={product1} alt='apiary sticker'/>
                    <p className='name'>Apiary Keyboards Sticker</p>
                    <p className='price'>$3</p>
                    <button onClick={onClick}>BUY</button>
                </div>

                <div className='product'>
                    <img src={product2} alt='apiary sticker'/>
                    <p className='name'>Apiary Keyboards Sticker + Handwritten Thank You</p>
                    <p className='price'>$5</p>
                </div>
            </div>
        </ShopContainer>
    );
};

export default Shop;