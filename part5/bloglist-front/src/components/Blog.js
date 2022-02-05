import React, { useState } from 'react'

const Blog = ({blog}) =>{
  const [detailsVisible, setDetailsVisible] = useState(false)
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
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
        likes: {blog.likes} <button onClick={null}>like</button>
      </div>
      <div style={displayDetails}>
        {blog.username}
      </div>
    </div>  
)
}
export default Blog