"use client"

import styled from "styled-components"

export const Container = styled.article<{ private: boolean }>`
    width: 100vw;
    height: 100vh;
    display: flex;
    overflow: hidden;

    .main-container {
      width: 100%;
      overflow-x: hidden;
      overflow-y: overlay;
    }
`;