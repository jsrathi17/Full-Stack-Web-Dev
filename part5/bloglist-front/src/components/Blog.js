import React, { useState } from 'react'
import blogService from '../services/blogs'

const Blog = ({blog, handleLikeClick, deleteBlog }) =>{
  const [detailsVisible, setDetailsVisible] = useState(false)
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

 /* const handleLikeClick = async (event) => {
    event.preventDefault()
    const newBlogObj = {
      ...blog,
      likes: blog.likes+1
    }
    const  blogiD = blog.id
    await blogService.update(newBlogObj, blogiD)
    const updatedBlog = {
      ...newBlogObj,
      blogiD
    }
    setBlogs(
      blogs.map((tempBlog) => (blog.id === tempBlog.id ? updatedBlog : tempBlog))
    )
  } */

  const handleBlogDelete = async () => {
    window.confirm(`Delete ${blog.title} by ${blog.author}?`) && deleteBlog(blog.id)
  }

  /* const deleteBlog = async (id) => {
    await blogService.deleteById(id)
    setBlogs(blogs.filter((blog) => blog.id !== id))
    setMessage('successfully deleted')
    setErrorStatus(false)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  } */ 




  const buttonLabel = detailsVisible ? "hide": "view"
  /* const displayDetails = {display: detailsVisible ? "": "none"} */ 
  return (
    <div style={blogStyle}>
      <div>
        {blog.title} {blog.author} <button data-testid='view' onClick={()=> setDetailsVisible(!detailsVisible)}>{buttonLabel}</button>
      </div>
      <div>
        {blog.url}
      </div>
      <div data-testid='likes'>
        likes: {blog.likes} <button data-testid='like' onClick={handleLikeClick}>like</button>
      </div>
      <div>
        {blog.username}
        <button id='remove' onClick={handleBlogDelete}>delete</button>
      </div>
    </div>  
)
}
export default Blog