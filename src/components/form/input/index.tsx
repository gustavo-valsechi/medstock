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
    maxLenght?: number
    error: string
    disabled?: boolean
    onFocus: (value: any) => void
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
                    maxLength={props.maxLenght || 255}
                    onFocus={() => {
                        if (props.onFocus) props.onFocus(props.name)
                    }}
                    {..._.omit(props, ['maxLength', 'onFocus', 'className', 'onChange', 'mask'])}
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