import React from "react"
import { Container } from "./styles"
import Image from "next/image"

import logo from "@/assets/logo.png"

interface ILogo {
  opacity?: string | number
  size?: string | number
}

export function Logo(props: ILogo) {
  return (
    <Container {...props}>
      <div className="logo-container">
        <Image alt="logo" src={logo} />
      </div>
      <label>MedStock</label>
    </Container>
  )
}