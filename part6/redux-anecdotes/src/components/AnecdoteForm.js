import React from "react"
import { useDispatch } from "react-redux"
import { CreateNewAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

const createanecdote = (event) => {
    event.preventDefault()
    const newAnec = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''
    dispatch(CreateNewAnecdote(newAnec))
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