import { ArrowLeft, Plus } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'

export function OrdersHeader() {
  return (
    <header className="flex gap-4 px-4 py-8 max-sm:flex-col-reverse sm:items-center sm:justify-between">
      <div>
        <h1 className="font-sans font-semibold text-3xl sm:text-4xl">
          Pedidos
        </h1>
        <p className="text-lg text-muted-foreground sm:text-xl">
          Gerencie todos os seus pedidos
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
        <Button aria-label="Criar Pedido" asChild size="lg">
          <Link href="/orders/create">
            <Plus />
            <span className="max-md:hidden">Criar Pedido</span>
          </Link>
        </Button>
      </div>
    </header>
  )
}
