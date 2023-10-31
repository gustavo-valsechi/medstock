"use client"

import React from "react"
import { Container } from "./styles"

export function Label(props: any) {
    return (
        <Container className={props.className}>
            {props.children}
        </Container>
    )
}