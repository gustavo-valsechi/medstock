import { api } from "../../services"
import { toast } from "react-hot-toast"
import _ from "lodash"

export async function getCustomers(credentials: any) {
    try {
        const { data } = await api.get("client")

        console.log(data)

        return {
            content: [
                { id: 1, name: "gustavo valsechi de freitas", email: "gustavo@nummus.com.br", phone: "48999100598", cpf: "09204942932" },
                { id: 2, name: "gustavo valsechi de freitas", email: "gustavo@nummus.com.br", phone: "48999100598", cpf: "09204942932" },
                { id: 3, name: "gustavo valsechi de freitas", email: "gustavo@nummus.com.br", phone: "48999100598", cpf: "09204942932" },
            ],
            total: 3,
            totalPages: 1,
        }
    } catch (error: any) {
        console.error(error)
    }
}

export async function saveCustomer(body: any) {
    try {

        const req: any = {
            "true": { method: "put", url: `client/${body.id}` },
            "false": { method: "post", url: "client" },
        }

        const method = req[String(!!body.id)].method
        const url = req[String(!!body.id)].url

        const { data } = await (api as any)[method](url, _.omit(body, ["id"]))

        toast.success(`Cliente ${body.uuid ? "atualizado" : "cadastrado"} com sucesso!`)

        return data
    } catch (error: any) {
        console.error(error)
        toast.error(error.message)
    }
}

export async function removeCustomer(uuid: string) {
    try {
        const { data } = await api.delete(`client/${uuid}`)

        toast.success("Cliente removido com sucesso!")

        return data
    } catch (error: any) {
        console.error(error)
        toast.error(error.message)
    }
}