import React from 'react'
import { Container } from './styles'
import { useRouter } from 'next/router'
import { Logo } from '@/components/logo'
import { useAuth } from '@/contexts/auth'
import Link from 'next/link'
import _ from 'lodash'

export default function Menu(props: any) {

    const { route } = useRouter()
    const { logout, user } = useAuth()

    const navigation = [
        { icon: 'fa-solid fa-hand-holding-dollar', label: 'Pedidos', route: '/order' },
        { icon: 'fa-solid fa-boxes-stacked', label: 'Produtos', route: '/product' },
        { icon: 'fa-solid fa-users', label: 'Clientes', route: '/customer' },
        { icon: 'fa-solid fa-truck-ramp-box', label: 'Fornecedores', route: '/supplier' },
    ]

    return (
        <Container>
            <div>
                <header>
                    <Logo size="1.8rem" />
                </header>
                <nav>
                    <ul>
                        {_.map(navigation, (data, index) =>
                            <li key={index}>
                                <Link href={data.route}>
                                    <div className={`nav-item ${_.includes(route, data.route) ? 'target' : ''}`}>
                                        <div>
                                            <i className={data.icon} />
                                        </div>
                                        <div>
                                            {data.label}
                                        </div>
                                        {_.includes(route, data.route) &&
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
                <div className='profile'>
                    <div className='profile-content'>
                        <i className='fa-solid fa-circle-user' />
                        <div>
                            {/* <label>{user.name}</label>
                            <label>{user.emailPhone}</label> */}
                        </div>
                    </div>
                    <i className='fa-solid fa-right-from-bracket' onClick={logout} />
                </div>
            </footer>
        </Container>
    )
}