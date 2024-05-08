import AuthorEntity from '../entities/AuthorEntity'
import { mockRawContentCard } from '../mocks/content-cards'
import AuthorModel from './AuthorModel'

describe('AuthorModel', () => {
  it('transforms raw data in model as expected', () => {
    const model = new AuthorModel(mockRawContentCard.textData.author)

    expect(model.first).toBe(mockRawContentCard.textData.author.first)
    expect(model.last).toBe(mockRawContentCard.textData.author.last)
    expect(model.isValid).toBeDefined()
    expect(model.toEntity).toBeDefined()
  })

  it('returns true when the model data is valid', () => {
    const model = new AuthorModel(mockRawContentCard.textData.author)
    expect(model.isValid()).toBe(true)
  })

  it('returns false when the model data is invalid', () => {
    const model = new AuthorModel({ first: '', last: '' })
    expect(model.isValid()).toBe(false)
  })

  it('converts to entity as expected', () => {
    const model = new AuthorModel(mockRawContentCard.textData.author)
    const entity = model.toEntity()

    expect(entity instanceof AuthorEntity).toBe(true)
    expect(entity.name).toBe(`${mockRawContentCard.textData.author.first} ${mockRawContentCard.textData.author.last}`)
    expect(entity.toObject).toBeDefined()
  })
})
