import { mockRawContentCard } from '../mocks/content-cards'
import ContentCardModel from '../models/ContentCardModel'
import AuthorEntity from './AuthorEntity'
import CommentEntity from './CommentEntity'
import ContentCardEntity from './ContentCardEntity'

describe('ContentCardEntity', () => {
  it('creates an instance of ContentCardEntity with the model data', () => {
    const contentCardModel = new ContentCardModel(mockRawContentCard)
    const contentCardEntity = new ContentCardEntity(contentCardModel)

    expect(contentCardEntity.id).toBe(mockRawContentCard.id)
    expect(contentCardEntity.image).toBe(mockRawContentCard.imageUri)
    expect(contentCardEntity.title).toBe(mockRawContentCard.textData.title)
    expect(contentCardEntity.subtitle).toBe(mockRawContentCard.textData.subTitle)
    expect(contentCardEntity.content).toBe(mockRawContentCard.textData.body)
    expect(contentCardEntity.priority).toBe(mockRawContentCard.metadata.priority)
    expect(contentCardEntity.author?.name).toBe(
      `${mockRawContentCard.textData.author.first} ${mockRawContentCard.textData.author.last}`
    )
    expect(contentCardEntity.comments[0].name).toBe(mockRawContentCard.comments[0].author)
    expect(contentCardEntity.comments[0].text).toBe(mockRawContentCard.comments[0].text)
    expect(contentCardEntity.comments[0].image).toBe(mockRawContentCard.comments[0].profilePic)
    expect(contentCardEntity.comments[0].likes).toBe(mockRawContentCard.comments[0].likes)

    expect(contentCardEntity.comments[0] instanceof CommentEntity).toBe(true)
    expect(contentCardEntity.author instanceof AuthorEntity).toBe(true)
  })

  it('creates an instance of ContentCardEntity with only required data', () => {
    const contentCardModel = new ContentCardModel({ id: mockRawContentCard.id, imageUri: mockRawContentCard.imageUri })
    const contentCardEntity = new ContentCardEntity(contentCardModel)

    expect(contentCardEntity.id).toBe(mockRawContentCard.id)
    expect(contentCardEntity.image).toBe(mockRawContentCard.imageUri)
    expect(contentCardEntity.title).toBe('')
    expect(contentCardEntity.subtitle).toBe('')
    expect(contentCardEntity.content).toBe('')
    expect(contentCardEntity.priority).toBe(0)
    expect(contentCardEntity.author).toBe(null)
    expect(contentCardEntity.comments.length).toBe(0)
  })

  it('transforms the entity into an object as expected', () => {
    const contentCardModel = new ContentCardModel(mockRawContentCard)
    const contentCardEntity = new ContentCardEntity(contentCardModel)

    expect(contentCardEntity.toObject()).toEqual({
      id: mockRawContentCard.id,
      image: mockRawContentCard.imageUri,
      title: mockRawContentCard.textData.title,
      subtitle: mockRawContentCard.textData.subTitle,
      content: mockRawContentCard.textData.body,
      priority: mockRawContentCard.metadata.priority,
      author: { name: `${mockRawContentCard.textData.author.first} ${mockRawContentCard.textData.author.last}` },
      comments: [
        {
          name: mockRawContentCard.comments[0].author,
          text: mockRawContentCard.comments[0].text,
          image: mockRawContentCard.comments[0].profilePic,
          likes: mockRawContentCard.comments[0].likes,
        },
        {
          name: mockRawContentCard.comments[1].author,
          text: mockRawContentCard.comments[1].text,
          image: mockRawContentCard.comments[1].profilePic,
          likes: mockRawContentCard.comments[1].likes,
        },
      ],
    })
  })
})
