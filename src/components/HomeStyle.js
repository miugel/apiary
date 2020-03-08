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
            max-width: 921.6px;
            height: 80vh;
            width: 90%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h1 {
                margin-bottom: 0px;
                font-size: 3rem;
                font-weight: 700;
                color: #333;
                text-align: center;
            }

            h2 {
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
                    background: whitesmoke;
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
        max-width: 921.6px;
        width: 90%;
        padding-top: 64px;
        padding-bottom: 64px;
        margin: 0 auto;

        .feature {
            display: flex;
            flex-direction: column;

            img {
                margin: 32px 0;
                width: 100%;
                border-radius: 3px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            }

            .information {
                margin-bottom: 32px;
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
                    max-width: 372.6px;
                    font-size: 1rem;
                    font-weight: 500;
                    color: #333;
                    text-align: center;
                }
            }
        }
    }

    // .reviews {
    //     width: 90%;
    //     margin: 0 auto;
    //     margin-bottom: 96px;

    //     h3 {
    //         margin-bottom: 16px;
    //         font-size: 2rem;
    //         font-weight: 700;
    //         color: #333;
    //         text-align: center;
    //     }

    //     .review {
    //         margin-bottom: 16px;

    //         p {
    //             font-size: 1rem;
    //             font-weight: 500;
    //             color: #333;
    //         }

    //         .reviewer {
    //             margin-bottom: 4px;
    //             font-weight: 700;
    //         }
    //     }
    // }

    .stream {
        width: 90%;
        padding-top: 64px;
        padding-bottom: 64px;
        margin: 0 auto;

        h2 {
            margin-bottom: 32px;
            font-size: 1.5rem;
            font-weight: 700;
            color: #333;
            text-align: center;
        }

        iframe {
            height: 162px;
            width: 288px;
            border-radius: 3px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
    }

    .shop {
        width: 90%;
        padding-top: 64px;
        padding-bottom: 64px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h2 {
            margin-bottom: 8px;
            font-size: 1.5rem;
            font-weight: 700;
            color: #333;
            text-align: center;
        }

        h3 {
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
        .stream {
            iframe {
                height: 189.84375px;
                width: 337.5;
            }
        }
    }

    @media (min-width: 414px) {
        .stream {
            iframe {
                height: 209.5875px;
                width: 372.6px;
            }
        }
    }

    @media (min-width: 768px) {
        .stream {
            iframe {
                height: 388.8px;
                width: 691.2px;
            }
        }
    }
`;

export default HomeContainer;