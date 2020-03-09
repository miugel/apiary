import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    max-width: 921.6px;
    height: 72px;
    width: 90%;
    margin: 0 auto;

    .footer-container {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .icons {
            width: 76px;
            display: flex;
            justify-content: space-between;

            a {
                i {
                    font-size: 1.25rem;
                    color: #333;
                    transition: 0.25s;

                    :hover {
                        opacity: 0.5;
                    }
                }
            }
        }

        p {
            font-size: 0.875rem;
            font-weight: 500;
            color: #333;
        } 
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <div className='footer-container'>
                <div className='icons'>
                    <a href='https://www.twitch.tv/apiarykeyboards' target='_blank' rel='noopener noreferrer'><i className='fab fa-twitch'></i></a>
                    <a href='https://www.instagram.com/apiarykeyboards/' target='_blank' rel='noopener noreferrer'><i className='fab fa-instagram'></i></a>
                    <a href='https://www.youtube.com/channel/UCtOAR2JsDarxi40ocTPxYkg' target='_blank' rel='noopener noreferrer'><i className='fab fa-youtube'></i></a>
                </div>
                <p>&copy; 2020 Apiary Keyboards</p>
            </div>
        </FooterContainer>
    );
};

export default Footer;