import React, { useCallback, useEffect } from "react"
import { Container } from "./styles"
import { Button } from "./button"
import { Input } from "./input"
import { Textarea } from "./textarea"
import { DateTime } from "./datetime"
import { toFormikValidationSchema } from "zod-formik-adapter"
import { useFormik } from "formik"
import { TypeOf } from "zod"
import _ from "lodash"

interface IForm {
    initialValues?: any
    validation?: any
    onSubmit: (values: any, actions?: any) => void
    clearWhen?: boolean
    inputs: Array<any>
    buttons?: Array<any>
}

export function Form(props: IForm) {

    type Schema = TypeOf<typeof props.validation>

    const initialValues = useCallback(() => {
        if (props.initialValues) return props.initialValues

        const values = {}

        _.forEach(props.inputs, (data) => {
            values[data.name] = ""
        })

        return values
    }, [props.initialValues, props.inputs])

    const formik = useFormik<Schema>({
        initialValues: initialValues(),
        onSubmit: props.onSubmit,
        validationSchema: props.validation ? toFormikValidationSchema(props.validation) : undefined
    })

    useEffect(() => {
        if (formik.values == formik.initialValues) return

        if (props.clearWhen) return formik.resetForm()

        if (formik.initialValues) return

        formik.setValues(initialValues())
    }, [props.clearWhen, initialValues, formik])

    const component = (data: any, index: number) => {
        const TYPES = {
            "textarea": Textarea,
            "password": Input,
            "text": Input,
            "datetime": DateTime,
        }

        const TypeComponent = TYPES[data.type || "text"]

        return <TypeComponent
            key={index}
            value={formik.values?.[data.name]}
            error={formik.errors?.[data.name]}
            onChange={formik.handleChange}
            {...data}
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