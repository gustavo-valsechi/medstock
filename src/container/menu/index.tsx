"use client"

import React from "react"
import { Container } from "./styles"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/logo"
import { useAuth } from "@/contexts/auth"
import Link from "next/link"
import _ from "lodash"

interface INavigation {
    icon: string
    label: string
    route: string
}

export default function Menu(props: { show: boolean }) {

    const pathname = usePathname()
    const { logout, user } = useAuth()

    const navigation: Array<INavigation> = [
        { icon: "fa-solid fa-hand-holding-dollar", label: "Pedidos", route: "/order" },
        { icon: "fa-solid fa-boxes-stacked", label: "Produtos", route: "/product" },
        { icon: "fa-solid fa-users", label: "Clientes", route: "/customer" },
        { icon: "fa-solid fa-truck-ramp-box", label: "Fornecedores", route: "/supplier" },
    ]

    return (
        <Container {...props}>
            <div>
                <header>
                    <Logo />
                </header>
                <nav>
                    <ul>
                        {_.map(navigation, (data, index) =>
                            <li key={index}>
                                <Link href={data.route}>
                                    <div className={`nav-item ${_.includes(pathname, data.route) ? "target" : ""}`}>
                                        <div>
                                            <i className={data.icon} />
                                        </div>
                                        <div>
                                            {data.label}
                                        </div>
                                        {_.includes(pathname, data.route) &&
                                            <div>
                                                <i className="fa-solid fa-angle-right" />
                                            </div>}
                                    </div>
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
            <footer>
                <div className="profile">
                    <div className="profile-content">
                        <i className="fa-solid fa-circle-user" />
                        <div>
                            <label>{user.name}</label>
                            <label>{user.email}</label>
                        </div>
                    </div>
                    <button onClick={logout}>
                        <i className="fa-solid fa-right-from-bracket" />
                    </button>
                </div>
            </footer>
        </Container>
    )
}