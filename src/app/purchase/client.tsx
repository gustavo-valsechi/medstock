"use client"

import React, { useState } from "react"
import { Table } from "../../components"
import { Container } from "./styles"
import Refactoring from "../../utils"

import { getPurchases } from "@/api/purchase"

import ModalCustomer from "./modal"

export default function PurchaseClient({ data }: any) {

  const [modal, setModal] = useState({ is: false, content: {} })
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState(data)

  const fetch = async (page: number) => {
    setPage(page || 0)
    setLoading(true)

    const data = await getPurchases({
      offset: page,
      purchase: { dhOperation: "DESC" }
    })

    setContent(data)
    setLoading(false)
  }

  const purchase = (data: any) => {
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
        <span>Compras</span>
        <p>Execute pedidos de compra para adicionar novos produtos no seu estoque de forma simples.</p>
      </div>
      <Table
        loading={loading}
        content={content?.content}
        paginate={{
          total: content?.totalPages,
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
                icon: `fa-solid fa-arrows-rotate ${loading ? "fa-spin" : ""}`,
                disabled: loading,
                function: () => fetch(0),
                position: "left"
              }
            },
            row: { image: { icon: "fa-solid fa-dollar-sign" } }
          },
          { column: "Número", row: { custom: (data) => `#${data.number}`, style: { fontWeight: 600 } } },
          { column: "Fornecedor", row: { name: "customer", style: { textTransform: "capitalize" } } },
          { column: "Produto", row: { name: "product", style: { textTransform: "capitalize" } } },
          { column: "Total", row: { name: "total", mask: Refactoring.format.money } },
          {
            column: {
              action: {
                label: "Novo pedido",
                icon: "fa-solid fa-plus",
                function: purchase,
              }
            },
            row: { actions: [{ function: (data: any) => purchase(data) }] }
          },
        ]}
      />
    </Container>
  )
}