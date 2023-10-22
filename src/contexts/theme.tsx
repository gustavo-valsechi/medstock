import React, { createContext, useContext, useEffect, useState } from "react"
import { ThemeProvider } from "styled-components"

interface ITheme {
    [key: string]: {
        primary: string
        secondary: string
        tertiary: string
        positive: string
        negative: string
        transparent_8: string
        transparent_7: string
        transparent_6: string
        transparent_5: string
        transparent_4: string
        transparent_3: string
        transparent_2: string
        transparent_1: string
        transparent_08: string
        transparent_05: string
    }
}

const ThemeContext = createContext<any>({})

const ThemeProviderContainer = ({ children }) => {

    const [theme, setTheme] = useState("light")

    useEffect(() => {
        setTheme(localStorage.getItem("@Medstock:theme") || "light")
    }, [])

    useEffect(() => {
        localStorage.setItem("@Medstock:theme", theme)
    }, [theme])

    const THEME_CONTENT: ITheme = {
        light: {
            primary: "#fff",
            secondary: "#5869da",
            tertiary: "rgb(98, 157, 253, 0.2)",
            positive: "#65c965",
            negative: "#FF334E",
            transparent_8: "rgb(0, 0, 0, 0.8)",
            transparent_7: "rgb(0, 0, 0, 0.7)",
            transparent_6: "rgb(0, 0, 0, 0.6)",
            transparent_5: "rgb(0, 0, 0, 0.5)",
            transparent_4: "rgb(0, 0, 0, 0.4)",
            transparent_3: "rgb(0, 0, 0, 0.3)",
            transparent_2: "rgb(0, 0, 0, 0.2)",
            transparent_1: "rgb(0, 0, 0, 0.1)",
            transparent_08: "rgb(0, 0, 0, 0.08)",
            transparent_05: "rgb(0, 0, 0, 0.05)",
        },
        dark: {
            primary: "#333",
            secondary: "#5869da",
            tertiary: "rgb(98, 157, 253, 0.2)",
            positive: "#65c965",
            negative: "#FF334E",
            transparent_8: "rgb(255, 255, 255, 0.8)",
            transparent_7: "rgb(255, 255, 255, 0.7)",
            transparent_6: "rgb(255, 255, 255, 0.6)",
            transparent_5: "rgb(255, 255, 255, 0.5)",
            transparent_4: "rgb(255, 255, 255, 0.4)",
            transparent_3: "rgb(255, 255, 255, 0.3)",
            transparent_2: "rgb(255, 255, 255, 0.2)",
            transparent_1: "rgb(255, 255, 255, 0.1)",
            transparent_08: "rgb(255, 255, 255, 0.08)",
            transparent_05: "rgb(255, 255, 255, 0.05)",
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <ThemeProvider theme={THEME_CONTENT[theme]}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

const useTheme = () => useContext(ThemeContext)

export { ThemeProviderContainer as ThemeProvider, useTheme }
