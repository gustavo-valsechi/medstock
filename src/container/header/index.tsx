import React from "react"
import { Container } from "./styles"
import { useTheme } from "@/contexts/theme"

export default function Header(props: any) {

  const { theme, setTheme } = useTheme()

  return (
    <Container themeType={theme} {...props}>
      <div
        className="theme-toggle"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <i className="fa-solid fa-moon" />
        <div className="toggle">
          <div />
        </div>
        <i className="fa-solid fa-sun" />
      </div>
    </Container>
  )
}