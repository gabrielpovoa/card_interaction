import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-direction: column;
    
    position: absolute;
    top: 25rem; right: 15rem;
    
    
    margin-top: 4rem;
    padding: 5rem 5%;
    border-radius: .8rem;
    background-color: #F1F1F1;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    width: 35vw; height: 40rem;
    margin: auto;


    h2 {
        color: #454545;
        font-size: 1.4rem;
    }

    a {
        display: block;
        width: 100%;
    }

    button {
        display: block;
        background-color: #7159c1;
        color: #FFF;
        width: 100%;
        border-radius: .8rem;
        cursor: pointer;
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
        font-weight: bold;
        margin-top: 4rem;
        padding-block: 2rem;
    }
    img {
        width: 5vw;
    }
`;