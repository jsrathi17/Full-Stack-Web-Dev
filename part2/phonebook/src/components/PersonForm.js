import React from 'react'

const PersonForm = (props) => { 
    return (
<div> <form onSubmit = {props.addName}>
        <div> name: <input value = {props.newName} onChange={props.handlenameAdd} /></div>
        <div> number: <input value = {props.newNumber} onChange={props.handlenumberAdd} /></div>
          <button type="submit">add</button> 
      </form>   </div>
    )
}

export default PersonForm