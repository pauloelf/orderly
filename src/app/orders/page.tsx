import {
  FilterDropdown,
  OrdersHeader,
  OrdersTable,
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

export default function OrdersPage() {
  return (
    <>
      <OrdersHeader />
      <section aria-label="Tabela Orders List" className="px-4">
        <Card>
          <CardHeader className="flex justify-between gap-4 max-md:flex-col md:items-center">
            <div>
              <CardTitle>Lista de Pedidos</CardTitle>
              <CardDescription>Listagem de todos os pedidos</CardDescription>
            </div>
            <div className="flex gap-4">
              <SearchInput />
              <FilterDropdown />
            </div>
          </CardHeader>
          <CardContent>
            <OrdersTable />
          </CardContent>
          <CardFooter>
            <Pagination />
          </CardFooter>
        </Card>
      </section>
    </>
  )
}
