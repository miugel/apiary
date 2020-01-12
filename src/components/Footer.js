import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    height: 10vh;
    display: flex;
    align-items: center;

    .container {
        width: 1297.7px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .icons {
            a {
                i {
                    margin-right: 8px;
                    font-size: 20px;
                    color: #333;
                    transition: 0.25s;

                    :hover {
                        color: darkgray;
                    }
                }
            }
        }

        p {
            font-size: 14px;
            font-weight: 500;
            color: #333;
        } 
    }
`

const Footer = () => {
    return (
        <FooterContainer>
            <div className='container'>
                <div className='icons'>
                    <a href='https://www.twitch.tv/apiarykeyboards' target='_blank' rel='noopener noreferrer'><i className='fab fa-twitch'></i></a>
                    <a href='https://www.instagram.com/apiarykeyboards/' target='_blank' rel='noopener noreferrer'><i className='fab fa-instagram'></i></a>
                    <a href='https://www.youtube.com/channel/UCtOAR2JsDarxi40ocTPxYkg' target='_blank' rel='noopener noreferrer'><i className='fab fa-youtube'></i></a>
                    <a href='https://linktr.ee/apiarykeyboards' target='_blank' rel='noopener noreferrer'><i className='fas fa-tree'></i></a>
                </div>
                <p>&copy; 2020 Apiary Keyboards</p>
            </div>
        </FooterContainer>
    );
};

export default Footer;