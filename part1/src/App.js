import React, { useState } from 'react'

const Button = (props) =>
{
  return (
    <div> 
    <button onClick = {props.onClick} > {props.text} </button>
    </div>
  )
}

const StatisticsLine = (props) =>
{
  return (
    <tr>
      <td>{props.text}</td>
      <td> {props.value} </td>
    </tr>
  )
}

const Statistics = ({good, bad, neutral}) =>
{
  if (good === 0 && bad === 0 && neutral ===0)
  {
  return (
    <div>
      <p>No feedback given </p>
    </div>
  )
  }
  else 
  {
  return (

    <div>
    <h1>statistics</h1>
    <StatisticsLine text= 'good' value = {good} />
    <StatisticsLine text= 'neutral' value = {neutral} />
    <StatisticsLine text= 'bad' value = {bad} />
    <StatisticsLine text= 'all' value = {good + neutral + bad} />
    <StatisticsLine text= 'average' value = {good/3 + neutral /3 + bad/3}/>
    <StatisticsLine text= 'positive' value = {`${(good * 100) / (good + neutral + bad)} %`} />
    </div>

  )
  }

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  console.log(good)
  

  return (
    <div> 
    <h1>give feedback</h1>
    console.log('Did i break here?')
    <Button onClick={() => setGood(good + 1)} text = 'good' />
    <Button onClick={() => setNeutral(neutral + 1)} text = 'neutral' />
    <Button onClick={() => setBad(bad + 1)} text ='bad' />
     
    <Statistics good={good} bad={bad} neutral={neutral} />

    </div>
    )
}




export default App