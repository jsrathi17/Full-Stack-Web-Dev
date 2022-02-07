import React from "react"
import { useDispatch } from "react-redux"
import { CreateNewAnecdote } from '../reducers/anecdoteReducer'
import { removeNotification, setNotification } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
    const dispatch = useDispatch()

const createanecdote = (event) => {
    event.preventDefault()
    const newAnec = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''
    dispatch(CreateNewAnecdote(newAnec))
    setTimeout(() => {
        dispatch(removeNotification())
    }, 3000)
    dispatch(setNotification(`A new anecdote is created`))
  }
  
 return (
     <div>
    <h2>create new</h2>
    <form onSubmit={createanecdote}>
      <div><input name='newAnecdote'/></div>
      <button type='submit'>create</button>
    </form>
  </div>

 )


}

export default AnecdoteForm