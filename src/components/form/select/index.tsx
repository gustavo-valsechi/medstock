"use client"

import React, { useState } from "react"
import { Container } from "./styles"
import { Label } from "../label"
import _ from "lodash"

interface ISelect {
    className?: string
    label?: string
    name: string
    value: string
    onChange: (event: any) => void
    options: Array<any>
    error: string
    disabled?: boolean
    onFocus: (value: any) => void
    required?: boolean
}

export function Select(props: ISelect) {

    const [focus, setFocus] = useState(false)

    return (
        <Container className={props.className} error={props.error}>
            {!!props.label && <Label>{props.label}{props.required ? "*" : ""}</Label>}
            <div className="select-content">
                <select
                    onChange={props.onChange}
                    onMouseDown={() => setFocus(!focus)}
                    onBlur={() => setFocus(false)}
                    onFocus={() => {
                        if (props.onFocus) props.onFocus(props.name)
                    }}
                    {..._.omit(props, ["className", "onChange", "onFocus", "options", "onMouseDown", "onBlur", "maxLength", "required"])}
                >
                    {_.map(props.options, (data, index) =>
                        <option
                            key={index}
                            value={Object.keys(data)}
                        >
                            {Object.values(data)}
                        </option>
                    )}
                </select>
                <i className={focus ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"} />
            </div>
            {!!props.error && (
                <div className="input-error">
                    {props.error}
                </div>
            )}
        </Container>
    )
}