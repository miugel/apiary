import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../img/logo.png';

const HeaderContainer = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    position: relative;

    .header {
        max-width: 921.6px;
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
    
                a {
                    text-decoration: none;
    
                    li {
                        margin-left: 32px;
                        font-size: 1rem;
                        font-weight: 500;
                        color: #333;
                        transition: 0.25s;
    
                        :hover {
                            opacity: 0.5;
                        }
                    }

                    .cart {
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
`;

const Header = () => {
    return (
        <HeaderContainer>
            <div className='header'>
                <Link to='/'><img src={logo} alt='apiary keyboards logo'/></Link>
                <nav>
                    <ul>
                        <a href='https://www.reddit.com/r/mechmarket/comments/e9rbg9/service_apiary_keyboards_building_soldering/' target='_blank' rel='noopener noreferrer'><li>FAQ</li></a>
                        <Link to='/shop'><li>Shop</li></Link>
                        <Link to='/cart'><li className='cart'>Cart<p>99</p></li></Link>
                    </ul>
                </nav>
            </div>
        </HeaderContainer>
    );
};

export default Header;