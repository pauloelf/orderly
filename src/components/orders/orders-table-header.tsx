'use client'

import { ChevronsDown, ChevronsUp, ChevronsUpDown } from 'lucide-react'
import type { FiltersProps } from '@/@types'
import { useFilters } from '@/hooks/useFilters'
import { TableHead, TableHeader, TableRow } from '../ui/table'

export function OrdersTableHeader() {
  const { filters, setFilters } = useFilters()

  const handleSort = (field: FiltersProps['sort']) => {
    let value = field

    if (filters.sort === field) {
      value = `-${field}` as FiltersProps['sort']
    } else if (filters.sort === `-${field}`) {
      value = undefined
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
      return <ChevronsUp className="w-4" />
    }
    if (filters.sort === `-${field}`) {
      return <ChevronsDown className="w-4" />
    }
    return <ChevronsUpDown className="w-4" />
  }

  return (
    <TableHeader>
      <TableRow className="w-full">
        <TableHead
          className="table-cell cursor-pointer items-center justify-end gap-1"
          onClick={() => handleSort('customer_name')}
        >
          <div className="hidden items-center gap-1 md:flex">
            Cliente
            {getSortIcon('customer_name')}
          </div>
        </TableHead>
        <TableHead className="table-cell">Status</TableHead>
        <TableHead
          className="table-cell cursor-pointer items-center justify-end gap-1"
          onClick={() => handleSort('order_date')}
        >
          <div className="hidden items-center gap-1 md:flex">
            Data
            {getSortIcon('order_date')}
          </div>
        </TableHead>
        <TableHead
          className="flex cursor-pointer items-center justify-end gap-1 text-right"
          onClick={() => handleSort('amount_in_cents')}
        >
          Valor
          {getSortIcon('amount_in_cents')}
        </TableHead>
      </TableRow>
    </TableHeader>
  )
}
