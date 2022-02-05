import React, { useState } from 'react'
import blogService from '../services/blogs'
const Blog = ({blog, setBlogs, blogs}) =>{
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



  const buttonLabel = detailsVisible ? "hide": "view"
  const displayDetails = {display: detailsVisible ? "": "none"}
  console.log(blog)
  return (
    <div style={blogStyle}>
      <div>
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
      </div>
    </div>  
)
}
export default Blog