import { Model } from '../contracts/Model'
import ContentCardEntity from '../entities/ContentCardEntity'
import AuthorModel from './AuthorModel'
import CommentModel from './CommentModel'

export interface IContentCardModel {
  id: string
  imageUri: string
  textData?: {
    title: string
    subTitle: string
    body: string
    author: {
      first: string
      last: string
    } | null
  }
  metadata?: {
    priority: number
    publishDate: string
  }
  comments?: Array<{
    text: string
    author: string
    profilePic: string
    likes: number
  }>
}

class ContentCardModel implements Model<IContentCardModel> {
  public id: string
  public imageUri: string

  public textData?: {
    title: string
    subTitle: string
    body: string
    author: AuthorModel | null
  }

  public metadata?: {
    priority: number
    publishDate: string
  }

  public comments: CommentModel[]

  constructor(data: IContentCardModel) {
    this.id = data.id
    this.imageUri = data.imageUri
    this.metadata = data.metadata

    const author = data.textData?.author ? new AuthorModel(data.textData.author) : null
    this.textData = data.textData
      ? {
          ...data.textData,
          author: author?.isValid() ? author : null,
        }
      : undefined

    this.comments = data.comments?.map((c) => new CommentModel(c)).filter((c) => c.isValid()) || []
  }

  public isValid() {
    return Boolean(this.id && this.imageUri && this.textData?.title)
  }

  public toEntity() {
    return new ContentCardEntity(this)
  }
}
export default ContentCardModel
