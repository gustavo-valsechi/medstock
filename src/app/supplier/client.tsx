"use client"

import React, { useState } from "react"
import { Table } from "../../components"
import { Container } from "./styles"
import Refactoring from "../../utils"

import { getSuppliers } from "@/api/supplier"

import ModalCustomer from "./modal"

export default function SupplierClient({ data }: any) {

  const [modal, setModal] = useState({ is: false, content: {} })
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState(data)

  const fetch = async (page: number) => {
    setPage(page || 0)
    setLoading(true)

    const data = await getSuppliers({
      offset: page,
      order: { dhOperation: "DESC" }
    })

    setContent(data)
    setLoading(false)
  }

  const setSupplier = (data: any) => {
    setModal({
      is: true,
      content: data
    })
  }

  const removeSupplier = (data: any) => {
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
        <span>Fornecedores</span>
        <p>Aprimore o reabastecimento do seu estoque ao incluir os fornecedores dos seus produtos.</p>
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
          title: "Nenhum fornecedor encontrado",
          message: "Adicione um fornecedor para aparecer algum registro"
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
            row: { image: { icon: "fa-solid fa-building" } }
          },
          { column: "Nome", row: { name: "name", style: { fontWeight: 600, textTransform: "capitalize" } } },
          { column: "CNPJ", row: { name: "cnpj", mask: Refactoring.mask.docNumber } },
          { column: "Telefone", row: { name: "phone", mask: Refactoring.mask.phone } },
          { column: "E-mail", row: "email" },
          {
            column: { style: { width: "2.3rem" } },
            row: { actions: [{ icon: "fa-solid fa-pen-to-square", function: (data: any) => setSupplier(data) }] }
          },
          {
            column: { action: { icon: "fa-solid fa-plus", function: setSupplier }, style: { width: "2.3rem" } },
            row: { actions: [{ icon: "fa-solid fa-trash-can", function: (data: any) => removeSupplier(data) }] }
          },
        ]}
      />
    </Container>
  )
}