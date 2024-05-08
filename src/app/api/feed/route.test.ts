/**
 * @jest-environment node
 */

import { mockContentCards, mockRawContentCard } from '@/data/mocks/content-cards'
import { GET, GetFeedResponse } from './route'

describe('GET', () => {
  beforeAll(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({ contentCards: [mockRawContentCard] }),
      status: 200,
    })
  })

  it('should return a successful response with content cards', async () => {
    const response = await GET()
    const result: GetFeedResponse = await response.json()

    expect(result.success).toBe(true)
    expect(result.data[0]).toEqual(mockContentCards[0])
    expect(result.error).toBeUndefined()
  })

  it('should return an error response when the fetch fails', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('Failed to fetch'))

    const response = await GET()
    const result: GetFeedResponse = await response.json()

    expect(result.success).toBe(false)
    expect(result.data.length).toBe(0)
    expect(result.error).toBe('An unexpected error happened while requesting the feed data.')
  })
})
