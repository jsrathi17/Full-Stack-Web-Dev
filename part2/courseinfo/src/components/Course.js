import React from 'react'
import Header from './Header'
import Part from './Part'
import Sum from './Sum'

const Course = ({ course }) => {
  return (
    <div>
    <Header name={course.name} />
    <Part name = {course.parts[0].name} exercises ={course.parts[0].exercises} />
    <Part name = {course.parts[1].name} exercises ={course.parts[1].exercises} />
    <Part name = {course.parts[2].name} exercises ={course.parts[2].exercises} />
    <Sum total = {course.parts[2].exercises +course.parts[0].exercises +course.parts[1].exercises } />

    </div>
  )
}

export default Course;