import { combineReducers } from 'redux'
import { createStore } from 'redux'
import anecdoteReducer from './reducers/anecdoteReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    anecdotes: anecdoteReducer
})

const store = createStore(reducer, composeWithDevTools())

export default store 