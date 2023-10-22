import { Html, Head, Main, NextScript } from "next/document"
import { RootStyleRegistry } from "@/tools"

export default function Document() {
    return (
        <Html>
            <Head>
                <script src="https://kit.fontawesome.com/be0d0071ae.js" crossOrigin="anonymous" async />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <RootStyleRegistry>
                    <>
                        <Main />
                        <NextScript />
                    </>
                </RootStyleRegistry>
            </body>
        </Html>
    )
}