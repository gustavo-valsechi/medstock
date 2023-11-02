import { api } from "../../services"
import { toast } from "react-hot-toast"
import _ from "lodash"

export async function getProducts(credentials: any) {
    try {
        // const { data } = await api.get("product", { params: credentials })

        return {
            content: [
                { id: 1, name: "tilenol", category: "primária", value: 89.99, stock: 47 },
                { id: 2, name: "tilenol", category: "secundária", value: 59.99, stock: 23 },
                { id: 3, name: "tilenol", category: "terciária", value: 29.99, stock: 86 },
            ],
            total: 3,
            totalPages: 1,
        }
    } catch (error: any) {
        console.error(error)
    }
}

export async function saveProduct(body: any) {
    try {
        const { data } = await api[body.uuid ? "put" : "post"]("product", _.omit(body, ["uuid"]), { params: { uuid: body.uuid } })

        toast.success(`Produto ${body.uuid ? "atualizado" : "cadastrado"} com sucesso!`)

        return data
    } catch (error: any) {
        console.error(error)
        toast.success(error.message)
    }
}

export async function removeProduct(uuid: string) {
    try {
        const { data } = await api.delete(`product/${uuid}`)

        toast.success("Produto removido com sucesso!")

        return data
    } catch (error: any) {
        console.error(error)
        toast.success(error.message)
    }
}