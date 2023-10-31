import { getCustomers } from "@/api/customer"

import Client from "./client"

export default async function CustomerServer() {

    const customers = await getCustomers({
        offset: 0,
        order: { name: "ASC" }
    }) || {}

    return <Client data={customers} />
}