import React from 'react'
import Parts from './Parts'
import Title from './Title'
import Sum from './Sum'


const Courses = ({ course }) => {
  
  return (
    <div>
        <Title course = {course}/>
        <Parts course ={course}/>
    </div>
    
  )
}



export default Courses
