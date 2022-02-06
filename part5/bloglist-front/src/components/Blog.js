import React, { useState } from 'react'
import blogService from '../services/blogs'

const Blog = ({blog, setBlogs, blogs,  user, setErrorStatus, setMessage }) =>{
  const [detailsVisible, setDetailsVisible] = useState(false)
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const handleLikeClick = async (event) => {
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
  }

  const handleBlogDelete = async () => {
    window.confirm(`Delete ${blog.title} by ${blog.author}?`) && deleteBlog(blog.id)
  }

  const deleteBlog = async (id) => {
    await blogService.deleteById(id)
    setBlogs(blogs.filter((blog) => blog.id !== id))
    setMessage('successfully deleted')
    setErrorStatus(false)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }




  const buttonLabel = detailsVisible ? "hide": "view"
  const displayDetails = {display: detailsVisible ? "": "none"}
  console.log(blog)
  return (
    <div style={blogStyle}>
      <div className='blog'>
        {blog.title} {blog.author} <button onClick={()=> setDetailsVisible(!detailsVisible)}>{buttonLabel}</button>
      </div>
      <div style={displayDetails}>
        {blog.url}
      </div>
      <div style={displayDetails}>
        likes: {blog.likes} <button onClick={handleLikeClick}>like</button>
      </div>
      <div style={displayDetails}>
        {blog.username}
        <button id='remove' onClick={handleBlogDelete}>delete</button>
      </div>
    </div>  
)
}
export default Blog