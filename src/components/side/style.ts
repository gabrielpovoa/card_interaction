import styled from 'styled-components';
import background from '../../images/bg-main-desktop.png'
import backgroundMobile from '../../images/bg-main-mobile.png'
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

    @media screen and (max-width:768px){
        background-image: url(${backgroundMobile});
        /* display: flex; */
        flex-direction: column;
        width: 100%;
        padding: 3rem;
        height: 50vh;
    }

`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 10%;
    left: 35rem;
    right:35rem;
    max-width: 100%;
    width: 45rem;



    @media screen and (max-width:768px){
        width: 30rem;
    }
    
`; 

export const Cardfront = styled.div`
    /* object-fit: contain; */
    background-image: url(${cardFront});
    max-height: 100%;
    height: 35rem;
    width: 100%;
    background-repeat: no-repeat;
    margin-left: 0rem;

    padding: 3rem 10%;

    @media screen and (max-width:768px){
        width: 88vw;
        order: 2;
        height: 100vh;
    }
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
        display: block;

        @media screen and (max-width:768px){
            margin-top: -7.8rem;
            margin-right: 29rem;
        }
    }

        @media screen and (max-width:768px){
           width: 88vw;
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