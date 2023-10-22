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
                        clearWhen={!props.modal.value?.content?.uuid}
                        initialValues={{
                            name: props.modal.value?.content?.name || "",
                            email: props.modal.value?.content?.email || "",
                            phone: props.modal.value?.content?.phone || ""
                        }}
                        inputs={[
                            {
                                name: "name",
                                label: "Nome",
                                disabled: saving,
                                validation: z.string({ required_error: "Campo obrigatório!" }),
                                maxLenght: 255
                            },
                            {
                                name: "phone",
                                label: "Telefone",
                                mask: phone,
                                disabled: saving,
                                validation: z.string({ required_error: "Campo obrigatório!" }),
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