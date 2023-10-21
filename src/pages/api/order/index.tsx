import { api } from "../../../services"
import { toast } from "react-hot-toast"
import _ from "lodash"

export async function getOrders(credentials: any) {
    try {
        // const { data } = await api.get('order', { params: credentials })

        return {}
    } catch (error) {
        console.error(error)
        toast.success(error.message)
    }
}

export async function saveOrder(body: any) {
    try {
        const order = await api.post('order', _.omit(body, ['uuid']), { params: { uuid: body.uuid } })

        toast.success("Pedido registrado com sucesso!")

        return order
    } catch (error) {
        console.error(error)
        toast.success(error.message)
    }
}