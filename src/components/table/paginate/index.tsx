import React from "react"
import { Container } from "./styles"
import _ from "lodash"

interface IPaginate {
    total: number
    page: {
        value: number
        set: (value: number) => void
    }
}

export function Paginate(props: IPaginate) {

    const pages = () => {

        const offset = Number(props.page.value) - 4

        let page: number = offset > 0 ? offset + 1 : 1
        let pages: Array<any> = []

        while (Number(props.total) >= page) {
            pages.push(page)
            page++
        }

        pages = _.slice(pages, 0, 5)

        if ((Number(props.page.value) + 1) > 5) pages = _.concat(['1..'], pages)

        if (Number(props.total) > 6 && (Number(props.page.value) + 1) < Number(props.total)) return _.concat(pages, `..${props.total}`)

        return pages
    }

    return Number(props.total) > 1 && (
        <Container>
            <div
                className="paginate back"
                onClick={() => props.page.set
                    ? props.page.set(
                        props.page.value
                            ? props.page.value - 1
                            : props.page.value
                    )
                    : null
                }
            >
                <i className="fa-solid fa-chevron-left" />
            </div>
            {_.map(pages(), (page, index) =>
                <div
                    key={index}
                    className="paginate page"
                    data-current={String(props.page.value === (Number(_.replace(page, /\D/g, '')) - 1))}
                    onClick={() => props.page.set ? props.page.set(Number(_.replace(page, /\D/g, '')) - 1) : null}
                >
                    {page}
                </div>
            )}
            <div
                className="paginate next"
                onClick={() => props.page.set
                    ? props.page.set(
                        props.page.value !== (props.total - 1)
                            ? props.page.value + 1
                            : props.page.value
                    )
                    : null
                }
            >
                <i className="fa-solid fa-chevron-right" />
            </div>
        </Container>
    )
}