import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
        outline: none;
        text-decoration: none;
        transition: all .3s linear;
    } 
    html {
        font-size: 62.5%;
        overflow-x: hidden;

        @media screen and (max-width:768px){
            font-size: 55%;
        }
        @media screen and (max-width:450px){
            font-size: 50%;
        }
    }
    body {
        font-size: 1.8rem;
        font-family: 'Space Grotesk', sans-serif;
    }
`;