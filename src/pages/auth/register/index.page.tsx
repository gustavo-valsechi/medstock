import React, { useRef } from "react"
import { Container } from "./styles"
import { Form, Logo } from "../../../components"
import { useRouter } from "next/router"
import { register } from "@/pages/api/auth"

export default function Register(props: any) {
    const router = useRouter()

    // const phone = (value: string) => Refactoring.mask.phone(value)
    // const removePhone = (value: string) => Refactoring.removeMask.phone(value)

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
                        inputs={[
                            { label: "Nome completo", name: "name" },
                            { label: "E-mail", name: "email" },
                            { label: "Senha", name: "password" },
                            { label: "Confirmar senha", name: "password_confirm" },
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