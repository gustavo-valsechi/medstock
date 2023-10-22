"use client"

import styled from "styled-components"

export const Container = styled.header`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .theme-toggle {
    width: 3rem;
    height: 1.5rem;
    border-radius: 1rem;
    border: 2px solid ${({ theme }) => theme.transparent_05};
    overflow: hidden;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;

    i {
      color: ${({ theme }) => theme.transparent_6};
      position: absolute;
      transform: translateY(-50%);
      font-size: .9rem;
      z-index: 0;
      transition: ease .8s;

      &:first-child {
        left: .2rem;
        top: 50%;
        opacity: ${(props: any) => props.themeType === "light" ? 0 : 1};
      }

      &:last-child {
        right: .2rem;
        top: 50%;
        opacity: ${(props: any) => props.themeType === "light" ? 1 : 0};
      }
    }

    .toggle {
      width: 1rem;
      height: 1rem;
      border-radius: 1rem;
      position: relative;
      transform: ${(props: any) => props.themeType === "light" ? "translateX(.2rem)" : "translateX(1.6rem)"};
      transition: ease .3s;
      z-index: 1;

      div {
        width: 100%;
        height: 100%;
        background: ${({ theme }) => theme.primary};
        border-radius: 1rem;
        position: relative;
        z-index: 2;
      }

      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 1rem;
        transform: scale(1.8);
        background: ${({ theme }) => theme.transparent_05};
        top: 0;
        left: 0;
        z-index: 1;
      }

      &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 1rem;
        transform: scale(3);
        background: ${({ theme }) => theme.transparent_05};
        top: 0;
        left: 0;
        z-index: 0;
      }
    }
  }
`;