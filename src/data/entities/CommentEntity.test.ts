import { mockRawContentCard } from '../mocks/content-cards'
import CommentModel from '../models/CommentModel'
import CommentEntity from './CommentEntity'

const commentDataMock = mockRawContentCard.comments[0]

describe('CommentEntity', () => {
  it('creates an instance of CommentEntity with the model data', () => {
    const commentModel = new CommentModel(commentDataMock)
    const commentEntity = new CommentEntity(commentModel)

    expect(commentEntity.name).toBe(commentDataMock.author)
    expect(commentEntity.text).toBe(commentDataMock.text)
    expect(commentEntity.image).toBe(commentDataMock.profilePic)
    expect(commentEntity.likes).toBe(commentDataMock.likes)
  })

  it('transforms the entity into an object as expected', () => {
    const commentModel = new CommentModel(commentDataMock)
    const commentEntity = new CommentEntity(commentModel)

    expect(commentEntity.toObject()).toEqual({
      name: commentDataMock.author,
      text: commentDataMock.text,
      image: commentDataMock.profilePic,
      likes: commentDataMock.likes,
    })
  })
})
