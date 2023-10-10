import { api } from "../../../services"
import _ from "lodash"

export async function login(credentials: any) {
    try {
        const token = Buffer.from(JSON.stringify(credentials)).toString("base64")

        localStorage.setItem("@Medstock:token", token)

        return token
    } catch (error) {
        console.error(error)
    }
}