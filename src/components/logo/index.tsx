import React from "react"
import { Container } from "./styles"

export function Logo(props: any) {
  return (
    <Container {...props}>
      <i className="fa-solid fa-hand-holding-medical" /><label>Medstock</label>
    </Container>
  )
}