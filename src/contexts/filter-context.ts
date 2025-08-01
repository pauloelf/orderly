import { createContext } from 'react'
import type { FiltersProps } from '@/@types'

type FilterContextType = {
  filters: FiltersProps
  setFilters: (newFilters: Partial<FiltersProps>) => void
}

export const DEFAULT_FILTERS: FiltersProps = {
  page: 1,
  sort: 'id',
  status: '',
  search: '',
}

const DEFAULT_VALUES: FilterContextType = {
  filters: DEFAULT_FILTERS,
  setFilters: () => null,
}

export const FilterContext = createContext<FilterContextType>(DEFAULT_VALUES)
