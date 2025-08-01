/** biome-ignore-all lint/nursery/noNoninteractiveElementInteractions: explanation */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: explanation */
'use client'

import { ChevronDown, ChevronsUpDown, ChevronUp } from 'lucide-react'
import type { FiltersProps } from '@/@types'
import { useFilters } from '@/hooks/useFilters'

export function OrdersTableHeaderMobile() {
  const { filters, setFilters } = useFilters()

  const handleSort = (field: FiltersProps['sort']) => {
    let value = field

    if (filters.sort === field) {
      value = `-${field}` as FiltersProps['sort']
    } else if (filters.sort === `-${field}`) {
      value = 'id'
    } else if (field) {
      value = field
    }

    setFilters({
      ...filters,
      sort: value,
      page: 1,
    })
  }

  const getSortIcon = (field: FiltersProps['sort']) => {
    if (filters.sort === field) {
      return <ChevronUp className="w-4" />
    }
    if (filters.sort === `-${field}`) {
      return <ChevronDown className="w-4" />
    }
    return <ChevronsUpDown className="w-4" />
  }

  return (
    <header className="mb-4 w-full rounded-lg bg-accent p-2 lg:hidden">
      <ul className="flex flex-wrap justify-between gap-1 font-medium text-sm sm:gap-2">
        <li
          aria-label="Ordenar por ID"
          className="table-cell cursor-pointer items-center justify-end gap-1"
          onClick={() => handleSort('id')}
        >
          <div className="flex items-center gap-1">
            ID
            {getSortIcon('id')}
          </div>
        </li>
        <li
          aria-label="Ordenar por Nome do Cliente"
          className="table-cell cursor-pointer items-center justify-end gap-1"
          onClick={() => handleSort('customer_name')}
        >
          <div className="flex items-center gap-1">
            Cliente
            {getSortIcon('customer_name')}
          </div>
        </li>
        <li
          aria-label="Ordenar por Data do Pedido"
          className="table-cell cursor-pointer items-center justify-end gap-1"
          onClick={() => handleSort('order_date')}
        >
          <div className="flex items-center gap-1">
            Data
            {getSortIcon('order_date')}
          </div>
        </li>
        <li
          aria-label="Ordenar por Valor do Pedido"
          className="table-cell cursor-pointer items-center justify-end gap-1"
          onClick={() => handleSort('amount_in_cents')}
        >
          <div className="flex items-center gap-1">
            Valor
            {getSortIcon('amount_in_cents')}
          </div>
        </li>
      </ul>
    </header>
  )
}
