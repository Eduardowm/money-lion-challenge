import { cn } from './tailwind'

describe('cn', () => {
  it('returns an empty string when no arguments are provided', () => {
    const result = cn()
    expect(result).toBe('')
  })

  it('returns a single class name when only one argument is provided', () => {
    const result = cn('text-red-500')
    expect(result).toBe('text-red-500')
  })

  it('merges multiple class names into a single string', () => {
    const result = cn('text-red-500', 'bg-blue-200', 'font-bold')
    expect(result).toBe('text-red-500 bg-blue-200 font-bold')
  })

  it('ignores falsy values', () => {
    const result = cn('text-red-500', null, undefined, false, 'bg-blue-200', '', 'font-bold')
    expect(result).toBe('text-red-500 bg-blue-200 font-bold')
  })
})
