import { api } from "../../../services"
import { toast } from "react-hot-toast"
import _ from "lodash"

export async function getSuppliers(credentials: any) {
    try {
        // const { data } = await api.get('supplier', { params: credentials })

        return {}
    } catch (error) {
        console.error(error)
        toast.success(error.message)
    }
}

export async function saveSupplier(body: any) {
    try {
        const supplier = await api[body.uuid ? "put" : "post"]('supplier', _.omit(body, ['uuid']), { params: { uuid: body.uuid } })

        toast.success(`Fornecedor ${body.uuid ? "atualizado" : "cadastrado"} com sucesso!`)

        return supplier
    } catch (error) {
        console.error(error)
        toast.success(error.message)
    }
}