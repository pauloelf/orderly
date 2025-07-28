import { keepPreviousData, useQuery } from '@tanstack/react-query'
import type { FiltersProps, ResponseProps } from '@/@types'
import api from '@/lib/axios'
import { sanitizeParams } from '@/lib/formatters'

export function useOrdersData(filters?: FiltersProps) {
  const query = useQuery({
    queryKey: [
      'orders',
      {
        page: filters?.page ?? 1,
        sort: filters?.sort ?? '',
        status: filters?.status ?? '',
        search: filters?.search ?? '',
      },
    ],
    queryFn: async () => {
      const { data }: { data: ResponseProps } = await api.get('/orders', {
        params: sanitizeParams(filters ?? {}),
      })
      return data
    },
    placeholderData: keepPreviousData,
    refetchInterval: 60 * 1000 * 5,
  })

  return query
}
