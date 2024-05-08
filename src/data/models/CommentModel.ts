import { Model } from '../contracts/Model'
import CommentEntity from '../entities/CommentEntity'

interface ICommentModel {
  text: string
  author: string
  profilePic: string
  likes: number
}

class CommentModel implements Model<ICommentModel> {
  public text: string
  public author: string
  public profilePic: string
  public likes: number

  constructor(data: ICommentModel) {
    this.text = data.text
    this.author = data.author
    this.profilePic = data.profilePic
    this.likes = data.likes
  }

  public isValid() {
    return Boolean(this.text && this.author)
  }

  public toEntity() {
    return new CommentEntity(this)
  }
}
export default CommentModel
