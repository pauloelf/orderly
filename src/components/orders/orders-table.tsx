import type { OrderProps } from '@/@types'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { formatAmount } from '@/lib/formatters'
import { Badge } from '../ui/badge'
import { OrdersTableHeader } from './orders-table-header'

interface IOrders {
  orders: OrderProps[] | undefined
}

export function OrdersTable({ orders }: IOrders) {
  return (
    <Table>
      <OrdersTableHeader />
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
