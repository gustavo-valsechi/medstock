"use client"

import React, { useCallback, useEffect, useState } from "react"
import { Container } from "./styles"
import { Button } from "./button"
import { Input } from "./input"
import { Select } from "./select"
import { toFormikValidationSchema } from "zod-formik-adapter"
import { useFormik } from "formik"
import { TypeOf } from "zod"
import * as z from "zod"
import _ from "lodash"

interface IForm {
    initialValues?: any
    onSubmit: (values: any, actions?: any) => void
    clearWhen?: boolean
    inputs: Array<any>
    buttons?: Array<any>
}

export function Form(props: IForm) {

    const [focus, setFocus] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const initialValues = useCallback(() => {
        if (props.initialValues) return props.initialValues

        const values: any = {}

        _.forEach(props.inputs, (data) => {
            values[data.name] = ""
        })

        return values
    }, [props.initialValues, props.inputs])

    const validation = () => {
        const validations: any = {}

        _.forEach(props.inputs, (data) => {
            if (!data.validation) return

            validations[data.name] = data.validation
        })

        return z.object(validations)
    }

    const validations = validation()

    const formik = useFormik<TypeOf<typeof validations>>({
        initialValues: initialValues(),
        validationSchema: validations ? toFormikValidationSchema(validations) : undefined,
        onSubmit: props.onSubmit
    })

    const hasValue = (content: any) => _.some(Object.values(formik.values), (value) => !!value)

    // useEffect(() => {
    //     if (hasValue(initialValues()) && !hasValue(formik.values)) return

    //     if (!!props.clearWhen) return formik.resetForm()

    //     formik.setValues(initialValues())
    // }, [props.clearWhen, initialValues, formik])

    useEffect(() => {
        if (!formik.isSubmitting) return

        setSubmitted(true)
    }, [formik])

    const component = (data: any, index: number) => {
        const TYPES: any = {
            "text": Input,
            "select": Select,
        }

        const TypeComponent = TYPES[data.type] || Input

        return <TypeComponent
            key={index}
            type={TYPES[data.type] ? undefined : data.type}
            value={formik.values?.[data.name]}
            error={focus
                ? focus === data.name ? formik.errors?.[focus] : null
                : formik.errors?.[data.name]
            }
            onFocus={submitted ? undefined : setFocus}
            onChange={formik.handleChange}
            onBlur={() => {
                if (!submitted) formik.setErrors({})
                setFocus("")
            }}
            {..._.omit(data, ["validation"])}
        />
    }

    return (
        <Container onSubmit={formik.handleSubmit}>
            {_.map(props.inputs, (data: any, index: number) => (
                component(data, index))
            )}
            <div className="form-buttons">
                {_.map(props.buttons, (data, index) =>
                    <Button key={index} {...data} />
                )}
            </div>
        </Container>
    )
}
