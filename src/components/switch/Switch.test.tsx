import React from 'react'
import Switch from './Switch'
import { render, screen } from '@testing-library/react'

it('renders learn react link', () => {
  render(
    <Switch id="test-switch" onChange={() => {}}>
      Toggle Me
    </Switch>
  )
  const linkElement = screen.getByText(/Toggle Me/i)
  expect(linkElement).toBeInTheDocument()
})
