import React, { useState } from "react";
import blogService from '../services/blogs'

const BlogForm = ({ CreateNewBlog }) => {
    const [newTitle, setTitle] = useState("")
    const [newAuthor, setAuthor] = useState("")
    const [newUrl, setURL] = useState("")

    return (
     <form>
        <h1>create new</h1>
        <div> 
            title <input id="title" data-testid = 'title' type="text" value={newTitle} name="title" onChange={({ target }) => setTitle(target.value)} />
        </div>
        <div>
            author <input id="author" data-testid  = 'author' type="text" value={newAuthor} name="author" onChange={({ target }) => setAuthor(target.value)} />
        </div>
        <div>
            URL <input id= "url" data-testid  = 'url' type="text" value={newUrl} name="url" onChange={({ target }) => setURL(target.value)} />
        </div>
        <button id="newblog" data-testid= "newblog" onClick={() => CreateNewBlog(newTitle,newAuthor,newUrl)} type="button">Submit</button>    
    </form>
    )
}

export default BlogForm