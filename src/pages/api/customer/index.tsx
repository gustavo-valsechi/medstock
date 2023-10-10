import { api } from "../../../services"
import _ from "lodash"

export async function getCustomers(credentials: any) {
    try {
        // const { data } = await api.get('customer', { params: credentials })

        return {}
    } catch (error) {
        console.error(error)
    }
}

export async function saveCustomer(body: any) {
    try {
        return await api.post('customer', _.omit(body, ['uuid']), { params: { uuid: body.uuid } })
    } catch (error) {
        console.error(error)
    }
}