import styled from "styled-components"

interface IProps {
    notFound: boolean
}

export const Container = styled.div<IProps>`
    .table-content {
        overflow-x: auto;

        &::-webkit-scrollbar {
            width: 0;
            height: ${(props: any) => (props.notFound ? "0px" : "5px")};
        }

        &::-webkit-scrollbar-track {
            background: transparent;
        }

        &::-webkit-scrollbar-thumb {
            background-color: rgb(255, 255, 255, 0.1);
            border-radius: 5px;
        }

        table {
            font-size: 0.9rem;
            border: 0;
            color: ${({ theme }) => theme.transparent_6};
            overflow-x: ${(props: any) => (props.notFound ? "auto" : "hidden")};
            width: 100%;
            border-spacing: 0;

            @media (max-width: 1200px) {
                font-size: 0.8rem;
            }

            @media (max-width: 950px) {
                font-size: 0.65rem;
            }

            .table-temp {
                background: ${({ theme }) => theme.transparent_05};
                height: 2.5rem;
                padding: 0.8rem 1.3rem;
                margin-top: 0.5rem;
                white-space: nowrap;
                display: flex;
                align-items: center;
                position: relative;
                transition: ease 0.3s;

                &.image {
                    padding: .8rem .5rem !important;

                    .avatar {
                        width: 1.8rem;
                        height: 1.8rem;
                        background: ${({ theme }) => theme.transparent_05};
                        border-radius: 1rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        overflow: hidden;

                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }

                        i {
                            font-size: 1.8rem;
                        }
                    }
                }

                &.action {
                    display: flex;
                    justify-content: flex-end;
                    padding: .8rem .5rem !important;

                    &.left {
                        justify-content: flex-start;

                        .button {
                            margin-left: 0;
                            margin-right: .5rem;
                        }
                    }

                    &.center {
                        justify-content: center;

                        .button {
                            margin-left: 0;
                        }
                    }

                    .actions {
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                    }

                    .button {
                        width: 1.8rem;
                        height: 1.8rem;
                        border-radius: 5px;
                        border: 1px solid ${({ theme }) => theme.tertiary};
                        background: ${({ theme }) => theme.tertiary};
                        color: ${({ theme }) => theme.secondary};
                        cursor: pointer;
                        transition: ease 0.3s;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: .8rem;
                        margin-left: .5rem;

                        &:disabled {
                            pointer-events: none;
                            opacity: .5;
                        }

                        &:hover {
                            opacity: .9;

                            &.negative {
                                background: ${({ theme }) => theme.negative};
                            }
                        }
                    }
                }
            }

            thead {
                tr {
                    th {
                        border: none;
                        padding: 0;
                        text-transform: uppercase;
                        font-weight: 500;
                        font-size: .8rem;
                        letter-spacing: 2px;
                        position: relative;
                        height: 2.5rem;

                        &:first-child {
                            .table-temp {
                                border-top-left-radius: 5px;
                                border-bottom-left-radius: 5px;
                            }
                        }

                        &:last-child {
                            .table-temp {
                                border-top-right-radius: 5px;
                                border-bottom-right-radius: 5px;
                            }
                        }
                    }
                }
            }

            tbody {
                tr {
                    &:hover {
                        td {
                            .table-temp {
                                background: ${({ theme }) => theme.tertiary};
                            }
                        }
                    }

                    td {
                        border: none;
                        padding: 0;
                        font-size: .8rem;
                        font-weight: 400;

                        &:first-child {
                            .table-temp {
                                border-top-left-radius: 5px;
                                border-bottom-left-radius: 5px;
                            }
                        }

                        &:last-child {
                            .table-temp {
                                border-top-right-radius: 5px;
                                border-bottom-right-radius: 5px;
                            }
                        }
                    }

                    &:first-child {
                        td {
                            .table-temp {
                                margin-top: 1.5rem;
                            }
                        }
                    }
                }
            }
        }
    }
    
    .not-found {
        border-radius: 5px;
        background: ${({ theme }) => theme.transparent_05};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 1.5rem 0;
        padding: 2.5rem;
        width: 100%;

        p {
            color: ${({ theme }) => theme.transparent_6};
            text-align: center;
        }

        p:first-child {
            font-size: 1.3rem;
            font-weight: 600;
            margin-top: 0;
            margin-bottom: 0.5rem;

            @media (max-width: 1200px) {
                font-size: 1rem;
            }

            @media (max-width: 950px) {
                font-size: .8rem;
            }
        }

        p:last-child {
            font-size: 0.8rem;
            max-width: 50rem;
            margin-top: 0;
            margin-bottom: 0;

            @media (max-width: 1200px) {
                font-size: 0.7rem;
            }

            @media (max-width: 950px) {
                font-size: 0.65rem;
            }
        }
    }
`;