import anecdoteService from "../services/anecdotes";


const anecdoteReducer = (state = [], action) => {
switch (action.type) {
  case 'Increment': {
    return state.map((anecdote) =>
      anecdote.id === action.data.id
        ? { ...anecdote, votes: anecdote.votes + 1 }
        : anecdote
    )
  }
  case 'NewAnecdote': {
    return state.concat(action.anecdote)
  }
  case 'Initialize': {
      return action.data
  }
  default: {
  return state;
  }
}
}

export const IncrementVote = (anecdote) => {
  return async (dispatch) => {
    await anecdoteService.update({ ...anecdote, votes: anecdote.votes + 1 })
    dispatch({
      type: 'Increment',
      data: anecdote.id,
    })
  }
}

export const CreateNewAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NewAnecdote',
      anecdote,
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    console.log(anecdotes)
    dispatch({
    type: 'Initialize',
    data: anecdotes
    })
  }
}

export default anecdoteReducer