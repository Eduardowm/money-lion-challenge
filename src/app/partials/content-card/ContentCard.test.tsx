import { render } from '@testing-library/react'

import { mockContentCards } from '@/data/mocks/content-cards'
import ContentCard from './ContentCard'

describe('ContentCard', () => {
  it('renders as expected', () => {
    const { container } = render(<ContentCard post={mockContentCards[0]} />)

    expect(container).toMatchSnapshot()
  })
})
