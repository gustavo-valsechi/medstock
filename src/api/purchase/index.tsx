import { api } from "../../services"
import { toast } from "react-hot-toast"
import _ from "lodash"

export async function getPurchases(credentials: any) {
    try {
        // const { data } = await api.get("order", { params: credentials })

        // await new Promise((resolve) => setTimeout(resolve, 3000))

        return {
            content: [
                { id: 1, number: 1, customer: "gustavo valsechi de freitas", product: "tilenol", total: 345.98 },
                { id: 2, number: 2, customer: "gustavo valsechi de freitas", product: "tilenol", total: 59.99 },
                { id: 3, number: 3, customer: "gustavo valsechi de freitas", product: "tilenol", total: 227.50 },
            ],
            total: 3,
            totalPages: 1,
        }
    } catch (error: any) {
        console.error(error)
    }
}

export async function savePurchase(body: any) {
    try {
        console.log(body)

        const { data } = await api.post("order", _.omit(body, ["uuid"]), { params: { uuid: body.uuid } })

        toast.success("Pedido registrado com sucesso!")

        return data
    } catch (error: any) {
        console.error(error)
        toast.error(error.message)
    }
}