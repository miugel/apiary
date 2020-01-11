import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.jpg';

const HeaderContainer = styled.div`
    height: 10vh;
    width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        height: 64px;
    }

    nav {
        display: flex;

        p {
            margin-left: 32px;
            font-size: 1rem;
            font-weight: 500;
            color: #484848;
            cursor: pointer;
            transition: 0.25s;

            :hover {
                color: darkgray;
            }
        }
    }
`

const Header = () => {
    return (
        <HeaderContainer>
            <img src={logo}/>
            <nav>
                <p>FAQ</p>
                <p>Shop</p>
                <p>Cart</p>
            </nav>
        </HeaderContainer>
    );
};

export default Header;