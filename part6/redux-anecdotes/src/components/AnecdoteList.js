import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IncrementVote } from '../reducers/anecdoteReducer'
import { removeNotification, setNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
    

    const dispatch = useDispatch()
    const anecdotes = useSelector(state => {
        const filtered = state.filter === 'ALL' ? state.anecdotes : state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
        return filtered
      })
    console.log(anecdotes)

    const vote = (id) => {
      console.log('vote', id)
      dispatch(IncrementVote(id))
      let anecdote = anecdotes.find(a => a.id === id)
      dispatch(setNotification(`you voted '${anecdote.content}'`))
      setTimeout(() => {
        dispatch(removeNotification())
      }, 3000);
    }

    return (
        <div>
    
        {anecdotes.sort((a,b) => b.votes - a.votes) && anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
            </div>
        )}
        </div>
        )
    


}



export default AnecdoteList