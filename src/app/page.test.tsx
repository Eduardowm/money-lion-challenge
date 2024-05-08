import { mockContentCards } from '@/data/mocks/content-cards'
import { render } from '@testing-library/react'
import { GetFeedResponse } from './api/feed/route'
import Home from './page'

async function resolvedComponent(Component: any) {
  const ComponentResolved = await Component()
  return () => ComponentResolved
}

describe('Home', () => {
  it('renders as expected without data', async () => {
    const ResolvedComponent = await resolvedComponent(Home)
    const { container } = render(<ResolvedComponent />)

    expect(container).toMatchSnapshot()
  })

  it('renders as expected with data', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({ success: true, data: mockContentCards } as GetFeedResponse),
      status: 200,
    })

    const ResolvedComponent = await resolvedComponent(Home)
    const { container } = render(<ResolvedComponent />)

    expect(container).toMatchSnapshot()
  })
})
