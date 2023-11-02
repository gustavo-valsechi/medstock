"use client"

import React, { useState } from "react"
import { Container } from "./styles"
import { Label } from "../label"
import _ from "lodash"

interface IInput {
    className?: string
    label?: string
    name: string
    type: string
    value: string
    mask?: (value: string) => void
    onChange: (event: any) => void
    maxLenght?: number
    error: string
    disabled?: boolean
    onFocus: (value: any) => void
    required?: boolean
}

export function Input(props: IInput) {

    const [showPassword, setShowPassword] = useState(false)

    const onChange = (event: any) => {
        const value: any = event.target.value || ""

        event.target.value = props.mask ? props.mask(value) : value

        if (props.onChange) props.onChange(event)
    }

    return (
        <Container className={props.className} error={props.error} password={props.type === "password"}>
            {!!props.label && <Label>{props.label}{props.required ? "*" : ""}</Label>}
            <div className="input-content">
                <input
                    type={props.type === "password" ? showPassword ? "text" : "password" : props.type}
                    onChange={onChange}
                    maxLength={props.maxLenght || 255}
                    onFocus={() => {
                        if (props.onFocus) props.onFocus(props.name)
                    }}
                    {..._.omit(props, ["onFocus", "className", "onChange", "mask", "maxLenght", "required", "type"])}
                />
                {props.type === "password" && (
                    <i
                        className={showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}
                        onClick={() => setShowPassword(!showPassword)}
                    />
                )}
            </div>
            {!!props.error && (
                <div className="input-error">
                    {props.error}
                </div>
            )}
        </Container>
    )
}