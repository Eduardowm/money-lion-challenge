import { fireEvent, render, screen } from '@testing-library/react'

import Button from './Button'

describe('Button', () => {
  it('renders as expected', () => {
    const { container } = render(<Button>Button Text</Button>)

    expect(container).toMatchSnapshot()
  })

  it('renders as expected with optional props', () => {
    const { container } = render(
      <Button className="w-full" onClick={() => {}}>
        Button Text
      </Button>
    )

    expect(container).toMatchSnapshot()
  })

  it('calls onClick when user clicks the button', () => {
    const mockOnClick = jest.fn()
    render(<Button onClick={mockOnClick}>Button Text</Button>)

    fireEvent.click(screen.getByText('Button Text'))

    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})
