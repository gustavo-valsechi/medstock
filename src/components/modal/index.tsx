import React from 'react'
import { Container } from './styles'
import _ from 'lodash'

import { Button } from '../form/button'

interface IModal {
    toggle: boolean
    onClose?: () => void
    title?: string
    header?: {
        title: string
        icon: string
    }
    buttons?: Array<any>
    children?: React.ReactNode
    center?: boolean
    right?: boolean
    left?: boolean
}

export function Modal(props: IModal) {
    return (
        <Container {...props}>
            <div className="modal-nummus-back" onClick={props.onClose} />
            <div className="modal-nummus-container">
                {(!!props.title || !!props.header) &&
                    <div className='modal-nummus-header'>
                        <div className='modal-nummus-title'>
                            {props.header?.icon && <i className={props.header?.icon} />}
                            <span>{props.title || props.header?.title}</span>
                        </div>
                        <i className='fa-solid fa-xmark' onClick={props.onClose} />
                    </div>}
                <div className="modal-nummus-content">
                    {props.onClose && !props.title && !props.header &&
                        <div className="modal-nummus-close" onClick={props.onClose}>
                            <i className='fa-solid fa-xmark' />
                        </div>}
                    {props.children}
                </div>
                {props.buttons &&
                    <div className='modal-nummus-buttons'>
                        {_.map(props.buttons, (button, index) =>
                            <Button key={index} {...button} />
                        )}
                    </div>}
            </div>
        </Container>
    )
}
