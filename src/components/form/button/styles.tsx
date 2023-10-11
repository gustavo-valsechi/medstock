"use client"

import styled from "styled-components"

export const Container: any = styled.button`
    border-radius: 5px;
    font-size: .8rem;
    font-weight: 500;
    transition: ease .3s;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props: any) =>
        props.transparent
            ? props.theme.transparent_6
            : props.outline
                ? props.color || props.theme.secondary
                : '#fff !important'
    };
    background: transparent;
    border: 1px solid transparent;
    pointer-events: ${(props: any) => props.loading === "true" ? "none" : "auto"};
    cursor: ${(props: any) => props.loading === "true" ? "default" : "pointer"};
    padding: .4rem 2.5rem;
    position: relative;

    label {
        text-align: center;
        cursor: ${(props: any) => props.loading === "true" ? "default" : "pointer"};
        position: relative;
        z-index: 1;
    }

    &:disabled {
        pointer-events: none;
        
        &::before {
            opacity: .6;
        }
    }

    &:hover {
        opacity: .9;
        color: ${(props: any) =>
        props.transparent
            ? props.theme.transparent_6
            : '#fff'};
        
        &::before {
            background: ${(props: any) =>
        props.transparent
            ? 'transparent'
            : props.color || props.theme.secondary};
        }
    }

    &::before {
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        border-radius: 5px;
        background: ${(props: any) =>
        props.transparent || props.outline
            ? 'transparent'
            : props.color || props.theme.secondary};
        border: 1px solid ${(props: any) =>
        props.transparent
            ? 'transparent'
            : props.color || props.theme.secondary};
        transition: ease .3s;
        opacity: ${(props: any) => props.loading === "true" ? .6 : 1};
    }

    ${(props: any) => (!!props.timer || props.timer === 0) && props.loading === 'true' && `
        &::after {
            content: '';
            position: absolute;
            height: 100%;
            width: ${props.timer || 0}%;
            min-width: 20px;
            background: ${props.theme.secondary};
            border-radius: 5px;
            border: 1px solid ${props.theme.secondary};
            transition: ease .3s;
            opacity: 1;
        }
    `}
`;