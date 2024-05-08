import CommentEntity from '../entities/CommentEntity'
import { mockRawContentCard } from '../mocks/content-cards'
import CommentModel from './CommentModel'

describe('CommentModel', () => {
  it('transforms raw data in model as expected', () => {
    const model = new CommentModel(mockRawContentCard.comments[0])

    expect(model.author).toBe(mockRawContentCard.comments[0].author)
    expect(model.text).toBe(mockRawContentCard.comments[0].text)
    expect(model.profilePic).toBe(mockRawContentCard.comments[0].profilePic)
    expect(model.likes).toBe(mockRawContentCard.comments[0].likes)
    expect(model.isValid).toBeDefined()
    expect(model.toEntity).toBeDefined()
  })

  it('returns true when the model data is valid', () => {
    const model = new CommentModel(mockRawContentCard.comments[0])
    expect(model.isValid()).toBe(true)
  })

  it('returns false when the model data is invalid', () => {
    const model = new CommentModel({
      ...mockRawContentCard.comments[0],
      text: '',
    })
    expect(model.isValid()).toBe(false)
  })

  it('converts to entity as expected', () => {
    const model = new CommentModel(mockRawContentCard.comments[0])
    const entity = model.toEntity()

    expect(entity instanceof CommentEntity).toBe(true)
    expect(entity.name).toBe(mockRawContentCard.comments[0].author)
    expect(entity.text).toBe(mockRawContentCard.comments[0].text)
    expect(entity.image).toBe(mockRawContentCard.comments[0].profilePic)
    expect(entity.likes).toBe(mockRawContentCard.comments[0].likes)
    expect(entity.toObject).toBeDefined()
  })
})
