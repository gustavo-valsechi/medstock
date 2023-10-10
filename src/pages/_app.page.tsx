import type { AppProps } from 'next/app'
import { GlobalStyle } from './_globals'
import { StyleSheetManager } from 'styled-components'
import { ThemeProvider } from '@/contexts/theme'
import { AuthProvider } from '@/contexts/auth'
import isPropValid from "@emotion/is-prop-valid"
import Head from 'next/head'
import _ from 'lodash'

import Container from "@/container"

export default function App({ Component, pageProps }: AppProps) {
    return <>
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/src/assets/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/src/assets/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/src/assets/favicon-16x16.png" />
            <link rel="manifest" href="/src/assets/site.webmanifest" />
            <link rel="mask-icon" href="/src/assets/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />

            <title>Medstock</title>
            <meta name="author" content="Medstock" />
            <meta name="description" content="Medstock - Controle de estoque para farmácias" />
            <meta name="keyword" content="controle de estoque, farmacia, medstock, Medstock, med, Med, stock, Stock" />

            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
        <ThemeProvider>
            <AuthProvider>
                <GlobalStyle />
                <StyleSheetManager
                    enableVendorPrefixes
                    shouldForwardProp={(propName, elementToBeRendered) => {
                        return typeof elementToBeRendered === "string"
                            ? isPropValid(propName) && !["height", "width"].includes(propName)
                            : true;
                    }}
                >
                    <Container>
                        <Component {...pageProps} />
                    </Container>
                </StyleSheetManager>
            </AuthProvider>
        </ThemeProvider>
    </>
}