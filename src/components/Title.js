import React from 'react'

const Title = ({course}) => {
  return (
    <div>
      {course.map((courseName,i) => <h1 key = {i}>{courseName.name}</h1>)}
    </div>
    
  )
}

export default Title
