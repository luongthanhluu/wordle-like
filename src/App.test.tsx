import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders Wordle-like puzzle title', () => {
  render(<App />)
  const linkElement = screen.getByText(/Wordle-like puzzle/i)
  expect(linkElement).toBeInTheDocument()
})
