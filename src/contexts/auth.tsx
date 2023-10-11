import React, { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import _ from 'lodash'

const AuthContext = createContext<any>({})

export const AuthProvider = ({ children }) => {
    const router = useRouter()

    const [token, setToken] = useState("")

    useEffect(() => {
        const tokenStorage = localStorage.getItem("@Medstock:token")

        if (!tokenStorage) {
            router.push("/auth/login")
            return
        }

        if (!token) setToken(tokenStorage)

        if (_.includes(router.route, "auth")) router.push("/order")
        // eslint-disable-next-line
    }, [token])

    const logout = () => {
        localStorage.removeItem("@Medstock:token")
        setToken("")
        router.push("/auth/login")
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: !!token,
                token,
                setToken,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)