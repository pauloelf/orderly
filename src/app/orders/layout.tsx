import type { Metadata } from 'next'
import { Suspense } from 'react'
import { FilterProvider } from '@/providers'

export const metadata: Metadata = {
  title: 'Orderly — Pedidos',
  description:
    'Visualize e gerencie todos os pedidos recebidos de forma organizada e eficiente. Busque por nome e filtre por status, data e valores em tempo real.',
}

export default function OrdersLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main aria-label="Conteúdo de Pedidos">
      <Suspense fallback={<div>Carregando...</div>}>
        <FilterProvider>{children}</FilterProvider>
      </Suspense>
    </main>
  )
}
