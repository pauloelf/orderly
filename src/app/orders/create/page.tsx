'use client'

import { Calendar, DollarSign, Mail, User } from 'lucide-react'
import { useState } from 'react'
import { OrderCreateHeader } from '@/components/orders/create/order-create-header'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useOrdersMutate } from '@/hooks/useOrderMutate'

export default function OrdersCreatePage() {
  const [customerName, setCustomerName] = useState('')
  const [email, setEmail] = useState('')
  const [orderDate, setOrderDate] = useState('')
  const [total, setTotal] = useState<number | null>(null)
  const [status, setStatus] = useState<'pending' | 'completed'>('pending')
  const { mutate, isPending } = useOrdersMutate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutate({
      customer_name: customerName,
      customer_email: email,
      order_date: orderDate,
      amount_in_cents: total ? total * 100 : 0,
      status,
    })
    setCustomerName('')
    setEmail('')
    setOrderDate('')
    setTotal(null)
    setStatus('pending')
  }

  return (
    <>
      <OrderCreateHeader />
      <section className="mx-auto max-w-5xl px-4">
        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>Informações do Cliente</CardTitle>
              <CardDescription>
                Digite os dados do cliente para este pedido
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label
                    className="flex items-center gap-2"
                    htmlFor="customerName"
                  >
                    <User className="h-4 w-4" />
                    Nome do Cliente *
                  </Label>
                  <Input
                    id="customerName"
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Digite o nome completo"
                    required
                    value={customerName}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2" htmlFor="email">
                    <Mail className="h-4 w-4" />
                    Email *
                  </Label>
                  <Input
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemplo@email.com"
                    required
                    type="email"
                    value={email}
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label
                    className="flex items-center gap-2"
                    htmlFor="orderDate"
                  >
                    <Calendar className="h-4 w-4" />
                    Data do Pedido *
                  </Label>
                  <Input
                    id="orderDate"
                    onChange={(e) => setOrderDate(e.target.value)}
                    required
                    type="date"
                    value={orderDate}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2" htmlFor="total">
                    <DollarSign className="h-4 w-4" />
                    Valor Total (R$) *
                  </Label>
                  <Input
                    id="total"
                    min="0.01"
                    onChange={(e) => setTotal(+e.target.value)}
                    placeholder="0,00"
                    required
                    step="0.01"
                    type="number"
                    value={total || ''}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Status do Pedido</Label>
                <Select
                  onValueChange={(value: 'pending' | 'completed') =>
                    setStatus(value)
                  }
                  value={status}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione o status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pendente</SelectItem>
                    <SelectItem value="completed">Concluído</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full cursor-pointer"
                disabled={isPending}
                type="submit"
              >
                {isPending ? 'Criando...' : 'Criar Pedido'}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </section>
    </>
  )
}
