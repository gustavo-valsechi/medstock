import React from 'react'
import { Container } from './styles'
import Menu from './menu'
import Header from './header'

export default function MainContainer(props: any) {
    return (
        <Container>
            <Menu />
            <div className='main-container'>
                <Header />
                {props.children}
            </div>
        </Container>
    )
}