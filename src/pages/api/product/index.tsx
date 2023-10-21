import { api } from "../../../services"
import { toast } from "react-hot-toast"
import _ from "lodash"

export async function getProducts(credentials: any) {
    try {
        // const { data } = await api.get('product', { params: credentials })

        return {}
    } catch (error) {
        console.error(error)
        toast.success(error.message)
    }
}

export async function saveProduct(body: any) {
    try {
        const product = await api[body.uuid ? "put" : "post"]('product', _.omit(body, ['uuid']), { params: { uuid: body.uuid } })

        toast.success(`Produto ${body.uuid ? "atualizado" : "cadastrado"} com sucesso!`)

        return product
    } catch (error) {
        console.error(error)
        toast.success(error.message)
    }
}