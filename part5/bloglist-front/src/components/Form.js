import React, { useState } from "react";
import blogService from '../services/blogs'

const BlogForm = ({blogFormRef, setMessage,setErrorStatus, blogs, setBlogs}) => {
    const [newTitle, setTitle] = useState("")
    const [newAuthor, setAuthor] = useState("")
    const [newUrl, setURL] = useState("")

    const CreateNewBlog = async (event) => {
        event.preventDefault()
        blogFormRef.current.toggleVisibility()
        try{
            const newBlogObject = {
                title: newTitle,
                author: newAuthor,
                url: newUrl
            }
            const response = await blogService.create(newBlogObject)
            const newBlogs = [...blogs, response]
            setBlogs(newBlogs)
            setMessage("a new blog is added")
            setErrorStatus(false)
            setTimeout(() => {setMessage(null)}, 5000)

        }
        catch(exception){
            console.log(exception)
            setMessage('Wrong credentials')
            setErrorStatus(true)
            setTimeout(() => {setMessage(null)}, 5000)
        }

    }

    return (
     <form onSubmit={CreateNewBlog}>
        <h1>create new</h1>
        <div> 
            title <input type="text" value={newTitle} name="title" onChange={({ target }) => setTitle(target.value)} />
        </div>
        <div>
            author <input type="text" value={newAuthor} name="author" onChange={({ target }) => setAuthor(target.value)} />
        </div>
        <div>
            URL <input type="text" value={newUrl} name="url" onChange={({ target }) => setURL(target.value)} />
        </div>
        <button type="submit">Submit</button>    
    </form>
    )
}

export default BlogForm