'use client'

import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'

interface ContentCardImageProps {
  source: string
  alt: string
}

function ContentCardImage({ source, alt }: ContentCardImageProps) {
  return (
    <AspectRatio.Root ratio={16 / 12}>
      <Image className="rounded" src={source} alt={alt} fill />
    </AspectRatio.Root>
  )
}
export default ContentCardImage
