import { render } from '@testing-library/react'

import ContentCardImage from './ContentCardImage'

describe('ContentCardImage', () => {
  it('renders as expected', () => {
    const { container } = render(<ContentCardImage source="/mock-source" alt="Mock alt" />)

    expect(container).toMatchSnapshot()
  })
})
