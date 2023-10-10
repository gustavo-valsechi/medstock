import React, { createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

const ThemeContext = createContext<any>({})

const ThemeProviderContainer = ({ children }) => {

    const [theme, setTheme] = useState("light")

    const toggle = (theme: string) => {

        const THEME_CONTENT: any = {
            light: {
                primary: "#fff",
                secondary: "#5869da",
                tertiary: "rgb(98, 157, 253, 0.2)",
                positive: "#65c965",
                negative: "#FF334E",
                transparent_6: "rgb(0, 0, 0, 0.6)",
                transparent_8: "rgb(0, 0, 0, 0.8)",
                transparent_2: "rgb(0, 0, 0, 0.2)",
                transparent_05: "rgb(0, 0, 0, 0.05)",
            },
            dark: {
                primary: "#333",
                secondary: "#5869da",
                tertiary: "rgb(98, 157, 253, 0.2)",
                positive: "#65c965",
                negative: "#FF334E",
                transparent_6: "rgb(255, 255, 255, 0.6)",
                transparent_8: "rgb(255, 255, 255, 0.8)",
                transparent_2: "rgb(255, 255, 255, 0.2)",
                transparent_05: "rgb(255, 255, 255, 0.05)",
            }
        }

        return THEME_CONTENT[theme || "light"]
    }

    useEffect(() => {
        setTheme(localStorage.getItem("@Medstock:theme") || "light")
    }, [])

    useEffect(() => {
        localStorage.setItem("@Medstock:theme", theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <ThemeProvider theme={toggle(theme)}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

const useTheme = () => useContext(ThemeContext)

export { ThemeProviderContainer as ThemeProvider, useTheme }
