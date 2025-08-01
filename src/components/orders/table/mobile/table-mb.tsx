import type { OrderProps } from '@/@types'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { formatAmount } from '@/lib/formatters'
import { OrdersTableActionsMobile } from './table-actions-mb'
import { OrdersTableHeaderMobile } from './table-header-mb'

interface IOrders {
  orders: OrderProps[] | undefined
}

export function OrdersTableMobile({ orders }: IOrders) {
  return (
    <div className="lg:hidden">
      <OrdersTableHeaderMobile />
      <div>
        {orders?.map((order) => (
          <Card className="mb-4 w-full" key={order.id}>
            <CardContent className="p-4">
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{order?.id}</h3>
                  <Badge
                    className={`text-xs ${order?.status === 'pending' ? 'bg-chart-3/70' : 'bg-chart-2/70'}`}
                    variant="outline"
                  >
                    {order?.status}
                  </Badge>
                </div>
                <div className="text-right">
                  <div className="font-bold text-xl">
                    {formatAmount((order?.amount_in_cents ?? 0) / 100)}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {order?.order_date.toString()}
                  </div>
                </div>
              </div>

              <div className="mb-4 space-y-2">
                <div>
                  <span className="font-medium text-muted-foreground text-sm">
                    Cliente:
                  </span>
                  <p className="font-medium">{order?.customer_name}</p>
                  <p className="overflow-hidden text-ellipsis text-muted-foreground text-sm">
                    {order?.customer_email}
                  </p>
                </div>
              </div>
              <OrdersTableActionsMobile id={order.id} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
