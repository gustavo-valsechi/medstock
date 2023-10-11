import { api } from "../../../services"
import _ from "lodash"

export async function getSuppliers(credentials: any) {
    try {
        // const { data } = await api.get('supplier', { params: credentials })

        return {}
    } catch (error) {
        console.error(error)
    }
}

export async function saveSupplier(body: any) {
    try {
        return await api.post('supplier', _.omit(body, ['uuid']), { params: { uuid: body.uuid } })
    } catch (error) {
        console.error(error)
    }
}