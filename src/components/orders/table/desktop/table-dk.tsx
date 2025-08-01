import type { OrderProps } from '@/@types'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { formatAmount } from '@/lib/formatters'
import { OrdersTableActions } from './table-actions-dk'
import { OrdersTableHeader } from './table-header-dk'

interface IOrders {
  orders: OrderProps[] | undefined
}

export function OrdersTable({ orders }: IOrders) {
  return (
    <Table className="max-lg:hidden">
      <OrdersTableHeader />
      <TableBody>
        {orders?.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="table-cell font-mono">{order.id}</TableCell>
            <TableCell>
              <div className="font-medium">{order.customer_name}</div>
              <div className="inline text-muted-foreground text-sm">
                {order.customer_email}
              </div>
            </TableCell>
            <TableCell className="table-cell">
              <Badge
                className={`text-xs ${order.status === 'pending' ? 'bg-chart-3/70' : 'bg-chart-2/70'}`}
                variant="outline"
              >
                {order.status === 'pending' ? 'Pendente' : 'Completo'}
              </Badge>
            </TableCell>
            <TableCell className="table-cell">
              {order.order_date.toString()}
            </TableCell>
            <TableCell className="table-cell">
              {formatAmount(order.amount_in_cents / 100)}
            </TableCell>
            <TableCell className="text-right">
              <OrdersTableActions id={order.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
