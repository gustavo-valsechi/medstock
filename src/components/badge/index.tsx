"use client"

import React from "react"
import { Container } from "./styles"

interface IBadge {
  value: string
}

export function Badge(props: IBadge) {

  const status: any = {
    ENVIADO: "positive",
    ENTREGUE: "positive",
    ABERTO: "positive",
    FALHA: "negative",
  }

  return (
    <Container color={status[props.value]}>
      <div>{props.value}</div>
    </Container>
  )
}