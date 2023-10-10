import type { AppProps } from 'next/app'
import { GlobalStyle } from './_globals'
import { StyleSheetManager } from 'styled-components'
import { ThemeProvider } from '@/contexts/theme'
import isPropValid from "@emotion/is-prop-valid"
import Head from 'next/head'
import Container from "../container"

export default function App({ Component, pageProps }: AppProps) {
    return <>
        <Head>
            <link rel="shortcut icon" href="/src/assets/favicon/favicon.ico" />

            <title>Medstock</title>
            <meta name="author" content="Medstock" />
            <meta name="description" content="Medstock - Agendamento de clientes" />
            <meta name="keyword" content="Whatsapp, Marketing, envios em masssa" />

            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
        <ThemeProvider>
            <GlobalStyle />
            <StyleSheetManager
                enableVendorPrefixes
                shouldForwardProp={(propName, elementToBeRendered) => {
                    return typeof elementToBeRendered === "string"
                        ? isPropValid(propName) && !["height", "width"].includes(propName)
                        : true
                }}
            >
                <Container>
                    <Component {...pageProps} />
                </Container>
            </StyleSheetManager>
        </ThemeProvider>
    </>
}