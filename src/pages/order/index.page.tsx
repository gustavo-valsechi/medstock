import React, { useState } from "react"
import { Table } from "../../components"
import { Container } from "./styles"
import { useRouter } from "next/router"
import Refactoring from "../../utils"

import { getOrders } from "../api/order"

import ModalCustomer from "./modal"

export default function Order({ orders }) {
  const router = useRouter()

  const [modal, setModal] = useState({ is: false, content: {} })
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState(orders)

  const fetch = async (page: number) => {
    setPage(page || 0)
    setLoading(true)

    const data = await getOrders({
      offset: page,
      order: { dhOperation: "DESC" }
    })

    setContent(data)
    setLoading(false)
  }

  const order = (data: any) => {
    setModal({
      is: true,
      content: data
    })
  }

  return (
    <Container>
      <ModalCustomer
        modal={{ value: modal, set: setModal }}
        fetch={() => fetch(0)}
      />
      <div className="templates-label">
        <span>Pedidos</span>
        <p>Crie pedidos de venda com facilidade e eficiência, enquanto gerencia seu caixa de forma rápida e descomplicada.</p>
      </div>
      <Table
        loading={router.isFallback}
        content={content?.content}
        paginate={{
          total: content?.totalPage,
          page: {
            value: page,
            set: fetch
          }
        }}
        notFound={{
          title: "Nenhum pedido encontrado",
          message: "Adicione um pedido de venda para aparecer algum registro"
        }}
        options={[
          {
            column: {
              action: {
                icon: "fa-solid fa-arrows-rotate",
                disabled: loading,
                function: () => fetch(0),
                position: "left"
              }
            },
            row: { image: { icon: "fa-solid fa-dollar-sign" } }
          },
          { column: "Número", row: { custom: (data) => `#${data.number}`, style: { fontWeight: 600 } } },
          { column: "Cliente", row: { name: "customer", style: { textTransform: "capitalize" } } },
          { column: "Produto", row: { name: "product", style: { textTransform: "capitalize" } } },
          { column: "Total", row: { name: "total", mask: Refactoring.format.money } },
          {
            column: { action: { icon: "fa-solid fa-plus", function: order } },
            row: { actions: [{ function: (data: any) => order(data) }] }
          },
        ]}
      />
    </Container>
  )
}

export async function getServerSideProps() {

  const orders = await getOrders({
    offset: 0,
    order: { name: "ASC" }
  }) || {}

  return { props: { orders } }
}