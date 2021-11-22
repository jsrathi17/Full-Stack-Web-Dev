import React from 'react'
import Header from './Header'
import Part from './Part'
import Sum from './Sum'

const Course = ({ course }) => {
  return (
    <div>
    <Header name={course.name} />
    {course.parts.map(part => <Part name={part.name} exercises={part.exercises}/> )}
    <Sum parts = {course.parts} />

    </div>
  )
}

export default Course;