import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IncrementVote } from '../reducers/anecdoteReducer'
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => {
      const filtered = state.filter === 'ALL' ? state.anecdotes : state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
      return filtered
    })

    const vote = (anecdote) => {
      dispatch(IncrementVote(anecdote))
      dispatch(setNotification(`you voted '${anecdote.content}'`, 1000))
    }


    return(
      <div>
      {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote)}>vote</button>
            </div>
          </div>
        )}
        </div>
  )
}


export default AnecdoteList