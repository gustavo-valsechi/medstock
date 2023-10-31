"use client"

import React, { useState } from "react"
import { useServerInsertedHTML } from "next/navigation"
import { ServerStyleSheet, StyleSheetManager } from "styled-components"
import isPropValid from "@emotion/is-prop-valid"

export default function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {

    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement()
        styledComponentsStyleSheet.instance.clearTag()
        return <>{styles}</>
    })

    const menager = (sheet?: any) => {
        return <StyleSheetManager
            sheet={sheet}
            enableVendorPrefixes
            shouldForwardProp={(propName, elementToBeRendered) => {
                return typeof elementToBeRendered === "string"
                    ? isPropValid(propName) && !["height", "width"].includes(propName)
                    : true;
            }}
        >
            {children}
        </StyleSheetManager>
    }

    if (typeof window !== "undefined") return menager()

    return menager(styledComponentsStyleSheet.instance)
}
