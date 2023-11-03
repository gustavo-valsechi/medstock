"use client"

import React, { useState } from "react"
import { Container } from "./styles"
import { Form, Modal, Select } from "../../../components"
import Refactoring from "../../../utils"
import * as z from "zod"

// import { saveCustomer } from "../../../actions/customer"

export default function ModalCustomer(props: any) {

    const [saving, setSaving] = useState(false)

    const phone = (value: string) => Refactoring.mask.phone(value)
    const removePhone = (value: string) => Refactoring.removeMask.phone(value)

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
            <Form
                onSubmit={onSubmit}
                initialValues={{
                    name: props.modal.value?.content?.name || "",
                    email: props.modal.value?.content?.email || "",
                    phone: props.modal.value?.content?.phone || ""
                }}
                inputs={{
                    inputs: [
                        { name: "cpf", label: "CPF" },
                    ],
                    content: ({ inputs, buttons }: any) => (
                        <Container>
                            <div className="header">
                                <div className="header-avatar">
                                    <i className="fa-solid fa-dollar-sign" />
                                </div>
                                {inputs?.[0]}
                            </div>
                            <div className="body">
                                {inputs?.[1]}
                                {buttons}
                            </div>
                        </Container>
                    )
                }}
                buttons={[
                    {
                        label: "finalizar pedido",
                        type: "submit",
                        loading: saving
                    },
                    {
                        label: "cancelar",
                        transparent: true,
                        onClick: onClose,
                        disabled: saving
                    }
                ]}
            />
        </Modal>
    )
}