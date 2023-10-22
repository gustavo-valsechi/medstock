import { api } from "../../../services"
import { toast } from "react-hot-toast"
import _ from "lodash"

export async function getSuppliers(credentials: any) {
    try {
        // const { data } = await api.get("supplier", { params: credentials })

        return {
            content: [
                { id: 1, name: "Medisul", email: "gustavo@nummus.com.br", phone: "48999100598", cnpj: "09204942932000" },
                { id: 2, name: "Medisul", email: "gustavo@nummus.com.br", phone: "48999100598", cnpj: "09204942932000" },
                { id: 3, name: "Medisul", email: "gustavo@nummus.com.br", phone: "48999100598", cnpj: "09204942932000" },
            ],
            total: 3,
            totalPage: 1,
        }
    } catch (error) {
        console.error(error)
        toast.success(error.message)
    }
}

export async function saveSupplier(body: any) {
    try {
        const { data } = await api[body.uuid ? "put" : "post"]("supplier", _.omit(body, ["uuid"]), { params: { uuid: body.uuid } })

        toast.success(`Fornecedor ${body.uuid ? "atualizado" : "cadastrado"} com sucesso!`)

        return data
    } catch (error) {
        console.error(error)
        toast.success(error.message)
    }
}

export async function removeSupplier(uuid: string) {
    try {
        const { data } = await api.delete(`supplier/${uuid}`)

        toast.success("Fornecedor removido com sucesso!")

        return data
    } catch (error) {
        console.error(error)
        toast.success(error.message)
    }
}