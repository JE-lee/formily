import { inject, Ref, ref } from '@vue/composition-api'

export interface PaginationAction {
  totalPage?: number
  pageSize?: number
  changePage?: (page: number) => void
}

export const PaginationSymbol = Symbol('pagination')
export const usePagination = () => {
  return inject<Ref<PaginationAction>>(PaginationSymbol, ref({}))
}
