export const formatAmount = (amount: number) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  return formatter.format(amount)
}

export const sanitizeParams = (params: Record<string, string | number>) => {
  const cleanParams: Record<string, string | number> = {}
  for (const key in params) {
    if (
      params[key] !== undefined &&
      params[key] !== null &&
      params[key] !== ''
    ) {
      cleanParams[key] = params[key]
    }
  }
  return cleanParams
}

export const formatDate = (date: string | Date) => {
  return new Date(date).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}
