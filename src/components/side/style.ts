import styled from 'styled-components';
import background from '../../images/bg-main-desktop.png'
import cardFront from '../../images/bg-card-front.png'
import cardBack from '../../images/bg-card-back.png'

export const Container = styled.div`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 100%;
    width: 75rem;
    height: 100vh;
    max-height: 100%;
    z-index: 10000;
    position: relative;
`;

export const Box = styled.div`
    position: absolute;
    top: 10%;
    left: 35rem;
    right:35rem;
    max-width: 100%;
    width: 45rem;
`; 

export const Cardfront = styled.div`
    background-image: url(${cardFront});
    max-height: 100%;
    height: 35rem;
    width: 100%;
    background-repeat: no-repeat;
    margin-left: 0rem;

    padding: 3rem 10%;
`; 

export const Cardback = styled.div`
    background-image: url(${cardBack});
    max-height: 100%;
    height: 35rem;
    width: 100%;
    background-repeat: no-repeat;
    margin-left: 10rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 3rem 10%;

    & p {
        margin-top: -10.8rem;
        margin-right: 2rem;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5rem 0;
    color: #FFF;
    font-family: 'Courier New', Courier, monospace, sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: .4rem;

    & .item {
        display: flex;
        margin-top: 3rem;
        justify-content: space-between;
    }
`;