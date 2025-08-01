'use client'

import type { MetaProps } from '@/@types'
import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { useFilters } from '@/hooks/useFilters'

interface IMeta {
  meta: MetaProps | undefined
}

export function Pagination({ meta }: IMeta) {
  const { setFilters, filters } = useFilters()

  const { links, last_page, current_page } = meta ?? {}
  const linksWithId = links?.map((link, index) => ({ ...link, id: index }))

  const isFirstPage = current_page === 1
  const isLastPage = current_page === last_page

  const handleChangePage = (page: number, isDisabled: boolean) => {
    if (!isDisabled) {
      setFilters({
        ...filters,
        page,
      })
    }
  }

  return (
    <PaginationComponent>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={isFirstPage ? 'cursor-not-allowed' : 'cursor-pointer'}
            isActive={!isFirstPage}
            onClick={() =>
              handleChangePage(Number(current_page) - 1, isFirstPage)
            }
          />
        </PaginationItem>
        {linksWithId?.map((link) => {
          if (
            link.label.includes('Anterior') ||
            link.label.includes('Próximo')
          ) {
            return null
          }
          if (link.label.includes('...')) {
            return (
              <PaginationItem className="max-md:hidden" key={link.id}>
                <PaginationEllipsis />
              </PaginationItem>
            )
          }

          return (
            <PaginationItem
              className={`${link.active ? 'inline-flex' : 'hidden'} md:inline-flex`}
              key={link.id}
            >
              <PaginationLink
                className="cursor-pointer"
                isActive={link.active}
                onClick={() =>
                  handleChangePage(Number(link.label), link.active)
                }
              >
                {link.label}
              </PaginationLink>
            </PaginationItem>
          )
        })}
        <PaginationItem>
          <PaginationNext
            className={isLastPage ? 'cursor-not-allowed' : 'cursor-pointer'}
            isActive={!isLastPage}
            onClick={() =>
              handleChangePage(Number(current_page) + 1, isLastPage)
            }
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationComponent>
  )
}
