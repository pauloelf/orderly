import { ListOrdered, Package, Plus } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function Home() {
  return (
    <main aria-label="Conteúdo de Gestão de Pedidos">
      <section className="mx-auto min-h-screen max-w-screen-md px-4 py-6">
        <section
          aria-label="Hero"
          className="flex flex-col items-center space-y-4 *:text-center"
        >
          <Package className="text-chart-5" size={64} />
          <h1 className="font-sans font-semibold text-3xl sm:text-4xl">
            Gestão de Pedidos
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Gerencie seus pedidos de forma eficiente com nosso sistema
            abrangente de gerenciamento de pedidos
          </p>
        </section>
        <section
          aria-label="Cards de Navegação"
          className="mt-10 flex gap-8 max-sm:flex-col"
        >
          <Card aria-labelledby="view-orders" className="flex-1">
            <CardHeader className="flex flex-col items-center justify-center gap-1">
              <ListOrdered className="text-blue-500" size={42} />
              <CardTitle className="font-semibold text-2xl" id="view-orders">
                Ver Pedidos
              </CardTitle>
              <CardDescription className="text-center">
                Navegue e gerencie todos os seus pedidos em um só lugar
              </CardDescription>
            </CardHeader>
            <CardFooter className="mx-auto">
              <Button asChild size="lg">
                <Link href="/orders">Ver Todos os Pedidos</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card aria-labelledby="create-order" className="flex-1">
            <CardHeader className="flex flex-col items-center justify-center gap-1">
              <Plus className="text-green-500" size={42} />
              <CardTitle className="font-semibold text-2xl" id="create-order">
                Criar Pedido
              </CardTitle>
              <CardDescription className="text-center">
                Adicione novos pedidos ao seu sistema de forma rápida e fácil
              </CardDescription>
            </CardHeader>

            <CardFooter className="mx-auto">
              <Button asChild size="lg">
                <Link href="/orders/create">Criar Novo Pedido</Link>
              </Button>
            </CardFooter>
          </Card>
        </section>
      </section>
    </main>
  )
}
