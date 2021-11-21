import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const a = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
  let popular = {};
  const max = Math.max(...points)
  Object.keys(points).forEach((point) => {
    if (points[point] === max) {
      popular = point;
    }
  })
  

  const Vote = () => {
    const copy = [...points]
    copy[selected]++
    setPoints(copy)
    
  }

  return (
    <div>
      <h1> Anecdote of the day </h1>
      <p> {anecdotes[selected]} <br/>
      has {points[selected]} votes </p>
      <button onClick = {() => setSelected(a)}>next anecdote</button>
      <button onClick = {Vote}>vote</button>

      <h1> Anecdote with most Votes</h1>
      <p> {anecdotes[popular]} has {points[popular]} votes </p>
    </div>
  )
}

export default App