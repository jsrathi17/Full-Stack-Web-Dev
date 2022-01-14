import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FilterForm from './components/FilterForm' 

function App() {

  const [country, setCountries] = useState([])
  const [filtername, setFiltername] = useState('')

  

  useEffect(()=>{
    axios
    .get('https://restcountries.com/v2/all')
    .then((reponse) => {
      setCountries(reponse.data)
    })
  },[])


  const countriestodisplay = filtername === "" ? [] : country.filter(county => county.name.toUpperCase().includes(filtername.toUpperCase())) 

  const handleFilterChange = (event) => setFiltername(event.target.value)


  return (
    <div>
      <div>
        find countries <input value={filtername} onChange={handleFilterChange}/>
      </div>
      <h2> list of countries are </h2>
      <div>
          <FilterForm countries={countriestodisplay}/>
      </div>
      
    </div>
  );
}

export default App;
