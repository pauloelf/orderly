'use client'

import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { Input } from '@/components/ui/input'
import { useFilters } from '@/hooks/useFilters'

export function SearchInput() {
  const { setFilters, filters } = useFilters()
  const [search, setSearch] = useState(filters.search)

  const [debouncedSearch] = useDebounce(search, 500)

  // biome-ignore lint/correctness/useExhaustiveDependencies: explanation
  useEffect(() => {
    setFilters({ ...filters, search: debouncedSearch, page: 1 })
  }, [debouncedSearch])

  return (
    <div className="relative">
      <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        className="w-full pl-8 md:w-[200px] lg:w-[360px]"
        onChange={({ target }) => setSearch(target.value)}
        placeholder="Busque por nome..."
        type="search"
        value={search}
      />
    </div>
  )
}
