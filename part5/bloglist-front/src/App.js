import React, { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import Notif from './components/Notif'
import BlogForm from './components/Form'
import Login from './components/Login'
import Toggable from './components/Toggable'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null)
  const [errorStatus, setErrorStatus] = useState(false)
  const blogFormRef = useRef()


/* get all blogs */
  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])



  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])


  const handleLogout = () => {
    window.localStorage.clear()
    setUser(null)      
}


return (
  <div>

    <h2>blogs</h2>
    <Notif message={message} errorStatus={errorStatus} />
    {user === null ?
    <Login setErrorMessage = {setMessage} setErrorStatus={setErrorStatus} user={user} username={username} password={password} setUser={setUser} setPassword={setPassword} setUsername={setUsername}/> :
    <div>
      <p>{user.name} logged in as {user.name}</p>
      <button onClick={handleLogout}>logout</button>
       <Toggable buttonLabel="create new blog" ref={blogFormRef}>
          <BlogForm blogFormRef={blogFormRef} setMessage={setMessage} setErrorStatus={setErrorStatus} blogs={blogs} setBlogs={setBlogs}/>
        </Toggable>
        {blogs.sort((a, b) => (a.likes > b.likes ? -1 : 1)) && 
      blogs.map(blog =>
         <Blog key={blog.id} user={user} blog={blog} setBlogs={setBlogs} blogs={blogs} setErrorStatus={setErrorStatus} setMessage={setMessage} />
      )
      }
    </div>
    }
  </div>
)
}

export default App