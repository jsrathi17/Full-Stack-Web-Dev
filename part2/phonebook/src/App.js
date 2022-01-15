import React, { useState, useEffect  } from 'react'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personservice from './services/persons'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons ] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilterName] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [isError, setIsError] = useState(false)


  useEffect(() => {
    console.log('effect')
    personservice.getAll().then((newperson)=>{
      setPersons(newperson)
    }) 
  }, [])


  const addName = (event) => {
    event.preventDefault()
    const duplicatepersons = persons.find((person)=>person.name === newName)
    if(duplicatepersons === undefined ){
    const newPerson = {
      name: newName, 
      number: newNumber
    }
    personservice.create(newPerson)
    .then(createdperson => {
      setPersons(persons.concat(createdperson))
      console.log(createdperson.name + "is added")
      setErrorMessage(`${createdperson.name} is added`)
      setTimeout(() => setErrorMessage(null), 3000)
    })
  }

  else
  {
    const data = window.confirm(`${duplicatepersons.name} is already added to phonebook, replace the old number with a new one?`)
    if(data) {
      const persontoupdate = {...duplicatepersons, number: newNumber}
      personservice.update(persontoupdate).then(updatedPerson => {
          setPersons(persons.map(person => person.id !== updatedPerson.id ? person : updatedPerson))
          setErrorMessage(
            `Updated '${updatedPerson.name}'`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)}).catch(error => {
            setIsError(true)
            setErrorMessage(
              `Couldn't update '${duplicatepersons.name}'`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          })
  }
  }
   setNewName('')
   setNewNumber('')
  }

  const handlenameAdd = (event) => { setNewName(event.target.value) }
  const handlenumberAdd = (event) => { setNewNumber(event.target.value) }
  const handlefilterChange = (event) => {setFilterName(event.target.value)}
  const filterpersons = newFilter === '' ? persons : persons.filter(person => person.name.toUpperCase().includes(newFilter.toUpperCase()))

  const deletePerson = (id, name) => {
    if(window.confirm('Would you like to delete ' + name + '?')){
      personservice.deleteId(id).then(() => {
        const newPersons = persons.filter((item => item.id !== id))
        setPersons(newPersons)
      })
    }
  }


  return (
    <div>
      <Notification message={errorMessage} errorStatus={isError}/>

      <h2>Phonebook</h2>

      <div> <Filter newFilter={newFilter} handlefilterChange={handlefilterChange} /> </div>
      <h1> add a new </h1>
      <div><PersonForm newName={newName} newNumber={newNumber} addName={addName} handlenameAdd={handlenameAdd} handlenumberAdd={handlenumberAdd}/></div>

      <h2>Numbers</h2>

      <ul>
        {filterpersons.map(person => <Person key={person.name} person={person} deletePerson={deletePerson} /> )}
  
      </ul>
    </div>
    
  )
}

export default App