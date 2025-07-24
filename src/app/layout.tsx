import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { FilterProvider, QueryProvider } from '@/providers'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Orderly — Gerencie ordens com eficiência',
  description:
    'Orderly é uma aplicação moderna em Next.js para listar, criar e excluir ordens via API Codante. Foco em acessibilidade, responsividade e experiência de usuário.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="dark" lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FilterProvider>
          <QueryProvider>{children}</QueryProvider>
        </FilterProvider>
      </body>
    </html>
  )
}
