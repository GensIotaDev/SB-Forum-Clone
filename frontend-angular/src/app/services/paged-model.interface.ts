export interface Page {
  size: number,
  number: number,
  totalElements: number,
  totalPages: number
}

export interface PagedModel<T extends object> {
  content: T[],
  page: Page
}
