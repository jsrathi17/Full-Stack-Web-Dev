import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from './Blog'

test('renders content', () => {
  const blog = {
    url: 'github.com/jsrathi17',
    title: 'Life is AMAZING',
    author: 'jsr',
    likes : 10
  }

  const component = render(<Blog blog={blog}/>)
  expect(component.container).toHaveTextContent(
    'github.com/jsrathi17'
  )
  expect(component.container.user).toBeUndefined()
  expect(component.container.likes).toBeUndefined()
})