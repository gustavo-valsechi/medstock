"use client"

import React from "react"
import { Container } from "./styles"
import { Loading } from "./loading"
import _ from "lodash"

interface IButton {
    loading?: boolean
    disabled?: boolean
    type?: string
    onClick?: () => void
    label: string
}

export function Button(props: IButton) {
    return (
        <Container
            loading={String(!!props.loading)}
            disabled={props.disabled}
            type={props.type || "button"}
            {..._.omit(props, ["loading", "type"])}
        >
            {!!props.loading && <Loading />}
            <span>{props.label}</span>
        </Container>
    )
}