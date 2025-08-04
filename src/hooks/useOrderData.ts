import { useQuery } from '@tanstack/react-query'
import type { OrderProps } from '@/@types'
import api from '@/lib/axios'

export function useOrderData(id: string) {
  const query = useQuery({
    queryKey: [
      'order',
      {
        orderId: id,
      },
    ],
    queryFn: async () => {
      const { data }: { data: { data: OrderProps } } = await api.get(
        `/orders/${id}`
      )
      return data.data
    },
    enabled: !!id,
  })

  return query
}
