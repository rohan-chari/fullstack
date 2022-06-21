import React from 'react'

/*const Sum = ({course}) => {
  let sum = 0
  course.parts.forEach(element => {
    sum+= element.exercises
  });
  return (
    <div>
      <strong>total of {sum} exercises</strong>
    </div>
  )
}*/

const Sum = ({course}) => {
  const total = course.reduce((sum, part)=> sum + part.exercises, 0)
  return <strong>total of {total} exercises</strong>
}






export default Sum
