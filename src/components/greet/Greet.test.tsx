import { render, screen } from '@testing-library/react'
import { Greet } from './Greet'

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText('Hello Guest')
    // /hello/iのように、/iを付けると大文字小文字を区別しない 。
    expect(textElement).toBeInTheDocument()
  })

  test('renders a name', () => {
    render(<Greet name="Vishwas" />)
    const textElement = screen.getByText('Hello Vishwas')
    expect(textElement).toBeInTheDocument()
  })
})
