import React from 'react'

const FilterForm = (props) => {
  if(props.countries.length > 10) {
    return (
      <div> <p>too many matches, specify another filter</p> </div>
    )
  }
  else if(props.countries.length === 0) {
    return <></>
  }

  else {
    return (
        <ul>
          {props.countries.map(county => <li key={county.name}>{county.name}</li>)}
        </ul>
    )
  }
  
}

export default FilterForm

