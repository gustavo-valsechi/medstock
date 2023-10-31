import { getOrders } from "@/api/order"

import Client from "./client"

export default async function OrderServer() {

    const orders = await getOrders({
        offset: 0,
        order: { name: "ASC" }
    }) || {}

    return <Client data={orders} />
}