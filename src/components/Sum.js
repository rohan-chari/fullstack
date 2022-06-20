import React from 'react'

const Sum = ({course}) => {
  return (
    <div>
       {course.parts.map((courseName,i) => <p key = {i}>{courseName.exercises}</p>)}
    </div>
  )
}




export default Sum
