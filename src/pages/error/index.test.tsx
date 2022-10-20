import { render, screen } from '@testing-library/react'
import { ErrorPage } from '.'

test('renders something went wrong message', () => {
  render(<ErrorPage />)
  const message = screen.getByText(/something went wrong/i)
  expect(message).toBeInTheDocument()
})
