import React from "react"
import { Container } from "./styles"
import { Loading } from "./loading"
import _ from "lodash"

interface IButton {
    timer?: { value: number; max: number; }
    loading?: boolean
    disabled?: boolean
    type?: string
    onClick?: () => void
    label: string
}

export function Button(props: IButton) {

    const timer = (Number(props.timer?.value) * 100) / Number(props.timer?.max)

    return (
        <Container
            timer={props.timer || props.timer === 0 ? timer : undefined}
            loading={String(!!props.loading)}
            disabled={props.disabled}
            type={props.type || "button"}
            {..._.omit(props, ["loading", "timer", "type"])}
        >
            {!!props.loading && !props.timer && <Loading />}
            <label>{props.label}</label>
        </Container>
    )
}