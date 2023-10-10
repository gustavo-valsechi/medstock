import React from "react"
import { Container } from "./styles"

export function Badge(props: any) {

  const status: any = {
    ENVIADO: '${({ theme }) => theme.positive}',
    ENTREGUE: '${({ theme }) => theme.positive}',
    ABERTO: '${({ theme }) => theme.positive}',
    FALHA: '${({ theme }) => theme.negative}',
  }

  return (
    <Container color={status[props.value]}>
      <div>{props.value}</div>
    </Container>
  )
}