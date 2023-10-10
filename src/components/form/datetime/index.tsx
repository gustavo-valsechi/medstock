import React, { useCallback, useEffect, useRef } from "react"
import { Container } from "./styles"
import { useField } from "@unform/core"
import { Label } from "../label"
import { useTheme } from "../../../contexts/theme"
import _ from "lodash"

export function DateTime(props: any) {
    const inputRef: any = useRef({})
    const { theme } = useTheme()

    const { fieldName, registerField, defaultValue, error } = useField(props.name)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField])

    const onChangeText = useCallback((event: any) => {
        const value: any = event.target.value || ''

        if (inputRef.current) inputRef.current.value = props.mask ? props.mask(value) : value

        if (props.onChange) props.onChange(value)
    }, [props.onChange, inputRef, props.mask])

    return (
        <Container className={props.className} error={error} theme={theme}>
            {!!props.label && <Label>{props.label}</Label>}
            <div className="input-content">
                <input
                    type="datetime-local"
                    ref={inputRef}
                    defaultValue={defaultValue || props.defaultValue}
                    onChange={onChangeText}
                    maxLength={props.maxLength || 255}
                    {..._.omit(props, ['defaultValue', 'maxLength', 'className', 'onChange', 'mask', 'type'])}
                />
            </div>
            {!!error && <div className="input-error">{error}</div>}
        </Container>
    )
}