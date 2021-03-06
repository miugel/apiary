import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import Header from './header';
import Footer from './footer';
import { inventory } from '../data/inventory';
import ShopContainer from './styles/shopStyle';
import { NotificationManager } from 'react-notifications';

const Shop = props => {
    const addItemToCart = sku => {
        props.addToCart(sku, 1);
        NotificationManager.success('Successfully added an item to your cart', null, 3000);
        props.history.push('/cart');
    };

    return (
        <>
            <Header/>
            <ShopContainer>
                <h2>Shop</h2>

                <div className='products'>
                    {inventory.map((item, index) => (
                        <div key={index} className='product'>
                            <img src={item.image} alt={`${item.name}`} onClick={() => props.history.push(`/shop/${item.id}`)}/>
                            <p className='company' onClick={() => props.history.push(`/shop/${item.id}`)}>Apiary Keyboards</p>
                            <p className='name' onClick={() => props.history.push(`/shop/${item.id}`)}>{item.name}</p>
                            <p className='price' onClick={() => props.history.push(`/shop/${item.id}`)}>${item.price} USD</p>
                            <button onClick={() => addItemToCart(item.sku)}>Add to cart</button>
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