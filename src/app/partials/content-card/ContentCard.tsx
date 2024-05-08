import { ContentCard as ContentCardType } from '@/data/entities/ContentCardEntity'
import ContentCardComments from '../content-card-comments/ContentCardComments'
import ContentCardContent from '../content-card-content/ContentCardContent'
import ContentCardImage from '../content-card-image/ContentCardImage'

interface ContentCardProps {
  post: ContentCardType
}

function ContentCard({ post }: ContentCardProps) {
  return (
    <div className="flex flex-col gap-2 p-2 border border-gray-800 rounded">
      <ContentCardImage source={post.image} alt={post.title} />
      <ContentCardContent post={post} />

      <hr className="border-gray-800 mx-[-8px]" />

      <ContentCardComments comments={post.comments} />
    </div>
  )
}
export default ContentCard
