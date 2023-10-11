import { api } from "../../../services"
import _ from "lodash"

export async function getProducts(credentials: any) {
    try {
        // const { data } = await api.get('product', { params: credentials })

        return {}
    } catch (error) {
        console.error(error)
    }
}

export async function saveProduct(body: any) {
    try {
        return await api.post('product', _.omit(body, ['uuid']), { params: { uuid: body.uuid } })
    } catch (error) {
        console.error(error)
    }
}