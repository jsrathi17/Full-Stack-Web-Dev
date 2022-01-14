
import Weather from './Weather'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Country = (props) => {

  const [weather,setWeather] = useState({})
    const access_key = process.env.REACT_APP_API_KEY
    useEffect(()=>{
        const url =`http://api.weatherstack.com/current?access_key=${access_key}&query=${props.country.capital}`
        axios
        .get(url)
        .then((response)=>{
            setWeather(response.data)
        })
    },[])


  console.log(props.country.name)
  return (
    <div> <h2> {props.country.name} </h2><ul> <li> capital {props.country.capital} </li>
          <li> population {props.country.population} </li> </ul> 

        <h2> Spoken Languages </h2>
        <ul>
        {props.country.languages.map((language)=><li key = {language.name}>{language.name}</li>)} </ul>

        <img src={props.country.flag} alt="Flag" width="200" height="200"/>
        <Weather capital={props.country.capital}  weather={weather}/>
     </div>
   
  )
}

export default Country
