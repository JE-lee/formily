import { createContext, useContext } from 'react'

interface PaginationAction {
  totalPage?: number
  pageSize?: number
  changePage?: (page: number) => void
}

export const PaginationContext = createContext<PaginationAction>({})
export const usePagination = () => {
  return useContext(PaginationContext)
}
