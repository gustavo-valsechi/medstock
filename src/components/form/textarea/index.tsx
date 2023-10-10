import React, { useCallback, useEffect, useRef } from "react"
import { Container } from "./styles"
import { useField } from "@unform/core"
import { Label } from "../label"
import _ from "lodash"

export function Textarea(props: any) {
    const textareaRef: any = useRef({})

    const { fieldName, registerField, defaultValue, error } = useField(props.name)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: textareaRef.current,
            path: 'value'
        })
    }, [fieldName, registerField])

    const onChangeText = useCallback((event: any) => {
        const value: any = event.target.value || ''

        if (textareaRef.current) textareaRef.current.value = props.mask ? props.mask(value) : value

        if (props.onChange) props.onChange(value)
    }, [props.onChange, textareaRef, props.mask])

    return (
        <Container className={props.className} error={error}>
            {!!props.label && <Label>{props.label}</Label>}
            <div className="textarea-content">
                <textarea
                    ref={textareaRef}
                    defaultValue={defaultValue || props.defaultValue}
                    onChange={onChangeText}
                    maxLength={props.maxLength}
                    rows={props.rows || 5}
                    {..._.omit(props, ['defaultValue', 'maxLength', 'className', 'onChange', 'mask', 'rows'])}
                />
            </div>
            {!!error && <div className="input-error">{error}</div>}
        </Container>
    )
}