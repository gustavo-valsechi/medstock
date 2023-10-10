import React, { useCallback, useEffect, useRef } from "react"
import { Container } from "./styles"
import { useField } from "@unform/core"
import { Label } from "../label"
import _ from "lodash"

export function InputFile(props: any) {
    const inputRef: any = useRef({})

    const { fieldName, registerField, defaultValue, error } = useField(props.name)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField])

    const readImage = useCallback((data: any) => {
        if (props.onPreview) props.onPreview(URL.createObjectURL(data))
        if (props.onChange) props.onChange(data)
    }, [props.onChange])

    return (
        <Container className={props.className} error={error} disabled={props.disabled}>
            <input
                hidden
                type="file"
                id="file"
                accept="image/*"
                ref={inputRef}
                disabled={props.disabled}
                onChange={(e) => readImage(e.target.files[0])}
            />
            {!!props.label && <Label>{props.label}</Label>}
            <div className="image-content" onClick={() => inputRef.current.click()}>
                {inputRef?.current?.value || 'selecione uma imagem'}
            </div>
            {!!error && <div className="image-error">{error}</div>}
        </Container>
    )
}