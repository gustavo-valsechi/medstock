import { getSuppliers } from "@/api/supplier"

import Client from "./client"

export default async function SupplierServer() {

    const suppliers = await getSuppliers({
        offset: 0,
        order: { name: "ASC" }
    }) || {}

    return <Client data={suppliers} />
}