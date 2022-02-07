import React from "react"
import { connect } from 'react-redux'
import { CreateNewAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from "../reducers/notificationReducer";


const AnecdoteForm = (props) => {
const createanecdote = async (event) => {

    event.preventDefault()
    const newAnec = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''
    console.log("newAnec")
    props.CreateNewAnecdote(newAnec)
    props.setNotification(`A new anecdote is created`)
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

const mapStateToProps = (state) => 
{  
  return {
    anecdotes: state.anecdotes,
    notification: state.notification,  
    filter: state.filter
  }
}

const mapDispatchToProps = {CreateNewAnecdote,setNotification}


const NewAnecdoteForm = connect(mapStateToProps, mapDispatchToProps)(AnecdoteForm)

export default NewAnecdoteForm