'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import api from '@/lib/axios'
import { useFilters } from './useFilters'

export function useDeleteOrder() {
  const { setFilters, filters } = useFilters()
  const router = useRouter()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: number) => {
      const { data } = await api.delete(`/orders/${id}`)
      return data
    },
    onSuccess: () => {
      toast.success('Pedido deletado com sucesso!')
      queryClient.invalidateQueries({
        queryKey: ['orders'],
        exact: false,
      })
      setFilters({
        ...filters,
        page: 1,
        sort: 'id',
      })
      router.push('/orders?page=1&sort=id')
    },
    onError: () => {
      toast.error('Erro ao deletar pedido!')
    },
  })
}
