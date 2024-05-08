export type Entity<TData> = TData & {
  toObject(): TData
}
