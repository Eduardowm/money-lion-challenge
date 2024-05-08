import { render } from '@testing-library/react'

import { mockContentCards } from '@/data/mocks/content-cards'
import ContentCardsList from './ContentCardsList'

describe('ContentCardsList', () => {
  it('renders as expected', () => {
    const { container } = render(<ContentCardsList posts={mockContentCards} />)

    expect(container).toMatchSnapshot()
  })
})
