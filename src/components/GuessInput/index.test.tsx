import { render, screen } from '@testing-library/react'
import { GuessInput } from '.'

test('renders GuessInput', () => {
  const mockSetValue = jest.fn()
  render(<GuessInput value="" index={1} setValue={mockSetValue} />)
  expect(screen).toMatchSnapshot()
})
