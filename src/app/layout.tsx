import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { ThemeProvider } from "@/contexts/theme"
import { AuthProvider } from "@/contexts/auth"
import { Toaster } from "react-hot-toast"
import GlobalStyles from "./global.styles"
import StyledComponentsRegistry from "@/tools/registry"

import Container from "../container"

export const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["devanagari", "latin", "latin-ext"]
})

export const metadata: Metadata = {
    title: "Medstock",
    description: "Controle de estoque para farmácias",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br">
            <head>
                <script src="https://kit.fontawesome.com/be0d0071ae.js" crossOrigin="anonymous" async />
            </head>
            <body className={poppins.className}>
                <StyledComponentsRegistry>
                    <ThemeProvider>
                        <AuthProvider>
                            <GlobalStyles />
                            <Toaster
                                position="top-center"
                                reverseOrder={false}
                                containerStyle={{ fontSize: ".85rem", fontWeight: "500" }}
                            />
                            <Container>
                                {children}
                            </Container>
                        </AuthProvider>
                    </ThemeProvider>
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}
