import { api } from "../../../services"
import { toast } from "react-hot-toast"
import _ from "lodash"

export async function getCustomers(credentials: any) {
    try {
        // const { data } = await api.get("customer", { params: credentials })

        return {
            content: [
                { id: 1, name: "gustavo valsechi de freitas", email: "gustavo@nummus.com.br", phone: "48999100598", cpf: "09204942932" },
                { id: 2, name: "gustavo valsechi de freitas", email: "gustavo@nummus.com.br", phone: "48999100598", cpf: "09204942932" },
                { id: 3, name: "gustavo valsechi de freitas", email: "gustavo@nummus.com.br", phone: "48999100598", cpf: "09204942932" },
            ],
            total: 3,
            totalPage: 1,
        }
    } catch (error) {
        console.error(error)
        toast.success(error.message)
    }
}

export async function saveCustomer(body: any) {
    try {
        const { data } = await api[body.uuid ? "put" : "post"]("customer", _.omit(body, ["uuid"]), { params: { uuid: body.uuid } })

        toast.success(`Cliente ${body.uuid ? "atualizado" : "cadastrado"} com sucesso!`)

        return data
    } catch (error) {
        console.error(error)
        toast.success(error.message)
    }
}

export async function removeCustomer(uuid: string) {
    try {
        const { data } = await api.delete(`customer/${uuid}`)

        toast.success("Cliente removido com sucesso!")

        return data
    } catch (error) {
        console.error(error)
        toast.success(error.message)
    }
}