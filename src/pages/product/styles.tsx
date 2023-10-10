import styled from 'styled-components'

export const Container = styled.div`
    padding: 0 2rem 2rem;

    .templates-label {
        color: ${({ theme }) => theme.transparent_6};

        span {
            font-size: 1.3rem;
            font-weight: 600;
        }

        p {
            margin-top: .5rem;
            margin-bottom: 2rem;
            font-size: .8rem;
        }
    }
`;