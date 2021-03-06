import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'
import Toggable from './Toggable'
import BlogForm from './Form'


describe('<Toggable />', () => {


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


  test('clicking the button calls event handler once', () => {
    const blog = {
        url: 'github.com/jsrathi17',
        title: 'Life is AMAZING',
        author: 'jsr',
        likes : 10
      }
    const mockHandler = jest.fn()
    const component = render(<Blog blog={blog} />)
    component.debug()
    const button = component.getByText('view')
    fireEvent.click(button)
    const likes = component.getByTestId('likes')
    expect(likes).toHaveTextContent('10')
  })



  test('clicking the like button increases like by one', async () => {
    const blog = {
        url: 'github.com/jsrathi17',
        title: 'Life is AMAZING',
        author: 'jsr',
        likes : 10
      }
    const mockHandler = jest.fn()

    const component = render(<Blog blog={blog} handleLikeClick={mockHandler} />)
    const button = component.getByTestId('view')
    fireEvent.click(button)
    const likebutton = component.getByTestId('like')
    fireEvent.click(likebutton)
    fireEvent.click(likebutton)


    expect(mockHandler.mock.calls).toHaveLength(2)
  })


test('tests blog creation form', async () => {
  const NewBlog = jest.fn()
  const component = render(
    <BlogForm CreateNewBlog={NewBlog}/>
  )
component.debug()
  const title = component.getByTestId('title')
  fireEvent.change(title, { target: { value: 'What is LYF' } })
  const authr = component.getByTestId('author')
  fireEvent.change(authr, { target: { value: 'Jss' } })
  const urls = component.getByTestId('url')
  fireEvent.change(urls, { target: { value: 'whatislife.com' } })

  fireEvent.click(component.getByTestId('newblog'))

  expect(NewBlog).toBeCalledWith(
    'What is LYF',
    'Jss',
    'whatislife.com'
  )
})

})