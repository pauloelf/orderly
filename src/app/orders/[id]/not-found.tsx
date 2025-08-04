import { Package, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function OrderNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader className="space-y-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
            <Package className="h-8 w-8 text-muted-foreground" />
          </div>
          <CardTitle className="font-bold text-2xl">
            Pedido Não Encontrado
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            O pedido que você está procurando não existe ou não está mais
            disponível.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-sm">
            Verifique o número do pedido ou consulte todos os seus pedidos.
          </p>
          <div className="space-y-2">
            <Button asChild className="w-full">
              <Link href="/orders">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Ver Todos os Pedidos
              </Link>
            </Button>
            <Button asChild className="w-full bg-transparent" variant="outline">
              <Link href="/">Voltar ao Início</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
