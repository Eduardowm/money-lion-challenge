import { Entity } from '../contracts/Entity'
import CommentModel from '../models/CommentModel'

export interface Comment {
  name: string
  text: string
  image: string
  likes: number
}

class CommentEntity implements Entity<Comment> {
  public name: string
  public text: string
  public image: string
  public likes: number

  constructor(data: CommentModel) {
    this.name = data.author
    this.text = data.text
    this.image = data.profilePic
    this.likes = data.likes
  }

  public toObject(): Comment {
    return {
      name: this.name,
      text: this.text,
      image: this.image,
      likes: this.likes,
    }
  }
}
export default CommentEntity
