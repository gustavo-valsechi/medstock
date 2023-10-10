import React, { createContext, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
// import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'

// import { authenticationSuccess, setUser } from '../store/actions/auth'

const AuthContext = createContext<any>({})

export const AuthProvider = ({ children }) => {
    // const dispatch = useDispatch()
    const router = useRouter()

    // const { token, user } = useSelector((state: any) => state.auth)

    // useEffect(() => {
    //     const tokenStorage = localStorage.getItem("@Medstock:token")
    //     const userStorage = localStorage.getItem("@Medstock:user")

    //     if (!tokenStorage) {
    //         router.push("/auth/login")
    //         return
    //     }

    //     // if (!token) dispatch(authenticationSuccess(tokenStorage))
    //     // if (!user.name) dispatch(setUser(JSON.parse(userStorage) || {}))

    //     if (_.includes(router.route, "auth")) router.push("/focus")
    // }, [token])

    const logout = () => {
        localStorage.removeItem("@Medstock:token")
        localStorage.removeItem("@Medstock:user")
        // dispatch(authenticationSuccess(""))
        router.push("/auth/login")
    }

    return (
        <AuthContext.Provider
            value={{
                // isAuthenticated: !!token, 
                // token, logout, 
                // user 
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)