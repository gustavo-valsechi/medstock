import styled from "styled-components"

export const Container = styled.div`
    min-width: 25rem;

    @media(max-width: 757px) {
        min-width: 100%;
    }

    .header {
        background: ${({ theme }) => theme.tertiary};
        border-radius: 5px 5px 0 0;
        height: 5rem;
    }

    .body {
        padding: 1rem 2rem;
    }
`;