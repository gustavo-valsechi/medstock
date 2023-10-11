import React, { useCallback } from "react"
import { Container } from "./styles"
import { Label } from "../label"
import _ from "lodash"

interface IInput {
    className?: string
    label?: string
    name: string
    value: string
    mask?: (value: string) => void
    onChange: (event: any) => void
    maxLength?: number
    error: string
    disabled?: boolean
}

export function Input(props: IInput) {

    const onChange = (event: any) => {
        const value: any = event.target.value || ''

        event.target.value = props.mask ? props.mask(value) : value

        if (props.onChange) props.onChange(event)
    }

    return (
        <Container className={props.className} error={props.error}>
            {!!props.label && <Label>{props.label}</Label>}
            <div className="input-content">
                <input
                    onChange={onChange}
                    maxLength={props.maxLength || 255}
                    {..._.omit(props, ['maxLength', 'className', 'onChange', 'mask'])}
                />
            </div>
            {!!props.error && (
                <div className="input-error">
                    {props.error}
                </div>
            )}
        </Container>
    )
}