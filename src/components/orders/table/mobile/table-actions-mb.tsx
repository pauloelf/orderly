'use client'

import { Eye, Trash } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useDeleteOrder } from '@/hooks/useDeleteOrder'

export function OrdersTableActionsMobile({ id }: { id: number }) {
  const { mutate } = useDeleteOrder()
  return (
    <div className="flex gap-2 border-t pt-2 *:cursor-pointer">
      <Button asChild className="flex-1" size="sm" variant="outline">
        <Link href={`/orders/${id}`}>
          <Eye className="mr-1 h-4 w-4" />
          Ver
        </Link>
      </Button>
      <Button
        className="flex-1"
        onClick={() => mutate(id)}
        size="sm"
        variant="destructive"
      >
        <Trash className="mr-1 h-4 w-4" />
        Excluir
      </Button>
    </div>
  )
}
