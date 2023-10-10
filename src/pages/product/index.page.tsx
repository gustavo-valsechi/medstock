import React, { useState } from 'react'
import { Table } from '../../components'
import { Container } from './styles'
import { useRouter } from 'next/router'
import Refactoring from '../../utils'

import { getCustomers } from '../api/customer'

import ModalCustomer from './modal'

export default function Product({ customers }) {
  const router = useRouter()

  const [modal, setModal] = useState({ is: false, content: {} })
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState(customers)

  const phone = (value: string) => Refactoring.mask.phone(value)

  const fetch = async (page: number) => {
    setPage(page || 0)
    setLoading(true)

    const data = await getCustomers({
      offset: page,
      order: { dhOperation: 'DESC' }
    })

    setContent(data)
    setLoading(false)
  }

  const customer = (data: any) => {
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
      <div className='templates-label'>
        <span>Produtos</span>
        <p>Todos os seus clientes e seus dados serão listados nesta página, na qual você poderá adicionar novos clientes ou atualizar as informações existentes.</p>
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
          title: 'Nenhum cliente encontrado',
          message: 'Adicione um cliente para aparecer algum registro'
        }}
        options={[
          {
            column: {
              action: {
                icon: 'fa-solid fa-arrows-rotate',
                disabled: loading,
                function: () => fetch(0),
                position: "left"
              }
            },
            row: { image: (data: any) => data.photo }
          },
          { column: 'Nome', row: { name: 'name', style: { fontWeight: 600 } } },
          { column: 'Telefone', row: { name: 'phone', mask: phone } },
          { column: 'E-mail', row: 'email' },
          { column: 'Grupo', row: 'group' },
          {
            column: { action: { icon: 'fa-solid fa-plus', function: customer } },
            row: { actions: [{ icon: 'fa-solid fa-pen-to-square', function: (data: any) => customer(data) }] }
          },
        ]}
      />
    </Container>
  )
}

export async function getServerSideProps() {

  const customers = await getCustomers({
    offset: 0,
    order: { name: 'ASC' }
  }) || {}

  return { props: { customers } }
}