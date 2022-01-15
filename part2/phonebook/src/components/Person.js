import React from 'react'

const Person = ({ person, deletePerson }) => {
  return (
    <li key={person.name}>{person.name} {person.number} <button onClick={() => deletePerson(person.id, person.name)}> DELETE </button> </li>
  )
}

export default Person