import { mockRawContentCard } from '../mocks/content-cards'
import AuthorModel from '../models/AuthorModel'
import AuthorEntity from './AuthorEntity'

const mockAuthorData = mockRawContentCard.textData.author

describe('AuthorEntity', () => {
  it('creates an instance of AuthorEntity with the model data', () => {
    const authorModel = new AuthorModel(mockAuthorData)
    const authorEntity = new AuthorEntity(authorModel)

    expect(authorEntity.name).toBe(`${mockAuthorData.first} ${mockAuthorData.last}`)
  })

  it('transforms the entity into an object as expected', () => {
    const authorModel = new AuthorModel(mockAuthorData)
    const authorEntity = new AuthorEntity(authorModel)

    expect(authorEntity.toObject()).toEqual({ name: `${mockAuthorData.first} ${mockAuthorData.last}` })
  })
})
