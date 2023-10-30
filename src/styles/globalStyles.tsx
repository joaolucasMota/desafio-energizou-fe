import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
        * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    *:focus {
    outline: 0;
    }

    html, body, #root{
    height: 100%;
    
    }

    body{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: var(--PrimaryColor);
    }

    a,i{
    transition: .5s;
    text-decoration: none;
    color: inherit;
    }

    ul{
    list-style: none;
    }

    button{
    cursor: pointer;
    }
    :root {
    --PrimaryColor: #6c63ff

    } 

`;