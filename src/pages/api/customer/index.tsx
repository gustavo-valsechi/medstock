import { api } from "../../../services"
import { toast } from "react-hot-toast"
import _ from "lodash"

export async function getCustomers(credentials: any) {
    try {
        // const { data } = await api.get('customer', { params: credentials })

        return {}
    } catch (error) {
        console.error(error)
        toast.success(error.message)
    }
}

export async function saveCustomer(body: any) {
    try {
        const customer = await api[body.uuid ? "put" : "post"]('customer', _.omit(body, ['uuid']), { params: { uuid: body.uuid } })

        toast.success(`Cliente ${body.uuid ? "atualizado" : "cadastrado"} com sucesso!`)

        return customer
    } catch (error) {
        console.error(error)
        toast.success(error.message)
    }
}