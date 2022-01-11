import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons ] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const duplicatepersons = persons.find((person)=>person.name === newName)
    if(duplicatepersons === undefined ){
    const newPerson = {
      name: newName, 
      number: newNumber
    }
    setPersons(persons.concat(newPerson)) 
  }
   setNewName('')

  }

  const handlenameAdd = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlenumberAdd = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addName}>
        <div> name: <input value = {newName} onChange={handlenameAdd} /></div>
        <div> number: <input value = {newNumber} onChange={handlenumberAdd} /></div>
          <button type="submit">add</button>
        
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <Person key={person.name} person={person} /> )}
  
      </ul>
    </div>
    
  )
}

export default App