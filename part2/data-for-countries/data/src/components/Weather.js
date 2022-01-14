import React, { useEffect, useState } from 'react'

const Weather = (props) => {
  

  return (
    <div> 
        <h2>Weather in {props.capital}</h2>
        <b>temperature:</b> {props.weather.current.temperature} Celcius
        <img src={props.weather.current.weather_icons[0]} alt="weather_icon" width="150" height="150"/>
        <b> wind:</b> {props.weather.current.wind_speed} mph direction {props.weather.current.wind_dir}
     </div>
   
  )
}



export default Weather