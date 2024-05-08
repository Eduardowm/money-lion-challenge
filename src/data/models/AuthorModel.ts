import { Model } from '../contracts/Model'
import AuthorEntity from '../entities/AuthorEntity'

interface IAuthorModel {
  first: string
  last: string
}

class AuthorModel implements Model<IAuthorModel> {
  public first: string
  public last: string

  constructor(data: IAuthorModel) {
    this.first = data.first
    this.last = data.last
  }

  public isValid() {
    return Boolean(this.first && this.last)
  }

  public toEntity() {
    return new AuthorEntity(this)
  }
}
export default AuthorModel
