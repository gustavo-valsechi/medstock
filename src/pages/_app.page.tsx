import React, { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { GlobalStyle } from './_globals.styles'
import { ThemeProvider } from '@/contexts/theme'
import { AuthProvider } from '@/contexts/auth'
import { StyleSheetManager } from 'styled-components'
import { LoadingPage } from '@/components'
import { Toaster } from 'react-hot-toast'
import isPropValid from "@emotion/is-prop-valid"
import Head from 'next/head'
import _ from 'lodash'

import "../components/loading/page/styles.css"

import Container from "@/container"

export default function App({ Component, pageProps }: AppProps) {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/src/assets/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/src/assets/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/src/assets/favicon-16x16.png" />
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
                    <StyleSheetManager
                        enableVendorPrefixes
                        shouldForwardProp={(propName, elementToBeRendered) => {
                            return typeof elementToBeRendered === "string"
                                ? isPropValid(propName) && !["height", "width"].includes(propName)
                                : true;
                        }}
                    >
                        {!!loading && <LoadingPage />}
                        <GlobalStyle />
                        <Container>
                            <Component {...pageProps} />
                        </Container>
                        <Toaster
                            position="top-center"
                            reverseOrder={false}
                            containerStyle={{ fontSize: ".85rem", fontWeight: "500" }}
                        />
                    </StyleSheetManager>
                </AuthProvider>
            </ThemeProvider>
        </>
    )
}