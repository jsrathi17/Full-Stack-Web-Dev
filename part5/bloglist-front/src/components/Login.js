import React from 'react'
import loginService from '../services/login' 
import blogService from '../services/blogs'

const Login = ({setErrorStatus, user, username, password, setUser, setUsername, setPassword, setErrorMessage}) => {

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await loginService.login({username, password,})

            window.localStorage.setItem(
                'loggedBlogAppUser', JSON.stringify(user)
            )
            blogService.setToken(user.token)
            setUser(user)
            setUsername('')
            setPassword('')
        } catch (exception) {
            setErrorMessage('Wrong credentials! Please check username and password and type again.')
            setErrorStatus(true)
            setTimeout(() => {setErrorMessage(null)}, 5000)
        }  
        console.log('logging in with user', username, password)
    }


    return(   
        <form onSubmit={handleLogin}>
            <div> 
                username <input type="text" value={username} name="Username" onChange={({ target }) => setUsername(target.value)} />
            </div>
            <div>
                password <input type="password" value={password} name="Password" onChange={({ target }) => setPassword(target.value)} />
            </div>
            <button type="submit">login</button>
        </form>
    )
}

export default Login