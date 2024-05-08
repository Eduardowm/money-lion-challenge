'use client'

import Button from '@/components/ui/button/Button'
import { Comment } from '@/data/entities/CommentEntity'
import * as Avatar from '@radix-ui/react-avatar'
import { useState } from 'react'

interface ContentCardCommentsProps {
  comments: Comment[]
}

function ContentCardComments({ comments }: ContentCardCommentsProps) {
  const [showComments, setShowComments] = useState<boolean>(false)

  if (!showComments) {
    return (
      <div className="px-1">
        <Button onClick={() => setShowComments(true)}>
          View {comments.length} comment{comments.length > 1 ? 's' : ''}
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col px-1 gap-4">
      <h3 className="text-white text-sm sm:text-base font-semibold">Comments</h3>
      {comments.map((comment: any) => (
        <div key={comment.text} className="flex flex-col">
          <div className="flex items-start flex-wrap sm:flex-nowrap gap-2">
            <Avatar.Root className="inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
              <Avatar.Image
                className="rounded-full object-cover"
                src={comment.image}
                alt={comment.name}
                width={45}
                height={45}
              />

              <Avatar.Fallback
                className="text-gray-900 flex h-full w-full items-center justify-center bg-white font-medium"
                delayMs={600}
              >
                {comment.name[1].toUpperCase()}
              </Avatar.Fallback>
            </Avatar.Root>

            <div className="flex flex-col grow">
              <span className="text-gray-500 text-sm sm:text-base">{comment.name}</span>
              <p className="text-gray-200 text-sm sm:text-base">{comment.text}</p>
            </div>

            <span className="text-xs text-gray-500 self-end w-full sm:w-fit">{comment.likes} likes</span>
          </div>
        </div>
      ))}
    </div>
  )
}
export default ContentCardComments
