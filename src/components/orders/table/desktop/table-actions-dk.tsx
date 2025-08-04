'use client'

import { Eye, Trash } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useDeleteOrder } from '@/hooks/useDeleteOrder'

export function OrdersTableActions({ id }: { id: number }) {
  const { mutate } = useDeleteOrder()
  return (
    <div className="flex justify-end gap-2 *:cursor-pointer">
      <Button asChild size="icon" variant="outline">
        <Link href={`/orders/${id}`}>
          <Eye />
        </Link>
      </Button>
      <Button onClick={() => mutate(id)} size="icon" variant="destructive">
        <Trash />
      </Button>
    </div>
  )
}
