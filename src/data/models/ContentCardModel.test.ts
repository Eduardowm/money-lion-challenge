import ContentCardEntity from '../entities/ContentCardEntity'
import { mockRawContentCard } from '../mocks/content-cards'
import ContentCardModel from './ContentCardModel'

describe('ContentCardModel', () => {
  it('transforms raw data in model as expected', () => {
    const model = new ContentCardModel(mockRawContentCard)

    expect(model.id).toBe(mockRawContentCard.id)
    expect(model.imageUri).toBe(mockRawContentCard.imageUri)
    expect(model.textData?.title).toBe(mockRawContentCard.textData.title)
    expect(model.textData?.subTitle).toBe(mockRawContentCard.textData.subTitle)
    expect(model.textData?.body).toBe(mockRawContentCard.textData.body)
    expect(model.metadata?.priority).toBe(mockRawContentCard.metadata.priority)
    expect(model.metadata?.publishDate).toBe(mockRawContentCard.metadata.publishDate)
    expect(model.textData?.author?.first).toBe(mockRawContentCard.textData.author.first)
    expect(model.textData?.author?.last).toBe(mockRawContentCard.textData.author.last)
    expect(model.comments[0].text).toBe(mockRawContentCard.comments[0].text)
    expect(model.comments[0].author).toBe(mockRawContentCard.comments[0].author)
    expect(model.comments[0].profilePic).toBe(mockRawContentCard.comments[0].profilePic)
    expect(model.comments[0].likes).toBe(mockRawContentCard.comments[0].likes)
    expect(model.isValid).toBeDefined()
    expect(model.toEntity).toBeDefined()
  })

  it('transforms raw data with only required values in model as expected', () => {
    const model = new ContentCardModel({ id: mockRawContentCard.id, imageUri: mockRawContentCard.imageUri })

    expect(model.id).toBe(mockRawContentCard.id)
    expect(model.imageUri).toBe(mockRawContentCard.imageUri)
    expect(model.textData).toBe(undefined)
    expect(model.metadata).toBe(undefined)
    expect(model.comments.length).toBe(0)
    expect(model.isValid).toBeDefined()
    expect(model.toEntity).toBeDefined()
  })

  it('returns true when the model data is valid', () => {
    const model = new ContentCardModel(mockRawContentCard)
    expect(model.isValid()).toBe(true)
  })

  it('returns false when the model data is invalid', () => {
    const model = new ContentCardModel({
      ...mockRawContentCard,
      textData: { ...mockRawContentCard.textData, title: '' },
    })
    expect(model.isValid()).toBe(false)
  })

  it('converts to entity as expected', () => {
    const model = new ContentCardModel(mockRawContentCard)
    const entity = model.toEntity()

    expect(entity instanceof ContentCardEntity).toBe(true)
    expect(entity.id).toBe(mockRawContentCard.id)
    expect(entity.image).toBe(mockRawContentCard.imageUri)
    expect(entity.title).toBe(mockRawContentCard.textData.title)
    expect(entity.subtitle).toBe(mockRawContentCard.textData.subTitle)
    expect(entity.content).toBe(mockRawContentCard.textData.body)
    expect(entity.priority).toBe(mockRawContentCard.metadata.priority)
    expect(entity.author?.name).toBe(
      mockRawContentCard.textData.author.first + ' ' + mockRawContentCard.textData.author.last
    )
    expect(entity.comments[0].name).toBe(mockRawContentCard.comments[0].author)
    expect(entity.comments[0].text).toBe(mockRawContentCard.comments[0].text)
    expect(entity.comments[0].image).toBe(mockRawContentCard.comments[0].profilePic)
    expect(entity.comments[0].likes).toBe(mockRawContentCard.comments[0].likes)
    expect(entity.toObject).toBeDefined()
  })
})
