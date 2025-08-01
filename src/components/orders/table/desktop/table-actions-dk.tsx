'use client'

import { Eye, Trash } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function OrdersTableActions({ id }: { id: number }) {
  return (
    <div className="flex justify-end gap-2 *:cursor-pointer">
      <Button asChild size="icon" variant="outline">
        <Link href={`/orders/${id}`}>
          <Eye />
        </Link>
      </Button>
      <Button size="icon" variant="destructive">
        <Trash />
      </Button>
    </div>
  )
}
