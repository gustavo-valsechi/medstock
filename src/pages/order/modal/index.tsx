import React, { useState } from "react"
import { Container } from "./styles"
import { Form, Modal } from "../../../components"
import Refactoring from "../../../utils"
import * as z from "zod"

// import { saveCustomer } from "../../../actions/customer"

export default function ModalCustomer(props: any) {

    const [saving, setSaving] = useState(false)

    const phone = (value: string) => Refactoring.mask.phone(value)
    const removePhone = (value: string) => Refactoring.removeMask.phone(value)

    const schema = z.object({
        name: z.string({
            required_error: "Please enter your name",
        }),
        email: z.string().email("Please enter a valid email"),
        phone: z.string({
            required_error: "Please enter your name",
        }),
    })

    const onClose = () => {
        props.modal.set({ is: false, content: {} })
    }


    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <Modal
            center
            toggle={props.modal.value?.is}
            onClose={onClose}
        >
            <Container>
                <div className="header">

                </div>
                <div className="body">
                    <Form
                        onSubmit={onSubmit}
                        validation={schema}
                        clearWhen={!props.modal.value?.content?.uuid}
                        initialValues={{
                            name: props.modal.value?.content?.name || '',
                            email: props.modal.value?.content?.email || '',
                            phone: props.modal.value?.content?.phone || ''
                        }}
                        inputs={[
                            {
                                name: "name",
                                label: "Nome",
                                disabled: saving
                            },
                            {
                                name: "phone",
                                label: "Telefone",
                                mask: phone,
                                disabled: saving
                            },
                            {
                                name: "email",
                                label: "E-mail",
                                disabled: saving
                            },
                        ]}
                        buttons={[
                            {
                                label: 'salvar',
                                type: 'submit',
                                loading: saving
                            },
                            {
                                label: 'cancelar',
                                transparent: true,
                                onClick: onClose,
                                disabled: saving
                            }
                        ]}
                    />
                </div>
            </Container>
        </Modal>
    )
}