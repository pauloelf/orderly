import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Orderly — Crie um novo pedido',
  description:
    'Cadastre um novo pedido no sistema Orderly. Preencha os dados do cliente e defina o status do pedido.',
}

export default function OrdersCreateLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
