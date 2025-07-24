import { ChevronsUpDown } from 'lucide-react'
import type { OrderProps } from '@/@types'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { formatAmount } from '@/lib/formatters'
import { Badge } from '../ui/badge'

interface IOrders {
  orders: OrderProps[] | undefined
}

export function OrdersTable({ orders }: IOrders) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="w-full">
          <TableHead className="table-cell">Cliente</TableHead>
          <TableHead className="table-cell">Status</TableHead>
          <TableHead className="table-cell cursor-pointer items-center justify-end gap-1">
            <div className="hidden items-center gap-1 md:flex">
              Data
              <ChevronsUpDown className="w-4" />
            </div>
          </TableHead>
          <TableHead className="flex cursor-pointer items-center justify-end gap-1 text-right">
            Valor
            <ChevronsUpDown className="w-4" />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders?.map((order) => (
          <TableRow key={order.id}>
            <TableCell>
              <div className="font-medium">{order.customer_name}</div>
              <div className="hidden text-muted-foreground text-sm md:inline">
                {order.customer_email}
              </div>
            </TableCell>
            <TableCell>
              <Badge className="text-xs" variant="outline">
                {order.status === 'pending' ? 'Pendente' : 'Completo'}
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {order.order_date.toString()}
            </TableCell>
            <TableCell className="text-right">
              {formatAmount(order.amount_in_cents / 100)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
