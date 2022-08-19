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
    }
    body {
        font-size: 1.8rem;
        font-family: 'Space Grotesk', sans-serif;
    }
`;