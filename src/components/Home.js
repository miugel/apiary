import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import carousel1 from '../img/carousel1.jpeg';
import carousel2 from '../img/carousel2.jpg';
import carousel3 from '../img/carousel3.jpeg';
import carousel4 from '../img/carousel4.jpg';
import feature1 from '../img/feature1.jpeg';
import feature2 from '../img/feature2.jpeg';
import feature3 from '../img/feature3.jpeg';
import feature4 from '../img/feature4.jpeg';

const HomeContainer = styled.div`
    .landing-container {
        height: 87.5vh;
        background: linear-gradient(to right, #ffb347, #ffcc33);

        .landing {
            height: 82.5vh;
            width: 90%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
    
            h2 {
                margin-bottom: 8px;
                font-size: 3rem;
                font-weight: 700;
                color: #333;
                text-align: center;
            }
    
            p {
                margin-bottom: 16px;
                font-size: 1.5rem;
                font-weight: 600;
                color: #333;
                text-align: center;
            }
    
            a {
                button {
                    padding: 12px 32px;
                    border: none;
                    border-radius: 3px;
                    background: white;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                    font-family: 'Quicksand', sans-serif;
                    font-size: 1rem;
                    font-weight: 600;
                    color: #333;
                    cursor: pointer;
                    transition: 0.25s;
        
                    :hover {
                        box-shadow: none;
                    }
                }
            }
        }
    }

    .features {
        margin-bottom: 96px;

        .feature-1 {
            height: 50vh;
            background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${feature1});
            background-size: cover;
            background-position: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            i {
                margin-bottom: 4px;
                font-size: 2rem;
                color: #ffb347;
            }

            p {
                width: 90%;
                font-size: 1rem;
                font-weight: 500;
                color: white;
                text-align: center;
            }
        }

        .feature-2 {
            height: 50vh;
            background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${feature2});
            background-size: cover;
            background-position: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            i {
                margin-bottom: 4px;
                font-size: 2rem;
                color: #ffb347;
            }

            p {
                width: 90%;
                font-size: 1rem;
                font-weight: 500;
                color: white;
                text-align: center;
            }
        }

        .feature-3 {
            height: 50vh;
            background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${feature3});
            background-size: cover;
            background-position: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            i {
                margin-bottom: 4px;
                font-size: 2rem;
                color: #ffb347;
            }

            p {
                width: 90%;
                font-size: 1rem;
                font-weight: 500;
                color: white;
                text-align: center;
            }
        }

        .feature-4 {
            height: 50vh;
            background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${feature4});
            background-size: cover;
            background-position: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            i {
                margin-bottom: 4px;
                font-size: 2rem;
                color: #ffb347;
            }

            p {
                width: 90%;
                font-size: 1rem;
                font-weight: 500;
                color: white;
                text-align: center;
            }
        }
    }

    .reviews {
        width: 90%;
        margin: 0 auto;
        margin-bottom: 96px;

        h3 {
            margin-bottom: 16px;
            font-size: 2rem;
            font-weight: 700;
            color: #333;
            text-align: center;
        }

        .review {
            margin-bottom: 16px;

            p {
                font-size: 1rem;
                font-weight: 500;
                color: #333;
            }

            .reviewer {
                margin-bottom: 4px;
                font-weight: 700;
            }
        }
    }

    .stream {
        margin-bottom: 96px;

        h3 {
            width: 90%;
            margin: 0 auto;
            margin-bottom: 16px;
            font-size: 2rem;
            font-weight: 700;
            color: #333;
            text-align: center;
        }

        iframe {
            height: 180px;
            width: 320px;
        }
    }

    .shop {
        width: 90%;
        margin: 0 auto;
        margin-bottom: 96px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h3 {
            margin-bottom: 8px;
            font-size: 2rem;
            font-weight: 700;
            color: #333;
            text-align: center;
        }

        p {
            margin-bottom: 16px;
            font-size: 1rem;
            font-weight: 500;
            color: #333;
            text-align: center;
        }
        
        a {
            button {
                padding: 12px 32px;
                border: none;
                border-radius: 3px;
                background: linear-gradient(to right, #ffb347, #ffcc33);
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                font-family: 'Quicksand', sans-serif;
                font-size: 1rem;
                font-weight: 600;
                color: white;
                cursor: pointer;
                transition: 0.25s;
    
                :hover {
                    box-shadow: none;
                }
            }
        }
    }

    @media (min-width: 375px) {
        .landing-container {
            height: 90vh;

            .landing {
                height: 85vh;
            }
        }

        .features {
            .feature-1 {
                height: 60vh;

                p {
                    font-size: 1.25rem;
                }
            }
            
            .feature-2 {
                height: 60vh;

                p {
                    font-size: 1.25rem;
                }
            }

            .feature-3 {
                height: 60vh;

                p {
                    font-size: 1.25rem;
                }
            }

            .feature-4 {
                height: 60vh;

                p {
                    font-size: 1.25rem;
                }
            }
        }

        .stream {
            iframe {
                height: 210.9375px;
                width: 375px;
            }
        }

        .shop {
            p {
                font-size: 1.25rem;
            }
        }
    }

    @media (min-width: 414px) {
        .stream {
            iframe {
                height: 232.875px;
                width: 414px;
            }
        }
    }
`;

const Home = () => {
    return (
        <HomeContainer>
            <div className='landing-container'>
                <div className='landing'>
                    <h2>Custom mechanical keyboards</h2>
                    <p>built to your taste, repaired, or modified</p>
                    <a href='https://www.reddit.com/r/mechmarket/comments/e9rbg9/service_apiary_keyboards_building_soldering/' target='_blank' rel='noopener noreferrer'><button>Our Services</button></a>
                </div>
            </div>

            <div className='features'>
                <div className='feature-1'>
                    <i className="far fa-check-circle"></i>
                    <p>Used by hundreds of community members and counting</p>
                </div>

                <div className='feature-2'>
                    <i className="far fa-check-circle"></i>
                    <p>Knowledgeable and experienced</p>
                </div>

                <div className='feature-3'>
                    <i className="far fa-check-circle"></i>
                    <p>Quick turnaround times</p>
                </div>

                <div className='feature-4'>
                    <i className="far fa-check-circle"></i>
                    <p>Each board is handled with the utmost attention and care</p>
                </div>
            </div>
            
            {/* would need to create containers for background color */}

            <div className='reviews'>
                <h3>Reviews</h3>
                <div className='review'>
                    <p className='reviewer'>u/unteagle20</p>
                    <p>"I just received my board back that had a faulty usb and it works perfectly now!! Can't recommend enough."</p>
                </div>
                <div className='review'>
                    <p className='reviewer'>u/mizer357</p>
                    <p>"Great experience working with Apiary -- nicely fixed a faulty CTRL PCB, and elevated some Zealios switches to perfection. Highly recommended."</p>
                </div>
            </div>

            <div className='stream'>
                <h3>Watch Your Build Streamed Live on Twitch</h3>
                <iframe title='stream' src="https://www.youtube.com/embed/oVyNu3pyOdw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            <div className='shop'>
                <h3>Don't need a build, but still want to show your support?</h3>
                <p>Check out our shop and see if anything tickles your fancy!</p>
                <Link to='/shop'><button>Shop</button></Link>
            </div>
        </HomeContainer>
    );
};

export default Home;