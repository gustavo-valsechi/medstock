"use client"

import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    html, body, input, select, textarea, div, button {
        font-family: 'Poppins', sans-serif;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0); 
    } 

    html, body {
        padding: 0;
        margin: 0;
        background: ${({ theme }) => theme.primary};
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }

    div {
        &::-webkit-scrollbar-track {
            background-color: transparent;
        }

        &::-webkit-scrollbar {
            width: 6px;
            border-radius: 1rem;
        }

        &::-webkit-scrollbar-thumb {
            background: rgb(0, 0, 0, 0.08);
            width: 6px;
            border-radius: 1rem;
        }
    }
`