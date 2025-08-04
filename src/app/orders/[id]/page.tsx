'use client'

import { Calendar, Clock, DollarSign, User } from 'lucide-react'
import { useParams } from 'next/navigation'
import { OrderHeader } from '@/components/order/order-header'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useOrderData } from '@/hooks/useOrderData'
import { formatAmount, formatDate } from '@/lib/formatters'

export default function OrderPage() {
  const params: { id: string } = useParams()
  const { data, isLoading } = useOrderData(params.id || '')

  if (isLoading) {
    return <p>Carregando...</p>
  }
  return (
    <>
      <OrderHeader order={data} />
      <section
        aria-label="Detalhes do Pedido"
        className="mb-8 flex flex-col gap-4 px-4"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User />
                Informações do Cliente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <p className="text-muted-foreground">Nome</p>
                <p className="font-semibold sm:text-lg">
                  {data?.customer_name}
                </p>
              </div>
              <div aria-hidden className="my-3 h-0.5 w-full bg-accent" />
              <div>
                <p className="text-muted-foreground">Email</p>
                <p className="overflow-hidden text-ellipsis font-semibold sm:text-lg">
                  {data?.customer_email}
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign />
                Informações do Pedido
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-muted-foreground">Id do Pedido</p>
                  <p className="font-semibold text-lg">#{data?.id}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Status</p>
                  <Badge
                    className={`text-xs ${data?.status === 'pending' ? 'bg-chart-3/70' : 'bg-chart-2/70'}`}
                    variant="outline"
                  >
                    {data?.status === 'pending' ? 'Pendente' : 'Completo'}
                  </Badge>
                </div>
              </div>
              <div aria-hidden className="my-3 h-0.5 w-full bg-accent" />
              <div>
                <p className="text-muted-foreground">Valor Total</p>
                <p className="font-semibold text-2xl text-green-500">
                  {formatAmount((data?.amount_in_cents ?? 0) / 100)}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar /> Histórico de Datas
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="flex gap-2">
                <Calendar className="text-chart-1" />
                <div>
                  <p className="text-muted-foreground">Data do Pedido</p>
                  <p className="font-semibold">
                    {data?.order_date
                      .toString()
                      .replaceAll('-', '/')
                      .split('/')
                      .reverse()
                      .join('/')}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Clock className="text-chart-2" />
                <div>
                  <p className="text-muted-foreground">Criado em</p>
                  <p className="font-semibold">
                    {formatDate(data?.created_at ?? '')}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Calendar className="text-chart-3" />
                <div>
                  <p className="text-muted-foreground">Última Atualização</p>
                  <p className="font-semibold">
                    {formatDate(data?.updated_at ?? '')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Resumo do Pedido</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <ul className="space-y-4 *:flex *:justify-between">
                <li>
                  <p className="text-muted-foreground">ID do Pedido:</p>
                  <p className="font-semibold">#{data?.id}</p>
                </li>
                <li>
                  <p className="text-muted-foreground">Cliente:</p>
                  <p className="font-semibold">{data?.customer_name}</p>
                </li>
                <li className="flex-wrap">
                  <p className="text-muted-foreground">Email:</p>
                  <p className="overflow-hidden text-ellipsis font-semibold">
                    {data?.customer_email}
                  </p>
                </li>
                <li>
                  <p className="text-muted-foreground">Status:</p>
                  <Badge
                    className={`text-xs ${data?.status === 'pending' ? 'bg-chart-3/70' : 'bg-chart-2/70'}`}
                    variant="outline"
                  >
                    {data?.status === 'pending' ? 'Pendente' : 'Completo'}
                  </Badge>
                </li>
              </ul>
              <ul className="space-y-4 *:flex *:justify-between">
                <li>
                  <p className="text-muted-foreground">Data do Pedido:</p>
                  <p className="font-semibold">
                    {data?.order_date
                      .toString()
                      .replaceAll('-', '/')
                      .split('/')
                      .reverse()
                      .join('/')}
                  </p>
                </li>
                <li>
                  <p className="text-muted-foreground">Criado em:</p>
                  <p className="font-semibold">
                    {formatDate(data?.created_at ?? '')}
                  </p>
                </li>
                <li>
                  <p className="text-muted-foreground">Atualizado em:</p>
                  <p className="font-semibold">
                    {formatDate(data?.updated_at ?? '')}
                  </p>
                </li>
                <div aria-hidden className="my-3 h-0.5 w-full bg-accent" />
                <li>
                  <p className="font-semibold text-lg">Valor Total:</p>
                  <p className="font-semibold text-green-500 text-lg">
                    {formatAmount((data?.amount_in_cents ?? 0) / 100)}
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
