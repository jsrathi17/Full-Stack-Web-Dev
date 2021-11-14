import React from 'react'

const Header= (props) => 
{
 
 return (
   <div>
     <h1>
       
        <p> {props.course} </p> </h1>  </div>
        )  
}
const Part= (props) =>
{
 
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Content= (props) => 
{
 
 return (
   <>

        
          <Part part = {props.parts[0].name} exercises= {props.parts[0].exercises} /> 
          <Part part ={props.parts[1].name} exercises= {props.parts[1].exercises} /> 
          <Part part = {props.parts[1].name} exercises= {props.parts[2].exercises} /> 
          
        
        </>
        )  
}

const Total= (props) => 
{
  
 
  console.log(props.parts)
 return (
   <div>

        <p> Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p>        
        </div>
        )  
}


const App = () => {
  const course = 
  { name: 'Half Stack application development',
   parts: [ 
  {
    name: 'Fundamentals of React',
    exercises: 10
  }, 

  {
    name: 'Using props to pass data',
    exercises: 7
  }, 
  {
    name: 'State of a component',
    exercises: 14
  } 
]
  }
  return (
<>
<Header course = {course.name} />
<Content parts = {course.parts} />
<Total parts = {course.parts}/>
</>
  )
}

export default App