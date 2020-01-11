import React from 'react';
import styled from 'styled-components';
import keycult from '../img/keycult.webp';

const HomeContainer = styled.div`
    width: 1024px;
    margin: 0 auto;
    border-radius: 3px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    .first-section {
        height: 85vh;
        background: #484848;
        display: flex;
        justify-content: center;
        align-items: center;

        h2 {
            width: 75%;
            font-size: 2.5rem;
            font-weight: 700;
            color: whitesmoke;
            text-align: center;
        }
    }

    .second-section {
        height: 160vh;

        .feature {
            height: 40vh;
            display: flex;

            .left-column {
                width: 50%;
                background: black;
            }

            .right-column {
                width: 50%;
            }
        }
    }
`

const Home = () => {
    return (
        <HomeContainer>
            <div className='first-section'>
                <h2>Custom mechanical keyboards built to your taste, repaired, and modified</h2>
            </div>

            <div className='second-section'>
                <div className='feature'>
                    <div className='left-column'>
                        <p>image here</p>
                    </div>
                    <div className='right-column'>
                        <p>Assembled with care</p>
                        <p>The utmost attention is paid to making sure your board is assembled perfectly.</p>
                    </div>
                </div>
            </div>

            {/* landing
            features
            reviews
            video
            call to action for merch */}
        </HomeContainer>
    );
};

export default Home;