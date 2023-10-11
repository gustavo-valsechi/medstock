"use client"

import React from "react"
import { ServerStyleSheet, StyleSheetManager } from "styled-components"
import { useServerInsertedHTML } from "next/navigation"

function useStyledComponentsRegistry() {
    const [styledComponentsStyleSheet] = React.useState(() => new ServerStyleSheet())

    const styledComponentsFlushEffect = () => {
        const styles = styledComponentsStyleSheet.getStyleElement()
        styledComponentsStyleSheet.seal()
        return <>{styles}</>
    }

    const StyledComponentsRegistry = ({ children }: { children: JSX.Element }) => (
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
            {children as React.ReactElement}
        </StyleSheetManager>
    )

    return [StyledComponentsRegistry, styledComponentsFlushEffect] as const
}

export function RootStyleRegistry({ children }: { children: React.ReactElement }) {
    const [StyledComponentsRegistry, styledComponentsFlushEffect] = useStyledComponentsRegistry()

    useServerInsertedHTML(() => {
        return <>{styledComponentsFlushEffect()}</>
    })

    return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
}