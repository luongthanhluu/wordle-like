import { render, screen } from '@testing-library/react'
import { HomePage } from '.'

test('renders Wordle-like puzzle title', () => {
  render(<HomePage />)
  const title = screen.getByText(/Wordle-like puzzle/i)
  expect(title).toBeInTheDocument()
})
