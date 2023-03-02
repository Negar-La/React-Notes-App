import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
}

:root {
    --color-bg-dark: #3a3a3a;
    --color-bg-black: #111111;
    --color-white: #fefefe;
    --color-primary: #7634d8;
    --color-danger: rgb(249, 84, 84);
    --color-pink: #e3879e;
    --color-blue: #046e8f;
}

body {
    font-family: 'Montserrat', sans-serif;
    display: grid;
    place-items: center;
    color: var(--color-white);
    background: #ccc;
    line-height: 1.5;
}

::-webkit-scrollbar {
    display: none;
}

h2,  h4 {
    font-weight: 600;
    font-size: 1.3rem;
}

h2 {
    font-size: 2rem;
}

button {
    background: var(--color-bg-dark);
    border-radius: 0.8rem;
    padding: 0.8rem;
    font-size: 1.6rem;
    color: var(--color-white);
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);
    transition: all 300ms ease;
}

button:hover {
    cursor: pointer;
    box-shadow: none;
}

form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    input, textarea {
        width: 100%;
    padding: 0.5rem 1rem;
    background: transparent;
    border-radius: 0.2rem;
    font-size: 1.1rem;
    color: var(--color-white);
    }
    input {
        font-size: 1.7rem;
    }
}


`

export default GlobalStyle;