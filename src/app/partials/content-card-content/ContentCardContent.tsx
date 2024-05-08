'use client'

import Button from '@/components/ui/button/Button'
import { ContentCard } from '@/data/entities/ContentCardEntity'
import { cn } from '@/lib/helpers/tailwind'
import { useState } from 'react'

interface ContentCardContentProps {
  post: ContentCard
}

function ContentCardContent({ post }: ContentCardContentProps) {
  const [showFullContent, setShowFullContent] = useState<boolean>(false)

  return (
    <div className="flex flex-col px-1">
      <div className="flex w-full justify-between">
        <div className="flex flex-col">
          <h2 className="text-base sm:text-lg font-semibold">{post.title}</h2>
          <p className="text-sm sm:text-base text-gray-400">{post.subtitle}</p>
        </div>
        {post.author && (
          <span className="text-gray-400 text-nowrap w-fit text-sm sm:text-base">{post.author.name}</span>
        )}
      </div>

      <div className={cn('w-full text-sm sm:text-base mt-2', !showFullContent && 'text-lines-limit-3')}>
        {post.content}
      </div>

      {!showFullContent && (
        <div className="flex justify-end">
          <Button className="text-right text-sm sm:text-base" onClick={() => setShowFullContent(true)}>
            Read more
          </Button>
        </div>
      )}
    </div>
  )
}
export default ContentCardContent
