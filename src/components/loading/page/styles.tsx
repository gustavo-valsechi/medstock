"use client"

import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  position: fixed;
  z-index: 10;

  .loader {
    width: 100px;
    height: 100px;
    display: grid;
    border: 8px solid #0000;
    border-radius: 50%;
    border-color: #E4E4ED #0000;
    animation: s6 1s infinite linear;
  }

  .loader::before,
  .loader::after {
    content: "";
    grid-area: 1/1;
    margin: 4px;
    border: inherit;
    border-radius: 50%;
  }

  .loader::before {
    border-color: #5869da #0000;
    animation: inherit;
    animation-duration: .5s;
    animation-direction: reverse;
  }

  .loader::after {
    margin: 16px;
  }

  @keyframes s6 {
    100% {
      transform: rotate(1turn)
    }
  }
`;