import React, { useState } from "react"
import { Container } from "./styles"
import { Form, Logo } from "../../../components"
import { useRouter } from "next/router"
import { useAuth } from "@/contexts/auth"
import * as z from "zod"

import { login } from "@/pages/api/auth"

export default function Login(props: any) {
    const router = useRouter()
    const { setToken } = useAuth()

    const [loading, setLoading] = useState(false)

    const schema = z.object({
        email: z.string({ required_error: "Campo obrigatório!" }).email("E-mail inválido!"),
        password: z.string({ required_error: "Campo obrigatório!" }),
    })

    async function onSubmit(credentials: any) {
        setLoading(true)

        setToken(await login(credentials))

        setLoading(false)
    }

    return (
        <Container>
            <div className="container">
                <Logo size="1.3" />
                <div className="content">
                    <div className="content-title">Fazer login</div>
                    <Form
                        validation={schema}
                        onSubmit={onSubmit}
                        inputs={[
                            { label: "E-mail", name: "email" },
                            { label: "Senha", name: "password", type: "password" },
                        ]}
                        buttons={[{
                            type: "submit",
                            label: "entrar",
                            loading: loading,
                        }]}
                    />
                    <div className="content-register">
                        Não possui conta ainda?
                        <span onClick={() => router.push("/auth/register")}>cadastre-se</span>
                    </div>
                </div>
            </div>
        </Container>
    )
}