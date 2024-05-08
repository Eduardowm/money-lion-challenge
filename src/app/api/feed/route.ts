import ContentCardEntity, { ContentCard } from '@/data/entities/ContentCardEntity'
import ContentCardModel, { IContentCardModel } from '@/data/models/ContentCardModel'
import { notEmpty } from '@/lib/helpers/filters'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export interface ContentCardResponse {
  contentCards: IContentCardModel[]
}

export interface GetFeedResponse {
  success: boolean
  data: ContentCard[]
  error?: string
}

async function getContentCards() {
  const response = await fetch('https://stoplight.io/mocks/engine/fullstack-spec/52502230/content', {
    headers: {
      accept: 'application/json',
      prefer: 'code 200, dynamic=true',
    },
  })
  const result: ContentCardResponse = await response.json()

  return result.contentCards
}

export async function GET(): Promise<NextResponse<GetFeedResponse>> {
  try {
    const contentCards = await getContentCards()
    const entities = contentCards
      .map((cc) => {
        const model = new ContentCardModel(cc)
        if (!model.isValid()) return null

        return new ContentCardEntity(model).toObject()
      })
      .filter(notEmpty)

    const sortedEntities = entities.sort((a, b) => a.priority - b.priority)

    return NextResponse.json({ success: true, data: sortedEntities }, { status: 200 })
  } catch (e: unknown) {
    return NextResponse.json(
      {
        success: false,
        data: [],
        error: 'An unexpected error happened while requesting the feed data.',
      },
      { status: 500 }
    )
  }
}
