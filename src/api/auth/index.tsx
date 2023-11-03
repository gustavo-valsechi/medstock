import { api } from "../../services"
import { toast } from "react-hot-toast"
import _ from "lodash"

export async function login(credentials: any) {
    try {
        const token = Buffer.from(JSON.stringify(credentials)).toString("base64")

        localStorage.setItem("@Medstock:token", token)
        localStorage.setItem("@Medstock:user", JSON.stringify({
            id: 1,
            name: "gustavo valsechi de freitas",
            email: "gustavo@nummus.com.br",
            phone: "48999100598",
        }))

        return token
    } catch (error: any) {
        console.error(error)
        toast.success(error.message)
    }
}

export async function register(body: any) {
    try {
        console.log(body)
        toast.success("Conta cadastrada com sucesso!")
    } catch (error: any) {
        console.error(error)
        toast.success(error.message)
    }
}

export async function getUser() {
    try {
        return {
            id: 1,
            name: "gustavo valsechi de freitas",
            email: "gustavo@nummus.com.br",
            phone: "48999100598",
        }
    } catch (error: any) {
        console.error(error)
        toast.success(error.message)
    }
}