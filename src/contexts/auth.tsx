import React, { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/router"
import _ from "lodash"

const AuthContext = createContext<any>({})

export const AuthProvider = ({ children }) => {
    const router = useRouter()

    const [token, setToken] = useState("")
    const [user, setUser] = useState<any>({})

    useEffect(() => {
        const tokenStorage = localStorage.getItem("@Medstock:token")
        const userStorage = localStorage.getItem("@Medstock:user")

        if (!tokenStorage) {
            router.push("/auth/login")
            return
        }

        if (!token) setToken(tokenStorage)
        if (!user.id) setUser(userStorage ? JSON.parse(userStorage) : {})

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
                user,
                setUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)