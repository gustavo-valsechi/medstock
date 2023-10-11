import React, { useCallback, useRef } from "react"
import { Container } from "./styles"
import { Label } from "../label"
import _ from "lodash"

interface IInputFile {
    className?: string
    label?: string
    name: string
    value: string
    onPreview?: (url: any) => void
    onChange: (event: any) => void
    disabled?: boolean
    error: string
}

export function InputFile(props: IInputFile) {
    const inputRef: any = useRef({})

    const readImage = (data: any) => {
        if (props.onPreview) props.onPreview(URL.createObjectURL(data))
        if (props.onChange) props.onChange(data)
    }

    return (
        <Container className={props.className} error={props.error} disabled={props.disabled}>
            <input
                hidden
                type="file"
                id="file"
                accept="image/*"
                ref={inputRef}
                disabled={props.disabled}
                onChange={(e) => readImage(e.target.files?.[0])}
                name={props.name}
            />
            {!!props.label && <Label>{props.label}</Label>}
            <div className="image-content" onClick={() => inputRef.current.click()}>
                {inputRef?.current?.value || 'selecione uma imagem'}
            </div>
            {!!props.error && (
                <div className="input-error">
                    {props.error}
                </div>
            )}
        </Container>
    )
}