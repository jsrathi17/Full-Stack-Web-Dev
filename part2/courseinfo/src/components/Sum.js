import React from 'react'

const Sum = ({ parts }) => {
    const sum = parts.map(part => part.exercises).reduce((s, p) => s + p)

    return(
      <b>Number of exercises {sum}</b>
    ) 
    console.log('Do i break here? 3')
  }

export default Sum;