import React, { useCallback, useEffect, useRef, useState } from "react"
import { Container } from "./styles"
import { useField } from "@unform/core"
import { Label } from "../label"
import _ from "lodash"

export function Select(props: any) {
    const selectRef: any = useRef({})

    const { fieldName, registerField, defaultValue, error } = useField(props.name)

    const [focus, setFocus] = useState(false)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: selectRef.current,
            path: 'value'
        })
    }, [fieldName, registerField])

    const onChangeText = useCallback((event: any) => {
        const value: any = event.target.value || ''

        if (selectRef.current) selectRef.current.value = props.mask ? props.mask(value) : value

        if (props.onChange) props.onChange(value)
    }, [props.onChange, selectRef, props.mask])

    return (
        <Container className={props.className} error={error}>
            {!!props.label && <Label>{props.label}</Label>}
            <div className="select-content">
                <select
                    ref={selectRef}
                    defaultValue={defaultValue || props.defaultValue}
                    onChange={onChangeText}
                    onMouseDown={() => setFocus(!focus)}
                    onBlur={() => setFocus(false)}
                    {..._.omit(props, ['defaultValue', 'className', 'onChange', 'options', 'onMouseDown', 'onBlur'])}
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
                <i className={focus ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'} />
            </div>
            {!!error && <div className="input-error">{error}</div>}
        </Container>
    )
}