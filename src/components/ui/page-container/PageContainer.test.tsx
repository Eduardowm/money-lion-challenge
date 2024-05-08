import { render } from '@testing-library/react'

import PageContainer from './PageContainer'

describe('PageContainer', () => {
  it('renders as expected', () => {
    const { container } = render(<PageContainer>This is the page container content</PageContainer>)

    expect(container).toMatchSnapshot()
  })
})
