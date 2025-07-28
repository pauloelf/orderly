export type FiltersProps = {
  page?: number
  sort?:
    | 'customer_name'
    | '-customer_name'
    | 'order_date'
    | '-order_date'
    | 'amount_in_cents'
    | '-amount_in_cents'
    | ''
  status?: '' | 'completed' | 'pending'
  search?: string
}
