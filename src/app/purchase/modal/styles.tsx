"use client"

import styled from "styled-components"

export const Container = styled.div`
    min-width: 30rem;

    @media(max-width: 757px) {
        min-width: 100%;
    }

    .header {
        background: ${({ theme }) => theme.tertiary};
        border-radius: 5px 5px 0 0;
        height: 5rem;
        position: relative;

        .header-avatar {
            width: 4rem;
            height: 4rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: ${({ theme }) => theme.transparent_05};
            position: absolute;
            left: 50%;
            bottom: -2rem;
            transform: translateX(-50%);
            backdrop-filter: blur(8px);

            i {
                color: ${({ theme }) => theme.transparent_1};
                font-size: 2rem;
            }
        }
    }

    .body {
        padding: 2rem 2rem 1rem;
    }
`;