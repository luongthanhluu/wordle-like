import { render, screen } from '@testing-library/react'
import { GuessForm } from '.'

test('renders GuessForm with correct input', () => {
  const mockOnSubmit = jest.fn()
  render(<GuessForm onSubmit={mockOnSubmit} size={5} seed={1} />)
  const inputs = screen.getAllByTestId('input-guess')
  expect(inputs.length).toEqual(5)
})
