'use client'

import { ArrowLeft, Trash } from 'lucide-react'
import Link from 'next/link'
import type { OrderProps } from '@/@types'
import { useDeleteOrder } from '@/hooks/useDeleteOrder'
import { formatDate } from '@/lib/formatters'
import { Button } from '../ui/button'

interface IOrderHeader {
  order: OrderProps | undefined
}

export function OrderHeader({ order }: IOrderHeader) {
  const { mutate } = useDeleteOrder()
  if (!order) {
    return null
  }
  return (
    <header className="flex gap-4 px-4 py-8 max-sm:flex-col-reverse sm:items-center sm:justify-between">
      <div>
        <h1 className="font-sans font-semibold text-3xl sm:text-4xl">
          Pedido #{order.id}
        </h1>
        <p className="text-lg text-muted-foreground sm:text-xl">
          Criado em {formatDate(order.created_at)}
        </p>
      </div>
      <div className="flex items-center justify-between gap-2">
        <Button
          aria-label="Voltar para Pedidos"
          asChild
          size="lg"
          variant="outline"
        >
          <Link href="/orders">
            <ArrowLeft />
            <span>Voltar para Pedidos</span>
          </Link>
        </Button>
        <Button
          aria-label="Excluir Pedido"
          className="cursor-pointer"
          onClick={() => mutate(order.id)}
          size="lg"
          variant="destructive"
        >
          <Trash />
          <span className="max-md:hidden">Excluir Pedido</span>
        </Button>
      </div>
    </header>
  )
}
