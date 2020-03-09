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
                    max-width: 288px;
                    font-size: 1rem;
                    font-weight: 600;
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
        max-width: 921.6px;
        width: 90%;
        padding-top: 98px;
        padding-bottom: 98px;
        margin: 0 auto;

        h2 {
            margin-bottom: 32px;
            font-size: 1.5rem;
            font-weight: 700;
            color: #333;
            text-align: center;
        }

        iframe {
            max-height: 518.4px;
            height: 50.625vw;
            width: 100%;
            border-radius: 3px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
    }

    .shop {
        max-width: 921.6px;
        width: 90%;
        padding-top: 98px;
        padding-bottom: 98px;
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
                color: whitesmoke;
                cursor: pointer;
                transition: 0.25s;

                :hover {
                    box-shadow: none;
                }
            }
        }
    }

    @media (min-width: 1024px) {
        .features {
            .feature {
                flex-direction: row;
                justify-content: space-between;

                img {
                    width: 55%;
                }

                .information {
                    width: 45%;

                    p {
                        font-size: 1.125rem;
                    }
                }
            }

            .feature:nth-child(2n) {
                flex-direction: row-reverse;
            }
        }

        .shop {
            h3 {
                font-size: 1.125rem;
            }
        }
    }
`;

export default HomeContainer;