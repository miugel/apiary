import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import Header from './header';
import Footer from './footer';
import { inventory } from '../data/inventory';
import styled from 'styled-components';
import { NotificationManager } from 'react-notifications';

const ProductContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-top: 64px;
    margin-bottom: 64px;

    img {
        margin-bottom: 16px;
        width: 100%;
        border-radius: 3px;
    }

    .name {
        margin-bottom: 4px;
        font-size: 1.5rem;
        font-weight: 600;
        color: #333;
    }

    .price {
        padding-bottom: 16px;
        margin-bottom: 16px;
        border-bottom: 1px solid lightgray;
        font-weight: 500;
        color: #333;
    }

    .description {
        margin-bottom: 16px;
        color: #333;
        font-weight: 500;
    }

    .counter {
        margin-bottom: 16px;
        display: flex;
        align-items: center;

        .quantity {
            margin-right: 16px;
            font-size: 1rem;
            font-weight: 500;
            color: #333;
        }

        i {
            font-size: 1rem;
            color: #333;
            cursor: pointer;
        }

        .number {
            padding: 0 16px;
            font-weight: 500;
            color: #333;
        }
    }

    .add-to-cart {
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

    @media(min-width: 375px) and (min-height: 812px) {
        height: calc(100vh - 272px);
    }

    @media(min-width: 1024px) {
        width: 972.8px;
        display: flex;
        justify-content: space-between;
        
        img {
            height: 308.19px;
            width: 47.5%;
            margin-bottom: 0;
        }

        .information {
            width: 47.5%;
        }
    }
`;

const Product = props => {
    const id = props.match.params.id;
    
    const [quantity, setQuantity] = useState(0);

    const decrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        };
    };

    const increase = () => {
        setQuantity(quantity + 1);
    };

    const onClick = event => {
        if (quantity > 0) {
            props.addToCart(inventory[id - 1].sku, quantity);
            NotificationManager.success(quantity > 1 ? 'Successfully added items to your cart' : 'Successfully added an item to your cart', null, 3000);
            props.history.push('/cart');
        };
    };

    return (
        <>
            <Header/>
            <ProductContainer>
                <img src={inventory[id - 1].image} alt={inventory[id - 1].name}/>
                <div className='information'>
                    <p className='name'>{inventory[id - 1].name}</p>
                    <p className='price'>${inventory[id - 1].price} USD</p>
                    <p className='description'>{inventory[id - 1].description}</p>
                    <div className='counter'>
                        <p className='quantity'>Quantity</p>
                        <i className='fas fa-minus-square' onClick={decrease}></i>
                        <p className='number'>{quantity}</p>
                        <i className='fas fa-plus-square' onClick={increase}></i>
                    </div>
                    <button className='add-to-cart' onClick={onClick}>Add to cart</button>
                </div>
            </ProductContainer>
            <Footer/>
        </>
    );
};

export default connect(null, {addToCart})(Product);