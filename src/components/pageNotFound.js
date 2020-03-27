import React from 'react';
import styled from 'styled-components';

const PageNotFoundContainer = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        margin-bottom: 16px;
        font-size: 2rem;
        font-weight: 700;
        color: #333;
    }

    button {
        padding: 12px 32px;
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
`;

const PageNotFound = props => {
    return (
        <PageNotFoundContainer>
            <h1>Page not found</h1>
            <button onClick={() => props.history.push('/')}>Go back</button>
        </PageNotFoundContainer>
    );
};

export default PageNotFound;