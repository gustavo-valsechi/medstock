"use client"

import React, { useEffect, useState } from "react"
import { Container } from "./styles"
import { usePathname } from "next/navigation"
import { LoadingPage } from "@/components"
import Menu from "./menu"
import Header from "./header"
import _ from "lodash"

export default function MainContainer({ children }: { children: React.ReactNode }) {

    const pathname = usePathname()

    const [loading, setLoading] = useState(true)

    const privateRoutes: boolean = !_.includes(pathname, "auth")

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 300)
    }, [])

    return (
        <Container>
            {!!loading && <LoadingPage />}
            <Menu show={privateRoutes} />
            <div className="main-container">
                <Header />
                {children}
            </div>
        </Container>
    )
}