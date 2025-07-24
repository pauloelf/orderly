export type LinksProps = {
  first: string
  last: string
  prev: null | string
  next: null | string
}

export type MetaProps = {
  current_page: number
  from: number
  last_page: number
  links: Array<{
    url: string | null
    label: string
    active: boolean
    id?: number
  }>
  path: string
  per_page: number
  to: number
  total: number
}

export type ResponseProps = {
  links: LinksProps
  meta: MetaProps
  data: OrderProps[]
}

export type OrderProps = {
  id: number
  customer_name: string
  customer_email: string
  order_date: Date
  amount_in_cents: number
  status: 'pending' | 'completed'
  created_at: Date
  updated_at: Date
}
