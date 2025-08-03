'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useMemo, useState } from 'react'
import type { FiltersProps } from '@/@types'
import { DEFAULT_FILTERS, FilterContext } from '@/contexts/filter-context'

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const pathname = usePathname()
  const { replace } = useRouter()

  const initialFilters: FiltersProps = {
    page: Number(params.get('page') || DEFAULT_FILTERS.page),
    sort: String(
      params.get('sort') || DEFAULT_FILTERS.sort
    ) as FiltersProps['sort'],
    status: String(
      params.get('status') || DEFAULT_FILTERS.status
    ) as FiltersProps['status'],
    search: String(params.get('search') || DEFAULT_FILTERS.search),
  }

  const [filters, setInternalFilters] = useState<FiltersProps>(initialFilters)

  const setFilters = (newFilters: Partial<FiltersProps>) => {
    const updated = { ...filters, ...newFilters }
    setInternalFilters(updated)

    // biome-ignore lint/performance/useTopLevelRegex: explanation
    if (pathname.match(/^\/orders\/\d+$/)) {
      return
    }

    // biome-ignore lint/complexity/noForEach: explanation
    Object.entries(newFilters).forEach(([key, v]) => {
      v ? params.set(key, String(v)) : params.delete(key)
    })

    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: explanation
  const value = useMemo(
    () => ({
      filters,
      setFilters,
    }),
    [filters]
  )

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  )
}
