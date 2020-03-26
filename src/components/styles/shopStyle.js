import styled from 'styled-components';

const ShopContainer = styled.div`
    margin: 64px 0;

    h2 {
        margin-bottom: 32px;
        font-size: 2rem;
        font-weight: 700;
        color: #333;
        text-align: center;
    }

    .products {
        width: 90%;
        margin: 0 auto;

        .product {
            margin-bottom: 64px;

            img {
                width: 100%;
                margin-bottom: 16px;
                border-radius: 3px;
                cursor: pointer;
            }

            .company {
                margin-bottom: 4px;
                font-size: 0.875rem;
                font-weight: 500;
                color: #333;
                text-align: center;
                cursor: pointer;
            }

            .name {
                margin-bottom: 4px;
                font-size: 1.125rem;
                font-weight: 600;
                color: #333;
                text-align: center;
                cursor: pointer;
            }

            .price {
                margin-bottom: 16px;
                font-size: 0.875rem;
                font-weight: 500;
                color: #333;
                text-align: center;
                cursor: pointer;
            }

            button {
                width: 100%;
                padding: 12px 0;
                border-radius: 3px;
                background: linear-gradient(to right, #ffb347, #ffcc33);
                border: none;
                font-family: 'Quicksand', sans-serif;
                font-size: 1rem;
                font-weight: 600;
                color: #333;
                cursor: pointer;
                transition: 0.25s;

                :hover {
                    opacity: 0.5;
                }
            }
        }
    }

    @media (min-width: 1024px) {
        height: calc(100vh - 272px);

        .products {
            width: 972.8px;
            display: flex;
            justify-content: space-between;

            .product {
                width: 47.5%;
            }
        }
    }
`;

export default ShopContainer;