import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../img/logo.png';

const HeaderContainer = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    position: relative;

    .header {
        height: 72px;
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
            img {
                height: 48px;
                width: 48px;
                cursor: pointer;
            }
        }
    
        nav {
            ul {
                list-style-type: none;
                display: flex;
                align-items: center;
    
                li {
                    margin-left: 32px;
                    font-size: 1rem;
                    font-weight: 500;
                    transition: 0.25s;

                    :hover {
                        opacity: 0.5;
                    }

                    a {
                        text-decoration: none;
                        color: #333;
                    }
                }

                .cart {
                    a {
                        display: flex;
                        align-items: center;

                        p {
                            margin-left: 4px;
                            height: 24px;
                            width: 24px;
                            background: linear-gradient(to right, #ffb347, #ffcc33);
                            border-radius: 50%;
                            font-size: 0.875rem;
                            color: #333;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                    }
                }
                
            }
        }
    }

    @media(min-width: 1024px) {
        .header {
            width: 972.8px;
        }
    }
`;

const Header = props => {
    return (
        <HeaderContainer>
            <div className='header'>
                <Link to='/'><img src={logo} alt='apiary keyboards logo'/></Link>
                <nav>
                    <ul>
                        <li><a href='https://www.reddit.com/r/mechmarket/comments/e9rbg9/service_apiary_keyboards_building_soldering/' target='_blank' rel='noopener noreferrer'>FAQ</a></li>
                        {/* <li><Link to='/gallery'>Gallery</Link></li> */}
                        <li><Link to='/shop'>Shop</Link></li>
                        <li className='cart'><Link to='/cart'>Cart<p>{props.cart[0].quantity + props.cart[1].quantity}</p></Link></li>
                    </ul>
                </nav>
            </div>
        </HeaderContainer>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    };
};

export default connect(mapStateToProps)(Header);