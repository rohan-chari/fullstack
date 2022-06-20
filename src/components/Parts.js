import React from 'react'

const Parts = ({ course }) => {
  return (
    <div>
      {course.parts.map((courseName,i) => <p key = {i}>{courseName.name} {courseName.exercises}</p>)}
    </div>
    
  )
}



export default Parts
