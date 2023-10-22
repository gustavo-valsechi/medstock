import styled from "styled-components"

export const Container: any = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 2rem;
    margin-right: .5rem;

    div {
        width: .5rem;
        height: .5rem;
        border-radius: 1rem;
        background: ${(props) => props.color || "rgb(255, 255, 255, 1)"};

        &:nth-child(1) {
            animation: blinkOne infinite ease 2s;
        }

        &:nth-child(2) {
            animation: blinkTwo infinite ease 2s;
        }

        &:nth-child(3) {
            animation: blinkThree infinite ease 2s;
        }
    }

    @keyframes blinkOne {
        0% {
            opacity: 0.8;
        }
        20% {
            opacity: 0.2;
        }
        40% {
            opacity: 0.2;
        }
        60% {
            opacity: 0.2;
        }
        80% {
            opacity: 0.2;
        }
        100% {
            opacity: 0.8;
        }
    }

    @keyframes blinkTwo {
        0% {
            opacity: 0.2;
        }
        20% {
            opacity: 0.8;
        }
        40% {
            opacity: 0.2;
        }
        60% {
            opacity: 0.2;
        }
        80% {
            opacity: 0.8;
        }
        100% {
            opacity: 0.2;
        }
    }

    @keyframes blinkThree {
        0% {
            opacity: 0.2;
        }
        25% {
            opacity: 0.2;
        }
        50% {
            opacity: 0.8;
        }
        75% {
            opacity: 0.2;
        }
        100% {
            opacity: 0.2;
        }
    }
`;