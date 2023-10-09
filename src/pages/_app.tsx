import type { AppProps } from 'next/app'
import { GlobalStyle } from './_globals'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
    return <>
        <Head>
            <link rel="shortcut icon" href="/src/assets/favicon/favicon.ico" />

            <title>Calendle</title>
            <meta name="author" content="Calendle" />
            <meta name="description" content="Calendle - Agendamento de clientes" />
            <meta name="keyword" content="Whatsapp, Marketing, envios em masssa" />

            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
    </>
}