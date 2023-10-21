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
    color: ${(props: any) => props.transparent
        ? props.theme.transparent_6
        : props.outline
            ? props.color || props.theme.secondary
            : '#fff !important'
    };
    background: ${(props: any) => props.transparent || props.outline
        ? 'transparent'
        : props.color || props.theme.secondary};
    border: 1px solid ${(props: any) => props.transparent
        ? 'transparent'
        : props.color || props.theme.secondary};
    pointer-events: ${(props: any) => props.loading === "true" ? "none" : "auto"};
    cursor: ${(props: any) => props.loading === "true" ? "default" : "pointer"};
    opacity: ${(props: any) => props.loading === "true" ? .6 : 1};
    padding: .4rem 2.5rem;
    transition: ease .3s;

    span {
        text-align: center;
        cursor: ${(props: any) => props.loading === "true" ? "default" : "pointer"};
    }

    &:disabled {
        pointer-events: none;
        
        &::before {
            opacity: .6;
        }
    }

    &:hover {
        opacity: .9;
        color: ${(props: any) => props.transparent
        ? props.theme.transparent_6
        : '#fff'};
        
        &::before {
            background: ${(props: any) => props.transparent
        ? 'transparent'
        : props.color || props.theme.secondary};
        }
    }
`;