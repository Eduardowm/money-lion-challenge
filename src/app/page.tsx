import PageContainer from '@/components/ui/page-container/PageContainer'
import { GetFeedResponse } from './api/feed/route'
import ContentCardsList from './partials/content-cards-list/ContentCardsList'

async function fetchFeed() {
  try {
    const response = await fetch('http://localhost:3000/api/feed')
    const result: GetFeedResponse = await response.json()

    return result.data
  } catch (e: unknown) {
    return []
  }
}

export default async function Home() {
  const feed = await fetchFeed()

  return (
    <PageContainer>
      <div className="flex flex-col gap-2 w-full">
        <ContentCardsList posts={feed} />
      </div>
    </PageContainer>
  )
}
