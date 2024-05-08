import { render } from '@testing-library/react'

import MainLayout from './MainLayout'

describe('MainLayout', () => {
  it('renders as expected', () => {
    const { container } = render(<MainLayout>This is the main layout content</MainLayout>)

    expect(container).toMatchSnapshot()
  })
})
