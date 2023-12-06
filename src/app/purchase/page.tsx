import { getPurchases } from "@/api/purchase"

import Client from "./client"

export default async function PurchaseServer() {

    const purchases = await getPurchases({
        offset: 0,
        purchase: { name: "ASC" }
    }) || {}

    return <Client data={purchases} />
}