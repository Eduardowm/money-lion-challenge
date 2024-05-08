import { Entity } from '../contracts/Entity'
import ContentCardModel from '../models/ContentCardModel'
import AuthorEntity, { Author } from './AuthorEntity'
import CommentEntity, { Comment } from './CommentEntity'

export interface ContentCard {
  id: string
  image: string
  title: string
  subtitle: string
  content: string
  priority: number
  author: Author | null
  comments: Comment[]
}

class ContentCardEntity implements Entity<ContentCard> {
  public id: string
  public image: string
  public title: string
  public subtitle: string
  public content: string
  public priority: number

  public author: AuthorEntity | null
  public comments: CommentEntity[]

  constructor(data: ContentCardModel) {
    this.id = data.id
    this.image = data.imageUri
    this.title = data.textData?.title || ''
    this.subtitle = data.textData?.subTitle || ''
    this.content = data.textData?.body || ''
    this.priority = data.metadata?.priority || 0

    this.author = data.textData?.author ? new AuthorEntity(data.textData.author) : null
    this.comments = (data.comments || []).map((c) => new CommentEntity(c))
  }

  public toObject(): ContentCard {
    return {
      id: this.id,
      image: this.image,
      title: this.title,
      subtitle: this.subtitle,
      content: this.content,
      priority: this.priority,
      author: this.author?.toObject() || null,
      comments: this.comments.map((c) => c.toObject()),
    }
  }
}
export default ContentCardEntity
