import styled from 'styled-components';

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

            h1 {
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
                    background: #f5f5f5;
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
        width: 90%;
        margin: 0 auto;
        margin-top: 128px;
        margin-bottom: 128px;

        .feature {
            display: flex;
            flex-direction: column;

            img {
                width: 100%;
                margin-bottom: 32px;
                border-radius: 3px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            }

            .information {
                margin-bottom: 64px;
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

        .feature:last-child {
            .information {
                margin-bottom: 0;
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
        margin: 0 auto;
        margin-bottom: 128px;

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
        width: 90%;
        margin: 0 auto;
        margin-bottom: 128px;
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
                color: #333;
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
            width: 972.8px;

            .feature {
                margin-bottom: 64px;
                flex-direction: row;
                justify-content: space-between;

                img {
                    width: 55%;
                    margin-bottom: 0;
                }

                .information {
                    width: 45%;
                    margin-bottom: 0;

                    p {
                        font-size: 1.125rem;
                    }
                }
            }

            .feature:nth-child(2n) {
                flex-direction: row-reverse;
            }
        }

        .stream {
            width: 972.8px;
        }

        .shop {
            h3 {
                font-size: 1.125rem;
            }
        }
    }
`;

export default HomeContainer;