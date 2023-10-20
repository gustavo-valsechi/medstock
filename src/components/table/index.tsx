import React, { useRef, useState } from "react"
import { Container } from "./styles"
import { Loading } from "../loading-bar"
import { Paginate } from "./paginate"
import Refactoring from "../../utils"
import Image from "next/image"
import _ from "lodash"

interface IColumn {
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
  image?: (data: any) => void | {
    value?: (data: any) => void
    icon?: string
  }
  style?: object
  mask?: (data: any) => void
  custom?: (data: any) => void
  name?: string
}

interface ITable {
  content: Array<any>
  loading: boolean | {
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

  const limit = (value: string) => Refactoring.format.stringLimit(value, 30)

  return (
    <Container notFound={!props.content?.length && !props.loading}>
      <div className="table-content">
        <table>
          <thead>
            <tr>
              {_.map(props.options, (option, index: number) =>
                <th key={index}>
                  <div
                    className={`table-temp ${option.column?.["action"]
                      ? `action ${option.column?.["action"]?.position
                        ? option.column?.["action"]?.position
                        : ""}`
                      : ""}`
                    }
                  >
                    {!!option.row?.["actions"]
                      ? <button
                        className="button"
                        onClick={option.column?.["action"]?.function}
                        disabled={option.column?.["action"]?.disabled}
                      >
                        <i className={option.column?.["action"]?.icon || 'fa-solid fa-eye'} />
                      </button>
                      : _.isString(option.column) ? option.column : ""}
                  </div>
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {props.loading?.["is"] || props.loading
              ? _.map(props.loading?.["items"] || [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (data, key: number) =>
                <tr key={key}>
                  {_.map(props.options, (data, index: number) => (
                    <td key={index}>
                      <Loading
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
                          ${option.row?.["actions"] ? "action" : ""} 
                          ${option.row?.["image"] ? "image" : ""}
                        `}
                        style={option.row?.["style"]}
                      >
                        {!!option.row?.["actions"]
                          ? <div className="actions">
                            {_.map(option.row?.["actions"], (action, index) =>
                              <button
                                key={index}
                                className={`
                                  button
                                  ${_.includes(action.icon, 'trash') ? "negative" : ""} 
                                `}
                                onClick={() => action.function ? action.function(data) : null}
                                disabled={action.disabled}
                              >
                                <i className={action.icon || 'fa-solid fa-eye'} />
                              </button>)}
                          </div>
                          : option.row?.["image"]
                            ? <div className="avatar">
                              {option.row?.["image"]?.value ? option.row?.["image"]?.value(data) : option.row?.["image"](data)
                                ? <Image
                                  src={option.row?.["image"]?.value ? option.row?.["image"]?.value(data) : option.row?.["image"](data)}
                                  alt=""
                                />
                                : <i className={option.row?.["image"]?.icon || "fa-solid fa-circle-user"} />}
                            </div>
                            : <div className="row-content">
                              {option.row?.["mask"]
                                ? option.row?.["mask"](data[option.row?.["name"]]) || "---"
                                : option.row?.["custom"]
                                  ? option.row?.["custom"](data[option.row?.["name"]] || data)
                                  : data[option.row?.["name"] || option.row]
                                    ? limit(data[option.row?.["name"] || option.row])
                                    : '---'}
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