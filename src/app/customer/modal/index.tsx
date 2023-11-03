"use client"

import React, { useState } from "react"
import { Container } from "./styles"
import { Form, Modal } from "../../../components"
import Refactoring from "../../../utils"
import * as z from "zod"

import { saveCustomer } from "@/api/customer"

export default function ModalCustomer(props: any) {

    const [saving, setSaving] = useState(false)

    const onClose = () => {
        props.modal.set({ is: false, content: {} })
    }

    const onSubmit = async (data: any) => {
        setSaving(true)

        const content = { ...data }

        content.phone = Refactoring.removeMask.phone(content.phone)
        content.cpf = Refactoring.removeMask.docNumber(content.cpf)

        await saveCustomer(content)

        setSaving(false)
    }

    return (
        <Modal
            center
            toggle={props.modal.value?.is}
            onClose={onClose}
        >
            <Container>
                <div className="header">
                    <div className="header-avatar">
                        <i className="fa-solid fa-user" />
                    </div>
                </div>
                <div className="body">
                    <Form
                        onSubmit={onSubmit}
                        initialValues={{
                            name: props.modal.value?.content?.name || "",
                            cpf: Refactoring.mask.docNumber(props.modal.value?.content?.cpf),
                            phone: Refactoring.mask.phone(props.modal.value?.content?.phone),
                            email: props.modal.value?.content?.email || "",
                        }}
                        inputs={[
                            {
                                name: "name",
                                label: "Nome",
                                disabled: saving,
                                validation: z.string({ required_error: "Campo obrigatório!" }),
                                maxLenght: 255,
                                required: true
                            },
                            {
                                name: "cpf",
                                label: "CPF",
                                mask: Refactoring.mask.docNumber,
                                disabled: saving,
                                validation: z.string({ required_error: "Campo obrigatório!" }),
                                maxLenght: 14,
                                required: true
                            },
                            {
                                name: "phone",
                                label: "Telefone",
                                mask: Refactoring.mask.phone,
                                disabled: saving,
                                validation: z.string().optional(),
                                maxLenght: 15
                            },
                            {
                                name: "email",
                                label: "E-mail",
                                disabled: saving,
                                validation: z.string().email("E-mail inválido!").optional(),
                                maxLenght: 255
                            },
                        ]}
                        buttons={[
                            {
                                label: "salvar",
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
                </div>
            </Container>
        </Modal>
    )
}