'use client'

import {
  FilterDropdown,
  OrdersHeader,
  OrdersTable,
  OrdersTableMobile,
  Pagination,
  SearchInput,
} from '@/components/orders'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useFilters } from '@/hooks/useFilters'
import { useOrdersData } from '@/hooks/useOrdersData'

export default function OrdersPage() {
  const { filters } = useFilters()
  const { data } = useOrdersData(filters)

  return (
    <>
      <OrdersHeader />
      <section aria-label="Tabela Orders List" className="px-4">
        <Card>
          <CardHeader className="flex justify-between gap-4 max-sm:px-4 max-md:flex-col md:items-center">
            <div>
              <CardTitle>Lista de Pedidos</CardTitle>
              <CardDescription>Listagem de todos os pedidos</CardDescription>
            </div>
            <div className="flex gap-4">
              <SearchInput />
              <FilterDropdown />
            </div>
          </CardHeader>
          <CardContent className="max-sm:px-4">
            <OrdersTable orders={data?.data} />
            <OrdersTableMobile orders={data?.data} />
          </CardContent>
          <CardFooter>
            <Pagination meta={data?.meta} />
          </CardFooter>
        </Card>
      </section>
    </>
  )
}
