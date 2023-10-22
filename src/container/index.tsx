import React from "react"
import { Container } from "./styles"
import { useRouter } from "next/router"
import Menu from "./menu"
import Header from "./header"
import _ from "lodash"

export default function MainContainer({ children }) {

    const { route } = useRouter()

    const privateRoutes: boolean = !_.includes(route, "auth")

    return (
        <Container private={privateRoutes}>
            <Menu show={privateRoutes} />
            <div className="main-container">
                <Header />
                {children}
            </div>
        </Container>
    )
}