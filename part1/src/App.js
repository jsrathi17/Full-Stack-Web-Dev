import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  console.log(good)

  return (
    <div> 
    <h1>give feedback</h1>
    <button onClick={() => setGood(good + 1)}>good</button>
    <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
    <button onClick={() => setBad(bad + 1)}>bad</button>
    <h1>statistics</h1>
    
     good {good} <br/>
     neutral {neutral} <br/>
    bad {bad} 
    
    </div>
    )
}

// const Display = (props) => {

//   good = props.good
//   bad = props.bad
//   neutral = props.neutral

//   return(
//     <div>
//       good {good}
//       neutral {neutral}
//       bad {bad}
//     </div>
//   )

// }

export default App