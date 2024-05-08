import { ContentCard as ContentCardType } from '@/data/entities/ContentCardEntity'
import ContentCard from '../content-card/ContentCard'

interface ContentCardsListProps {
  posts: ContentCardType[]
}

function ContentCardsList({ posts }: ContentCardsListProps) {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl text-center">Feed</h1>

      {posts.map((post: any) => (
        <ContentCard key={post.id} post={post} />
      ))}
    </div>
  )
}
export default ContentCardsList
