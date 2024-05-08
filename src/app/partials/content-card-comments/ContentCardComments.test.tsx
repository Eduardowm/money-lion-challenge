import { render } from '@testing-library/react'

import { mockContentCards } from '@/data/mocks/content-cards'
import ContentCardComments from './ContentCardComments'

describe('ContentCardComments', () => {
  it('renders as expected', () => {
    const { container } = render(<ContentCardComments comments={mockContentCards[0].comments} />)

    expect(container).toMatchSnapshot()
  })
})
