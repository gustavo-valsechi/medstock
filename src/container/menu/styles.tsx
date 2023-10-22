"use client"

import styled from "styled-components"

export const Container: any = styled.aside<{ show: boolean }>`
    height: 100vh;
    width: 24rem;
    border-right: 2px solid ${({ theme }) => theme.transparent_05};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    white-space: nowrap;
    transition: ease .3s;
    transform: ${({ show }) => show ? "translateX(0)" : "translateX(-24rem)"};
    margin-left: ${({ show }) => show ? "0" : "-24rem"};
    opacity: ${({ show }) => show ? "1" : "0"};
    user-select: none;

    @media(max-width: 650px) {
        width: 5rem;
        transform: ${({ show }) => show ? "translateX(0)" : "translateX(-5rem)"};
        margin-left: ${({ show }) => show ? "0" : "-5rem"};
    }

    header {
        padding: 2rem 2rem 2.5rem 1.6rem;
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.transparent_6};

        @media(max-width: 650px) {
            padding: 2rem .5rem 2rem 1.2rem;
        }

        label {
            @media(max-width: 650px) {
                display: none;
            }
        }
    }

    nav {
        ul {
            list-style: none outside none;
            margin: 0;
            padding: 0;

            .nav-item {
                margin: .5rem 1.5rem .5rem 0;
                padding: .5rem 1.3rem;
                color: ${({ theme }) => theme.transparent_6};
                font-size: .9rem;
                font-weight: 500;
                cursor: pointer;
                display: flex;
                align-items: center;
                border-left: 5px solid transparent;

                @media(max-width: 650px) {
                    margin: .5rem 0;
                    padding: .8rem 1.3rem;
                }

                &.target {
                    color: ${({ theme }) => theme.secondary};
                    border-left: 5px solid ${({ theme }) => theme.secondary};
                }

                &:hover {
                    color: ${({ theme }) => theme.transparent_8};

                    &.target {
                        border-left: 5px solid ${({ theme }) => theme.secondary};
                        color: ${({ theme }) => theme.secondary};
                    }
                }

                div:first-child {
                    flex: .15;

                    @media(max-width: 650px) {
                        flex: 1;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-right: 5px;
                    }
                }

                div:nth-child(2) {
                    flex: .70;

                    @media(max-width: 650px) {
                        display: none;
                    }
                }

                div:nth-child(3) {
                    flex: .15;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;

                    @media(max-width: 650px) {
                        display: none;
                    }
                }
            }
        }
    }

    footer {
        padding: 1rem;

        .profile {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: .8rem 1rem;
            border-radius: 5px;
            background: ${({ theme }) => theme.transparent_05};
            color: ${({ theme }) => theme.transparent_6};

            @media(max-width: 650px) {
                padding: .5rem;
                flex-direction: column;
                justify-content: center;
                background: transparent;
                gap: 1.5rem;
            }

            .profile-content {
                display: flex;
                align-items: center;
                gap: 1rem;

                i {
                    font-size: 2rem;
                }

                div {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    @media(max-width: 650px) {
                        display: none;
                    }

                    label {
                        width: 9rem;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;

                        &:first-child {
                            font-size: .8rem;
                            font-weight: 600;
                            text-transform: capitalize;
                        }

                        &:last-child {
                            font-size: .6rem;
                        }
                    }
                }
            }

            button {
                padding: .3rem .6rem;
                border: 1px solid ${({ theme }) => theme.tertiary};
                background: ${({ theme }) => theme.tertiary};
                color: ${({ theme }) => theme.secondary};
                border-radius: 5px;
                cursor: pointer;
                transition: ease .3;

                &:hover {
                    opacity: .9;
                }
            }
        }
    }
`;