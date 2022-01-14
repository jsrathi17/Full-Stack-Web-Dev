import React from 'react'
import Country from './Country'
import Show from './Show'

const FilterForm = (props) => {
  if(props.countries.length > 10) {
    return (
      <div> <p>too many matches, specify another filter</p> </div>
    )
  }
  else if(props.countries.length === 0) {
    return <></>
  }
  else if (props.countries.length === 1){
    return <Country country = {props.countries[0]}/>
  }
  else {
    console.log(props.countries[0])
    return (
      
        <ul>
          
          {props.countries.map(county => <li key={county.name}>{county.name} <Show name="show" handleClick={()=>props.handleClick(county)}/></li>)}
        </ul>
    )
  }
  
}

export default FilterForm

