import React, { useState } from 'react'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'


const App = () => {
  const [persons, setPersons ] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilterName] = useState('')

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
   setNewNumber('')
  }

  const handlenameAdd = (event) => { setNewName(event.target.value) }
  const handlenumberAdd = (event) => { setNewNumber(event.target.value) }
  const handlefilterChange = (event) => {setFilterName(event.target.value)}
  const filterpersons = newFilter === '' ? persons : persons.filter(person => person.name.toUpperCase().includes(newFilter.toUpperCase()))


  return (
    <div>
      <h2>Phonebook</h2>

      <div> <Filter newFilter={newFilter} handlefilterChange={handlefilterChange} /> </div>
      <h1> add a new </h1>
      <div><PersonForm newName={newName} newNumber={newNumber} addName={addName} handlenameAdd={handlenameAdd} handlenumberAdd={handlenumberAdd}/></div>

      <h2>Numbers</h2>

      <ul>
        {filterpersons.map(person => <Person key={person.name} person={person} /> )}
  
      </ul>
    </div>
    
  )
}

export default App