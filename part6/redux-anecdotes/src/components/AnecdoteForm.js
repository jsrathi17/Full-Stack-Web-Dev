import React from "react"
import { useDispatch } from "react-redux"
import { CreateNewAnecdote } from '../reducers/anecdoteReducer'
import { removeNotification, setNotification } from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdotes";

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    console.log("in form")
const createanecdote = async (event) => {

    event.preventDefault()
    const newAnec = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''
    console.log("newAnec")
    dispatch(CreateNewAnecdote(newAnec))
    dispatch(setNotification(`A new anecdote is created`))
  }
  
 return (
     <>
    <h2>create new</h2>
    <form onSubmit={createanecdote}>
      <div><input name='newAnecdote'/></div>
      <button type='submit'>create</button>
    </form>
  </>

 )


}

export default AnecdoteForm