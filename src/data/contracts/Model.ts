import { Entity } from './Entity'

export type Model<TData> = TData & {
  isValid(): boolean
  toEntity(): Entity<any>
}
