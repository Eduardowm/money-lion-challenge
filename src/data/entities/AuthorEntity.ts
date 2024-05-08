import { Entity } from '../contracts/Entity'
import AuthorModel from '../models/AuthorModel'

export interface Author {
  name: string
}

class AuthorEntity implements Entity<Author> {
  public name: string

  constructor(data: AuthorModel) {
    this.name = `${data.first} ${data.last}`
  }

  public toObject(): Author {
    return {
      name: this.name,
    }
  }
}
export default AuthorEntity
