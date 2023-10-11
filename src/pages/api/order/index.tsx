import { api } from "../../../services"
import _ from "lodash"

export async function getOrders(credentials: any) {
    try {
        // const { data } = await api.get('order', { params: credentials })

        return {}
    } catch (error) {
        console.error(error)
    }
}

export async function saveOrder(body: any) {
    try {
        return await api.post('order', _.omit(body, ['uuid']), { params: { uuid: body.uuid } })
    } catch (error) {
        console.error(error)
    }
}