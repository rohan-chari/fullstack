import React from 'react'

const Parts = ({ course }) => {
  
  return (
    <div>
      {course.map((courseName,i) => <p key = {i}>{courseName}</p>)}
    </div>
    
  )
}



export default Parts
