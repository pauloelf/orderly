'use client'

import { ArrowLeft, ListOrdered } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function OrderCreateHeader() {
  return (
    <header className="flex gap-4 px-4 py-8 max-sm:flex-col-reverse sm:items-center sm:justify-between">
      <div>
        <h1 className="font-sans font-semibold text-3xl sm:text-4xl">
          Criar Pedido
        </h1>
        <p className="text-lg text-muted-foreground sm:text-xl">
          Crie um novo pedido
        </p>
      </div>
      <div className="flex items-center justify-between gap-2">
        <Button
          aria-label="Voltar ao Início"
          asChild
          size="lg"
          variant="outline"
        >
          <Link href="/">
            <ArrowLeft />
            <span>Voltar ao Início</span>
          </Link>
        </Button>
        <Button aria-label="Ver Pedidos" asChild size="lg">
          <Link href="/orders">
            <ListOrdered />
            <span className="max-md:hidden">Ver Pedidos</span>
          </Link>
        </Button>
      </div>
    </header>
  )
}
