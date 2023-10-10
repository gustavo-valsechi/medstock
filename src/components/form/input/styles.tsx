import styled from "styled-components"

export const Container: any = styled.div<{ error: string }>`
    width: 100%;
    padding-top: .3rem;

    .input-content {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${({ error, theme }) => error ? theme.negative : theme.transparent_2};
        border-radius: 5px;
        overflow: hidden;

        input {
            border: 0;
            padding: .5rem 1rem;
            width: 100%;
            font-size: .8rem;
            background-color: ${({ theme }) => theme.primary};
            color: ${({ theme }) => theme.transparent_6};

            &:disabled {
                background-color: ${({ theme }) => theme.transparent_2};
                color: ${({ theme }) => theme.transparent_6};
                opacity: .7;
            }

            &:focus-visible {
                outline: none;
            }
        }
    }

    .input-error {
        color: ${({ theme }) => theme.negative};
        font-size: .7rem;
    }
`;