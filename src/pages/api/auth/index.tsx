import { api } from "../../../services"
import { toast } from "react-hot-toast"
import _ from "lodash"

export async function login(credentials: any) {
    try {
        const token = Buffer.from(JSON.stringify(credentials)).toString("base64")

        localStorage.setItem("@Medstock:token", token)

        return token
    } catch (error) {
        console.error(error)
        toast.success(error.message)
    }
}

export async function register(body: any) {
    try {
        toast.success("Conta cadastrada com sucesso!")
    } catch (error) {
        console.error(error)
        toast.success(error.message)
    }
}