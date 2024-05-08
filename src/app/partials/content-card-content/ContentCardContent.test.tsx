import { render } from '@testing-library/react'

import { mockContentCards } from '@/data/mocks/content-cards'
import ContentCardContent from './ContentCardContent'

describe('ContentCardContent', () => {
  it('renders as expected', () => {
    const { container } = render(<ContentCardContent post={mockContentCards[0]} />)

    expect(container).toMatchSnapshot()
  })
})
