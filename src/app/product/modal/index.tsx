"use client"

import React, { useState } from "react"
import { Container } from "./styles"
import { Form, Modal } from "../../../components"
import Refactoring from "../../../utils"
import * as z from "zod"

import { saveProduct } from "@/api/product"

export default function ModalCustomer(props: any) {

    const [saving, setSaving] = useState(false)

    const onClose = () => {
        props.modal.set({ is: false, content: {} })
    }

    const onSubmit = async (data: any) => {
        setSaving(true)

        const content = { ...data }

        content.value = Number(Refactoring.removeMask.money(content.value))
        content.stock = Number(content.stock)

        await saveProduct(content)

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

                </div>
                <div className="body">
                    <Form
                        onSubmit={onSubmit}
                        clearWhen={!props.modal.value?.content?.id}
                        initialValues={{
                            name: props.modal.value?.content?.name || "",
                            category: props.modal.value?.content?.category || "",
                            value: props.modal.value?.content?.value || "",
                            stock: props.modal.value?.content?.stock || "",
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
                                name: "category",
                                label: "Categoria",
                                disabled: saving,
                                validation: z.string({ required_error: "Campo obrigatório!" }),
                                maxLenght: 50,
                                required: true
                            },
                            {
                                name: "value",
                                label: "Valor",
                                disabled: saving,
                                mask: Refactoring.mask.money,
                                validation: z.string({ required_error: "Campo obrigatório!" }),
                                maxLenght: 15,
                                required: true
                            },
                            {
                                name: "stock",
                                label: "Estoque",
                                disabled: saving,
                                mask: Refactoring.mask.number,
                                validation: z.string({ required_error: "Campo obrigatório!" }),
                                maxLenght: 10,
                                required: true
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