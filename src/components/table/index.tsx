"use client"

import React from "react"
import { Container } from "./styles"
import { LoadingBar } from "../loading/bar"
import { Paginate } from "./paginate"
import Refactoring from "../../utils"
import Image from "next/image"
import _ from "lodash"

interface IColumn {
  style?: object
  action?: {
    disabled?: boolean
    position?: string
    function: (data?: any) => void
    icon?: string
  }
}

interface IRow {
  actions?: Array<{
    disabled?: boolean
    position?: string
    function: (data?: any) => void
    icon?: string
  }>
  image?: {
    value?: (data: any) => void
    icon?: string
  } | ((data: any) => void)
  style?: object
  mask?: (data: any) => void
  custom?: (data: any) => void
  name?: string
}

interface ITable {
  content: Array<any>
  loading?: boolean | {
    is?: boolean
    items?: Array<any>
  }
  options: Array<{
    column: IColumn | string
    row: IRow | string
  }>
  notFound?: {
    title: string
    message: string
  }
  paginate?: {
    total: number
    page: {
      value: number
      set: (value: number) => void
    }
  }
}

export function Table(props: ITable) {

  const limit = (value: string) => Refactoring.format.stringLimit(String(value), 30)

  return (
    <Container notFound={!props.content?.length && !props.loading}>
      <div className="table-content">
        <table>
          <thead>
            <tr>
              {_.map(props.options, (option, index: number) =>
                <th key={index} style={(option.column as { style: object })?.style}>
                  <div
                    className={`table-temp ${(option.column as { action: object })?.action
                      ? `action ${(option.column as { action: { position: string } })?.action?.position
                        ? (option.column as { action: { position: string } })?.action?.position
                        : ""}`
                      : ""}`
                    }
                  >
                    {!!(option.column as { action: object })?.action
                      ? <button
                        className="button"
                        onClick={(option.column as { action: { function: (data?: any) => void } })?.action?.function}
                        disabled={(option.column as { action: { disabled: boolean } })?.action?.disabled}
                      >
                        <i className={(option.column as { action: { icon: string } })?.action?.icon || "fa-solid fa-eye"} />
                      </button>
                      : _.isString(option.column) ? option.column : ""}
                  </div>
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {(props.loading as { is: boolean })?.is || props.loading
              ? _.map((props.loading as { items: Array<any> })?.items || [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (data, key: number) =>
                <tr key={key}>
                  {_.map(props.options, (data, index: number) => (
                    <td key={index}>
                      <LoadingBar
                        height="2.5rem"
                        borderRadius={
                          index === 0
                            ? "30px 0 0 30px"
                            : props.options?.length - 1 === index
                              ? "0 30px 30px 0"
                              : "0"
                        }
                        margin={key === 0 ? "1.5rem 0 0" : ".5rem 0 0"}
                      />
                    </td>
                  ))}
                </tr>)
              : _.map(props.content, (data, key) =>
                <tr key={key}>
                  {_.map(props.options, (option, index) => (
                    <td key={index}>
                      <div
                        className={`
                          table-temp 
                          ${(option.row as { actions: Array<any> })?.actions ? "action" : ""} 
                          ${(option.row as { image: any })?.image ? "image" : ""}
                        `}
                        style={(option.row as { style: object })?.style}
                      >
                        {!!(option.row as { actions: Array<any> })?.actions
                          ? <div className="actions">
                            {_.map((option.row as { actions: Array<any> })?.actions, (action, index) =>
                              <button
                                key={index}
                                className={`
                                  button
                                  ${_.includes(action.icon, "trash") ? "negative" : ""} 
                                `}
                                onClick={() => action.function ? action.function(data) : null}
                                disabled={action.disabled}
                              >
                                <i className={action.icon || "fa-solid fa-eye"} />
                              </button>)}
                          </div>
                          : (option.row as { image: any })?.image
                            ? <div className="avatar">
                              {!!(option.row as { image: { value: (data: any) => React.ReactNode } })?.image?.value
                                ? (option.row as { image: { value: (data: any) => React.ReactNode } })?.image?.value(data)
                                : !!_.isFunction((option.row as { image: (data: any) => React.ReactNode })?.image)
                                  ? (option.row as { image: (data: any) => React.ReactNode })?.image(data)
                                  : false
                                    ? <Image
                                      src={!!(option.row as { image: { value: (data: any) => string } })?.image?.value
                                        ? (option.row as { image: { value: (data: any) => string } })?.image?.value(data)
                                        : (option.row as { image: (data: any) => string })?.image(data)}
                                      alt=""
                                    />
                                    : <i className={(option.row as { image: { icon: string } })?.image?.icon || "fa-solid fa-circle-user"} />}
                            </div>
                            : <div className="row-content">
                              {!!(option.row as { mask: (data: any) => React.ReactNode })?.mask
                                ? (option.row as { mask: (data: any) => React.ReactNode })?.mask(data[(option.row as { name: string })?.name]) || "---"
                                : !!(option.row as { custom: (data: any) => React.ReactNode })?.custom
                                  ? (option.row as { custom: (data: any) => React.ReactNode })?.custom(data[(option.row as { name: string })?.name] || data)
                                  : !!data[(option.row as { name: string })?.name || (option.row as string)]
                                    ? limit(data[(option.row as { name: string })?.name || (option.row as string)])
                                    : "---"}
                            </div>}
                      </div>
                    </td>
                  ))}
                </tr>)}
          </tbody>
        </table>
      </div>
      {!props.content?.length && !props.loading && (
        <div className="not-found">
          <p>{props.notFound?.title || "Nenhuma campanha encontrado"}</p>
          <p>{props.notFound?.message || "Envie uma campanha de marketing para aparecer algum registro"}</p>
        </div>
      )}
      {!!props.paginate && <Paginate {...props.paginate} />}
    </Container>
  )
}