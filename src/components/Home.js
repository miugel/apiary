import React, {useState} from 'react';
import styled from 'styled-components';
import carousel1 from '../img/carousel1.jpeg';
import carousel2 from '../img/carousel2.jpg';
import carousel3 from '../img/carousel3.jpeg';
import carousel4 from '../img/carousel4.jpg';
import feature2 from '../img/feature2.jpeg';
import feature3 from '../img/feature3.jpeg';
import feature4 from '../img/feature4.jpeg';
import miscellaneous from '../img/miscellaneous.jpeg';

const HomeContainer = styled.div`
    width: 1366px;
    margin: 0 auto;
    border-radius: 3px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    .landing {
        height: 85vh;
        background: linear-gradient(to right, #ffb347, #ffcc33);
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h2 {
            width: 75%;
            font-size: 3.5rem;
            font-weight: 700;
            color: #333;
            text-align: center;
        }

        h3 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #333;
        }

        a {
            button {
                margin-top: 16px;
                padding: 8px 64px;
                border: none;
                border-radius: 3px;
                background: whitesmoke;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                outline: none;
                font-family: 'Quicksand', sans-serif;
                font-size: 16px;
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

    .features {
        .feature {
            height: 45vh;
            display: flex;

            .right-column {
                width: 50%;
                background: #333;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                i {
                    margin-bottom: 8px;
                    font-size: 2rem;
                    color: #ffb347;
                }

                p {
                    width: 75%;
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: whitesmoke;
                    text-align: center;
                }
            }
        }
    }

    .gallery {
        height: 85vh;
        background: whitesmoke;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h4 {
            margin-bottom: 32px;
            font-size: 2rem;
            font-weight: 700;
            color: #333;
        }

        .carousel {
            display: flex;
            align-items: center;

            i {
                margin: 0 32px;
                font-size: 1.5rem;
                color: #444;
                cursor: pointer;
                transition: 0.25s;

                :hover {
                    opacity: 0.5;
                }
            }

            .image {
                height: 60vh;
                width: 90vh;
                border-radius: 3px;
                background: ${({count}) => {
                    if (count === 1) {
                        return `url(${carousel1})`;
                    } else if (count === 2) {
                        return `url(${carousel2})`;
                    } else if (count === 3) {
                        return `url(${carousel3})`;
                    } else {
                        return `url(${carousel4})`;
                    };
                }};
                background-size: cover;
                background-position: center;
                display: flex;

                p {
                    padding: 16px;
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: whitesmoke;
                    opacity: 0;
                    transition: 0.25s;
                }

                :hover {
                    p {
                        opacity: 1;
                    }
                }
            }
        }
    }
`

const Home = () => {
    const [count, setCount]  = useState(1);

    const increment = () => {
        if (count === 4) {
            setCount(1);
        } else {
            setCount(count + 1);
        }
        console.log(count);
    };

    const decrement = () => {
        if (count === 1) {
            setCount(4);
        } else {
            setCount(count - 1);
        }
        console.log(count);
    };

    return (
        <HomeContainer count={count}>
            <div className='landing'>
                <h2>Custom mechanical keyboards</h2>
                <h3>built to your taste, repaired, and modified</h3>
                <a href='https://www.reddit.com/r/mechmarket/comments/e9rbg9/service_apiary_keyboards_building_soldering/' target='_blank' rel='noopener noreferrer'><button>Services</button></a>
            </div>

            <div className='gallery'>
                <h4>Gallery</h4>
                <div className='carousel'>
                    <i className='fas fa-chevron-circle-left' onClick={decrement}></i>
                    
                    <div className='image'>
                        {count === 1 && <p>Polycarbonate Singa</p>}
                        {count === 2 && <p>Discipline 65</p>}
                        {count === 3 && <p>TGR x Singa Unikorn</p>}
                        {count === 4 && <p>Keycult 1/65 Commission</p>}
                    </div>
                    
                    <i className='fas fa-chevron-circle-right' onClick={increment}></i>
                </div>
            </div>

            <div className='features'>
                <div className='feature'>
                    <div style={{width: '50%', background: `url(${feature3})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                    <div className='right-column'>
                        <i className="far fa-check-circle"></i>
                        <p>Knowledgeable and experienced</p>
                    </div>
                </div>

                <div className='feature'>
                    <div className='right-column'>
                        <i className="far fa-check-circle"></i>
                        <p>Used by hundreds and counting</p>
                    </div>
                    <div style={{width: '50%', background: `url(${feature4})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                </div>

                <div className='feature'>
                    <div style={{width: '50%', background: `url(${miscellaneous})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                    <div className='right-column'>
                        <i className="far fa-check-circle"></i>
                        <p>Quick turnaround times</p>
                    </div>
                </div>

                <div className='feature'>
                    <div className='right-column'>
                        <i className="far fa-check-circle"></i>
                        <p>Each board is handled with the utmost attention and care</p>
                    </div>
                    <div style={{width: '50%', background: `url(${feature2})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                </div>
            </div>

            {/* landing x
            features x
            gallery 
            reviews
            video
            call to action for merch */}
        </HomeContainer>
    );
};

export default Home;