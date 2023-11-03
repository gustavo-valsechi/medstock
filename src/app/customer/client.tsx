"use client"

import React, { useState } from "react"
import { Table } from "../../components"
import { Container } from "./styles"
import Refactoring from "../../utils"

import { getCustomers } from "@/api/customer"

import ModalCustomer from "./modal"

export default function CustomerClient({ data }: any) {

  const [modal, setModal] = useState({ is: false, content: {} })
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState(data)

  const fetch = async (page: number) => {
    setPage(page || 0)
    setLoading(true)

    const data = await getCustomers({
      offset: page,
      order: { dhOperation: "DESC" }
    })

    setContent(data)
    setLoading(false)
  }

  const setCustomer = (data: any) => {
    setModal({
      is: true,
      content: data
    })
  }

  const removeCustomer = (data: any) => {
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
        <span>Clientes</span>
        <p>Fidelize seus clientes cadastrando-os na plataforma. Com os contatos salvos, a comunicação futura torna-se mais fácil e eficaz, fortalecendo assim o relacionamento com sua clientela.</p>
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
          title: "Nenhum cliente encontrado",
          message: "Adicione um cliente para aparecer algum registro"
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
            row: { image: { icon: "fa-solid fa-user" } }
          },
          { column: "Nome", row: { name: "name", style: { fontWeight: 600, textTransform: "capitalize" } } },
          { column: "CPF", row: { name: "cpf", mask: Refactoring.mask.docNumber } },
          { column: "Telefone", row: { name: "phone", mask: Refactoring.mask.phone } },
          { column: "E-mail", row: "email" },
          {
            column: { style: { width: "2.3rem" } },
            row: { actions: [{ icon: "fa-solid fa-pen-to-square", function: (data: any) => setCustomer(data) }] }
          },
          {
            column: { action: { icon: "fa-solid fa-plus", function: setCustomer }, style: { width: "2.3rem" } },
            row: { actions: [{ icon: "fa-solid fa-trash-can", function: (data: any) => removeCustomer(data) }] }
          },
        ]}
      />
    </Container>
  )
}