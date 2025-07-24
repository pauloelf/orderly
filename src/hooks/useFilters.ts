import { useContext } from 'react'
import { FilterContext } from '@/contexts/filter-context'

export function useFilters() {
  const context = useContext(FilterContext)

  return context
}
