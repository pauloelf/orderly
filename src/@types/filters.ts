export type FiltersProps = {
  page?: number
  sort?: 'created_at' | '-created_at' | 'amount_in_cents' | '-amount_in_cents'
  status?: '' | 'completed' | 'pending'
  search?: string
}
