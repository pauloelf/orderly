import type { Metadata } from 'next'

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
  return <main aria-label="Conteúdo de Pedidos">{children}</main>
}
