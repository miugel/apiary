import React from 'react';
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

const Shop = () => {
    return (
        <ShopContainer>
            <h2>Shop</h2>

            <div className='products'>
                <div className='product'>
                    <img src={product1} alt='apiary sticker'/>
                    <p className='name'>Apiary Keyboards Sticker</p>
                    <p className='price'>$3</p>
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