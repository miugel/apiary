import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../img/logo.png';

const HeaderContainer = styled.div`
    // height: 10vh;
    // width: 972.8px;
    // margin: 0 auto;
    // display: flex;
    // justify-content: space-between;
    // align-items: center;
    
    // a {
    //     img {
    //         height: 64px;
    //     }
    // }

    // nav {
    //     display: flex;
    //     align-items: center;

    //     p {
    //         margin-left: 48px;
    //         font-size: 1rem;
    //         font-weight: 500;
    //         color: #333;
    //         cursor: pointer;
    //         transition: 0.25s;

    //         :hover {
    //             color: darkgray;
    //         }
    //     }

    //     i {
    //         margin-left: 48px;
    //         font-size: 1.25rem;
    //         color: #333;
    //         cursor: pointer;
    //         transition: 0.25s;

    //         :hover {
    //             color: darkgray;
    //         }
    //     }
    // }

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
    }

    nav {
        ul {
            display: flex;
            list-style-type: none;

            li {
                margin-left: 16px;
                font-size: 1rem;
                font-weight: 500;
                color: #333;
            }
        }
    }
`

const Header = () => {
    return (
        <HeaderContainer>
            <Link to='/'><img src={logo} alt='apiary keyboards logo'/></Link>
            <i className="fas fa-bars"></i>
            {/* <nav className='middle-nav'>
                <ul>
                    <li>FAQ</li>
                    <li>Shop</li>
                    <li>Cart</li>
                </ul>
            </nav> */}
        </HeaderContainer>
    );
};

export default Header;