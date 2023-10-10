import React from "react"
import { Container } from "./styles"
import Image from "next/image"

import logo from "@/assets/logo.png"

export function Logo(props: any) {
  return (
    <Container {...props}>
      <div className="logo-container">
        <Image alt="logo" src={logo} />
      </div>
      <label>MedStock</label>
    </Container>
  )
}