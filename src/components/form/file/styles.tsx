"use client"

import styled from "styled-components"

export const Container: any = styled.div<{ error: string }>`
    width: 100%;
    padding-top: .3rem;

    .image-content {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${({ error, theme }) => error ? theme.negative : theme.transparent_2};
        border-radius: 5px;
        overflow: hidden;
        padding: .5rem 1rem;
        width: 100%;
        font-size: .8rem;
        background: ${(props: any) => props.disabled ? "${({ theme }) => theme.transparent_2}" : "${({ theme }) => theme.primary}"};
        opacity: ${(props: any) => props.disabled ? ".7" : "1"};
        color: ${({ theme }) => theme.transparent_6};
        cursor: pointer;
    }

    .image-error {
        color: ${({ theme }) => theme.negative};
        font-size: .7rem;
    }
`;