"use client"

import React, { useState } from "react"
import { Container } from "./styles"
import { Form, Modal } from "../../../components"
import Refactoring from "../../../utils"
import * as z from "zod"

import { saveSupplier } from "@/api/supplier"

export default function ModalCustomer(props: any) {

    const [saving, setSaving] = useState(false)

    const onClose = () => {
        props.modal.set({ is: false, content: {} })
    }

    const onSubmit = async (data: any) => {
        setSaving(true)

        const content = { ...data }

        content.phone = Refactoring.removeMask.phone(content.phone)
        content.cnpj = Refactoring.removeMask.docNumber(content.cnpj)

        await saveSupplier(content)

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
                        <i className="fa-solid fa-building" />
                    </div>
                </div>
                <div className="body">
                    <Form
                        onSubmit={onSubmit}
                        initialValues={{
                            name: props.modal.value?.content?.name || "",
                            cnpj: Refactoring.mask.docNumber(props.modal.value?.content?.cnpj),
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
                                name: "cnpj",
                                label: "CNPJ",
                                mask: Refactoring.mask.docNumber,
                                disabled: saving,
                                validation: z.string({ required_error: "Campo obrigatório!" }),
                                maxLenght: 18,
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
                                validation: z.string().email("E-mail inválido!"),
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