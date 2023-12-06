import { api } from "../../services"
import { toast } from "react-hot-toast"
import _ from "lodash"

export async function login(credentials: any) {
    try {
        const { data } = await api.get("user")

        const user = _.find(data, (content) => content.senha === credentials.password)

        if (!user) throw new Error("E-mail ou senha inválida, tente novamente")

        const token = Buffer.from(JSON.stringify(credentials)).toString("base64")

        localStorage.setItem("@Medstock:token", token)
        localStorage.setItem("@Medstock:user", JSON.stringify(user))

        return token
    } catch (error: any) {
        console.error(error)
        toast.error(error.message)
    }
}

export async function register(body: any) {
    try {
        const { data } = await api.post("user", body)

        toast.success("Conta cadastrada com sucesso!")

        return data
    } catch (error: any) {
        console.error(error)
        toast.error(error.message)
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
        toast.error(error.message)
    }
}