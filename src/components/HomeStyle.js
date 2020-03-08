import styled from 'styled-components';
import feature1 from '../img/feature1.jpeg';
import feature2 from '../img/feature2.jpeg';
import feature3 from '../img/feature3.jpeg';
import feature4 from '../img/feature4.jpeg';

const HomeContainer = styled.div`
    .landing-container {
        height: 90vh;
        background: linear-gradient(to right, #ffb347, #ffcc33);
        
        .landing {
            height: 80vh;
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

export default HomeContainer;