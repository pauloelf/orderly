'use client'

import { ChevronDown, ChevronsUpDown, ChevronUp } from 'lucide-react'
import type { FiltersProps } from '@/@types'
import { TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useFilters } from '@/hooks/useFilters'

export function OrdersTableHeader() {
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
    <TableHeader className="max-lg:hidden">
      <TableRow className="w-full">
        <TableHead
          className="table-cell cursor-pointer items-center justify-end gap-1"
          onClick={() => handleSort('id')}
        >
          <div className="flex items-center gap-1">
            ID
            {getSortIcon('id')}
          </div>
        </TableHead>
        <TableHead
          className="table-cell cursor-pointer items-center justify-end gap-1"
          onClick={() => handleSort('customer_name')}
        >
          <div className="flex items-center gap-1">
            Cliente
            {getSortIcon('customer_name')}
          </div>
        </TableHead>
        <TableHead className="table-cell">Status</TableHead>
        <TableHead
          className="table-cell cursor-pointer items-center justify-end gap-1"
          onClick={() => handleSort('order_date')}
        >
          <div className="flex items-center gap-1">
            Data
            {getSortIcon('order_date')}
          </div>
        </TableHead>
        <TableHead
          className="table-cell cursor-pointer items-center justify-end gap-1"
          onClick={() => handleSort('amount_in_cents')}
        >
          <div className="flex items-center gap-1">
            Valor
            {getSortIcon('amount_in_cents')}
          </div>
        </TableHead>
        <TableHead className="table-cell text-right">Ações</TableHead>
      </TableRow>
    </TableHeader>
  )
}
