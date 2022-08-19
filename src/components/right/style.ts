import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: #FFF;
`;

export const Form = styled.form`
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Boxcontainer = styled.div`
    & label {
        text-transform: uppercase;
        align-self: flex-start;
        margin-block: .4rem;
        display: block;
    }
    & input::placeholder {
        color: #b8b8d4;
        font-family: 'Space Grotesk', sans-serif;
        font-size: 1.4rem;
        text-align: start;
    }
    & input[type=text],input[type=number]  {
        width: 100%;
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
        border-radius: .8rem;
        height: 5rem;
        padding: 1rem 2rem;
        font-family: 'Courier New', Courier, monospace, sans-serif;
        border: .1rem solid #b8b8d4;
        margin-bottom: 1.2rem;

        /* WHNEN INPUT IS ACTIVE && FILLED OUT: BORDER-COLOR: #7159C1 */
    }
    & input[type=button] {
        display: block;
        width: 100%;
        margin-top: 2rem;
        border-radius: .8rem;
        padding: 2rem 5%;
        text-transform: uppercase;
        background-color: #333;
        color: #FFF;
        font-weight: bolder;
        cursor: pointer;
    }
    & input[type=button]:hover {
        background-color: #7159C1;
    }
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Date = styled.div`
    display: flex;
    & input[type=text] {
        width: 10rem;
        margin-right: 2rem;
    }
`;

export const Security = styled.div`
    margin-top: 2rem;
`;
