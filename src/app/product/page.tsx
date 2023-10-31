import { getProducts } from "@/api/product"

import Client from "./client"

export default async function ProductServer() {

    const products = await getProducts({
        offset: 0,
        order: { name: "ASC" }
    }) || {}

    return <Client data={products} />
}