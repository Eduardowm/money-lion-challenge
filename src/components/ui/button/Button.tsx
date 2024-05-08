import { cn } from '@/lib/helpers/tailwind'
import { PropsWithChildren } from 'react'

interface ButtonProps extends PropsWithChildren {
  className?: string
  onClick?: () => void
}

function Button({ className, onClick, children }: ButtonProps) {
  return (
    <button className={cn('text-gray-500 hover:text-gray-300', className)} onClick={onClick}>
      {children}
    </button>
  )
}
export default Button
