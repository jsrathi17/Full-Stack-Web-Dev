import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import ErrorClass from './components/ErrorClass'
import Notif from './components/Notif'
import Form from './components/Form'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null)
  const [errorStatus, setErrorStatus] = useState(false)

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

const successLogin = () => (
  <div>
    You are logged in as {user.name}!  <button onClick={handleLogout}>log out</button>
  </div>
)




  return (
    <div>
      <h2>blogs</h2>
      
      <ErrorClass message={errorMessage} className={errorClass}/>
        {user === null ?
          loginForm() :
          <div>
            {successLogin()}
          </div>
        }
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
}

export default App