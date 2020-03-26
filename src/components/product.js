import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../actions';
import Header from './header';
import Footer from './footer';
import {inventory} from '../data/inventory';
import styled from 'styled-components';
import { NotificationManager } from 'react-notifications';

const ProductContainer = styled.div`
    height: calc(100vh - 144px);
    width: 90%;
    margin: 0 auto;

    img {
        margin-top: 64px;
        width: 100%;
        border-radius: 3px;
    }
`;

const Product = props => {
    const id = props.match.params.id;
    
    const [quantity, setQuantity] = useState(0);

    const increase = () => {
        setQuantity(quantity + 1);
    };

    const decrease = () => {
        if (quantity <= 0) {
            setQuantity(quantity - 1);
        };
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
                        <button type='button' onClick={decrease}>-</button>
                        <p className='number'>{quantity}</p>
                        <button type='button' onClick={increase}>+</button>
                    </div>
                    <button onClick={onClick}>Add to cart</button>
                </div>
            </ProductContainer>
            <Footer/>
        </>
    );
};

export default connect(null, {addToCart})(Product);