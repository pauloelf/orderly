import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import api from '@/lib/axios'

interface IOrder {
  customer_name: string
  customer_email: string
  order_date: string
  amount_in_cents: number
  status: 'pending' | 'completed'
}

export function useOrdersMutate() {
  const queryClient = useQueryClient()
  const router = useRouter()

  const mutate = useMutation({
    mutationFn: async (data: IOrder) =>
      await api.post('/orders', {
        customer_name: data.customer_name,
        customer_email: data.customer_email,
        order_date: data.order_date,
        amount_in_cents: data.amount_in_cents,
        status: data.status,
      }),
    onSuccess: () => {
      toast.success('Pedido criado com sucesso!')
      queryClient.invalidateQueries({ queryKey: ['orders'], exact: false })
      router.push('/orders?page=1&sort=id')
    },
    onError: () => {
      toast.error('Erro ao criar pedido!')
    },
  })

  return mutate
}
