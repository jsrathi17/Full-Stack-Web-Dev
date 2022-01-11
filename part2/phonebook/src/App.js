import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons ] = useState([])
 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName
    }
    setPersons(persons.concat(newPerson)) 
   
    setNewName('')

  }

  const handlenameAdd = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addName}>
        <input value = {newName} onChange={handlenameAdd} />
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