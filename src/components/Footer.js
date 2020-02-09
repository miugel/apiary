import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .footer-container {
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        .icons {
            a {
                i {
                    margin-right: 8px;
                    margin-bottom: 8px;
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
            font-size: 0.875rem;
            font-weight: 500;
            color: #333;
        } 
    }

    @media (min-width: 375px) {
        .footer-container {
            flex-direction: row;
            justify-content: space-between;
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
                    <a href='https://linktr.ee/apiarykeyboards' target='_blank' rel='noopener noreferrer'><i className='fas fa-tree'></i></a>
                </div>
                <p>&copy; 2020 Apiary Keyboards</p>
            </div>
        </FooterContainer>
    );
};

export default Footer;