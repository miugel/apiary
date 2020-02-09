import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../img/logo.png';

const HeaderContainer = styled.div`
    height: 12.5vh;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        img {
            height: 48px;
        }
    }

    .fa-bars {
        font-size: 1.5rem;
        color: #333;
        cursor: pointer;
    }

    nav {
        ul {
            display: flex;
            list-style-type: none;

            a {
                text-decoration: none;

                li {
                    margin-left: 32px;
                    font-size: 1rem;
                    font-weight: 500;
                    color: #333;
                }
            }
        }
    }

    @media (min-width: 375px) {
        height: 10vh;
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Link to='/'><img src={logo} alt='apiary keyboards logo'/></Link>
            {/* <i className="fas fa-bars"></i> */}
            <nav>
                <ul>
                    <Link to='/faq'><li>FAQ</li></Link>
                    <Link to='/shop'><li>Shop</li></Link>
                    {/* <li>Cart</li> */}
                </ul>
            </nav>
        </HeaderContainer>
    );
};

export default Header;