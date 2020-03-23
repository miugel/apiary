import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import Header from './Header';
import Footer from './Footer';
import ShopContainer from './styles/shopStyle';
import { inventory } from './Inventory';
import { NotificationManager } from 'react-notifications';

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