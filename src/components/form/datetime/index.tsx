"use client"

import React from "react"
import { Container } from "./styles"
import { Label } from "../label"
import { useTheme } from "../../../contexts/theme"
import _ from "lodash"

interface IDateTime {
    className?: string
    label?: string
    name: string
    value: string
    mask?: (value: string) => void
    onFocus: (value: any) => void
    onChange: (event: any) => void
    maxLength?: number
    error: string
    disabled?: boolean
    required?: boolean
}

export function DateTime(props: IDateTime) {
    const { theme } = useTheme()

    const onChange = (event: any) => {
        const value: any = event.target.value || ""

        event.target.value = props.mask ? props.mask(value) : value

        if (props.onChange) props.onChange(event)
    }

    return (
        <Container className={props.className} error={props.error} theme={theme}>
            {!!props.label && <Label>{props.label}{props.required ? "*" : ""}</Label>}
            <div className="input-content">
                <input
                    type="datetime-local"
                    onChange={onChange}
                    onFocus={() => {
                        if (props.onFocus) props.onFocus(props.name)
                    }}
                    {..._.omit(props, ["maxLength", "className", "onChange", "mask", "type"])}
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