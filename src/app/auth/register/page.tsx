"use client"

import React from "react"
import { Container } from "./styles"
import { Form, Logo } from "../../../components"
import { useRouter } from "next/navigation"
import { register } from "@/api/auth"
import * as z from "zod"

export default function Register(props: any) {
    const router = useRouter()

    const onSubmit = async (data: any) => {
        console.log(data)

        await register({})

        router.push("/auth/login")
    }

    return (
        <Container>
            <div className="container">
                <Logo size="1.3" />
                <div className="content">
                    <div className="content-title">Fazer cadastro</div>
                    <Form
                        onSubmit={onSubmit}
                        validation={(z: any) => z.refine((data: any) => data.password === data.password_confirm, {
                            message: "Confirmação de senha inválida!",
                            path: ["password_confirm"]
                        })}
                        inputs={[
                            {
                                label: "Nome completo",
                                name: "name",
                                validation: z.string({ required_error: "Campo obrigatório!" }),
                                required: true,
                                maxLength: 255
                            },
                            {
                                label: "E-mail",
                                name: "email",
                                validation: z.string({ required_error: "Campo obrigatório!" }).email("E-mail inválido!"),
                                required: true,
                                maxLength: 255
                            },
                            {
                                label: "Senha",
                                name: "password",
                                type: "password",
                                validation: z.string({ required_error: "Campo obrigatório!" }).min(6, "Mínimo 6 caracteres"),
                                required: true,
                                maxLength: 255
                            },
                            {
                                label: "Confirmar senha",
                                name: "password_confirm",
                                type: "password",
                                validation: z.string({ required_error: "Campo obrigatório!" }),
                                required: true,
                                maxLength: 255
                            },
                        ]}
                        buttons={[
                            {
                                type: "submit",
                                label: "cadastrar",
                            },
                            {
                                label: "cancelar",
                                transparent: true,
                                onClick: () => router.push("/auth/login")
                            },
                        ]}
                    />
                </div>
            </div>
        </Container>
    )
}