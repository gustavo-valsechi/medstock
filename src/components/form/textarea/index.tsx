"use client"

import React from "react"
import { Container } from "./styles"
import { Label } from "../label"
import _ from "lodash"

interface ITextarea {
    className?: string
    label?: string
    name: string
    value: string
    mask?: (value: string) => void
    onChange: (event: any) => void
    maxLength?: number
    rows?: number
    error: string
    disabled?: boolean
    onFocus: (value: string) => void
    required?: boolean
}

export function Textarea(props: ITextarea) {

    const onChange = (event: any) => {
        const value: any = event.target.value || ""

        event.target.value = props.mask ? props.mask(value) : value

        if (props.onChange) props.onChange(event)
    }

    return (
        <Container className={props.className} error={props.error}>
            {!!props.label && <Label>{props.label}{props.required ? "*" : ""}</Label>}
            <div className="textarea-content">
                <textarea
                    onChange={onChange}
                    maxLength={props.maxLength}
                    rows={props.rows || 5}
                    onFocus={() => {
                        if (props.onFocus) props.onFocus(props.name)
                    }}
                    {..._.omit(props, ["onFocus", "maxLength", "className", "onChange", "mask", "rows"])}
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