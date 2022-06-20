//imports
import { useState } from 'react'
import Parts from './components/Parts'
import Title from './components/Title'
import Sum from './components/Sum'



// /* EXAMPLES FOR 1B */
// const Header = (props) => {
//   return(
//     <div> 
      
//       <h1>{props.course}</h1>
      
//     </div>
//   )
// }

// const Part = (props) => {

//   return(
//     <div>
//      {props.part} {props.exercises}
//     </div>
//   )



// }
// const Content = (props) => {
//   return(
//     <div>
//       <p>
//         <Part part = {props.parts[0].name} exercises = {props.parts[0].exercises}/>
//         <Part part = {props.parts[1].name} exercises = {props.parts[1].exercises}/>
//         <Part part = {props.parts[2].name} exercises = {props.parts[2].exercises}/>
//       </p>
//     </div>
//   )
  
// }
// const Total = (props) => {
//   return(
//     <div>
//       <p>
//         {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}
//       </p>
//     </div>
//   )
  
// }
// /* EXAMPLES FOR 1B */

// /* EXAMPLES FOR 1C */
// const Hello = ({name, years}) => {

//   const bornYear = () => new Date().getFullYear() - years
  
//   return(
//     <div>
//       <p>
//         Hello {name}, you are {years} years old
//       </p>
//       <p>You were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// const Display = ({counter}) => <div>{counter}</div>


// const Button = ({onClick , text}) => <button onClick = {onClick}>{text}</button>



 
/* EXAMPLES FOR 1C */

/* EXAMPLES FOR 1D */

// const History = (props) => {


//   if(props.totalClicks.length ===0){
//     return(
//     <p>This app is used by clicking the buttons</p>
//     )
//   }
//   return(
//     <div>
//       Button press history: {props.totalClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({onClick, text}) => <button onClick={onClick}>[{text}</button>

// const [clicks, setClicks] = useState({
//   left:0, right:0
// })

// const [totalClicks, totalIncrementer] = useState([])

// const leftClick = () => {
//   setClicks({...clicks, left:clicks.left+1})//... Makes a copy of the clicks object and then changes it in the next line
//   totalIncrementer(totalClicks.concat('L'))
// }
// const rightClick = () => {
//   setClicks({...clicks, right: clicks.right+1}) //... Makes a copy of the clicks object and then changes it in the next line
//   totalIncrementer(totalClicks.concat('R'))
//   }

/* EXAMPLES FOR 1D */

/*Feedback Tracker exercises*/
// const Header = (props) =>{
//   return(
//     <h1>{props.title}</h1>
//   )
// }
// const Average = (props) => {
//   return(
//    ((props.good - props.bad)/props.total).toFixed(2)
//   )
// }
// const Percentage = (props) => {
//   return(
//      (props.good/props.total*100).toFixed(1)
//   )
// }

// const Statistics = ({goodt,badt,neutralt,allt, good, bad, neutral, total, avgt, pctt}) =>{
//       if(total===0){
//         return(
//           <div>
//             <p>No Feedback Given</p>
//           </div>
//         )  
//       }
//       return(
//         <div>
//           <table>
//             <tbody>
//               <tr>
//                 <td>{goodt}</td><td>{good}</td>
//               </tr>

//               <tr>
//                 <td>{neutralt}</td><td>{neutral}</td>
//               </tr>
              
//               <tr>
//                 <td>{badt}</td><td>{bad}</td>
//               </tr>
              
//               <tr>
//                 <td>{allt}</td><td>{total}</td>
//               </tr>
              
//               <tr>
//                 <td>{avgt}</td><td><Average good={good} bad={bad} total={total}/></td>
//               </tr>
              
//               <tr>
//                 <td>{pctt}</td><td><Percentage good={good} total={total}/> %</td>
//               </tr>
//             </tbody>
//           </table>
          
          
          
//         </div>
        
//       )
      
  
// }
// const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

// const [feedbackTracker, feedbackInc] = useState({
//   good:0,
//   neutral:0,
//   bad:0,
//   total:0
// })

// const [avgTracker, avgInc]= useState({
//   good:0,
//   bad:0
// })
// <div>
// <Header title='give feedback'/>
// <Button onClick={goodButt} text={'good'}/>
// <Button onClick={neutralButt} text={'neutral'}/>
// <Button onClick={badButt} text={'bad'}/>
// <Header title='statistics'/>
// <Statistics goodt={'good '} neutralt={'neutral '} badt={'bad '} allt={'all '} 
//   good={feedbackTracker.good} neutral={feedbackTracker.neutral} bad={feedbackTracker.bad}
//   total={feedbackTracker.total} avgt={'average '} pctt={'percentage '} />
// </div>  

// const goodButt = () => {
//   feedbackInc({...feedbackTracker, good:feedbackTracker.good+1, total:feedbackTracker.total+1})
//   avgInc({...avgTracker,good:avgTracker.good+1})
// }
// const neutralButt = () => {
//   feedbackInc({...feedbackTracker, neutral:feedbackTracker.neutral+1, total:feedbackTracker.total+1})
// }
// const badButt = () => {
//   feedbackInc({...feedbackTracker, bad:feedbackTracker.bad+1, total:feedbackTracker.total+1})
//   avgInc({...avgTracker,bad:avgTracker.bad+1})
// }

/*1.6.-1.14 exercises*/

/* ANECDOTE EXERCISE
const Title = (props) => {
  return(
    <h1>{props.title}</h1>
  )
}
const Button = ({onClick, text}) => <button onClick = {onClick}>{text}</button>

const Anecdote = ({anecdote, votes}) => {
  return(
    <div>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  )
}

const Winner = ({score, anecdote}) => {
  const maxScore = Math.max(...score)
  const index = score.indexOf(maxScore)
  
  if(maxScore === 0){
    return(
      <p>There are no votes yet</p>
    )
  }

  return(
    <div>
      <p>{anecdote[index]} has {maxScore} votes</p>
    </div>
  )
  
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [scores, setScores] = useState(Array(7).fill(0))

  const voteButt = () => {
    const scoresCopy = [...scores]
    scoresCopy[selected]+=1
    setScores(scoresCopy)
    log
  }

  const randButt = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
    console.log(anecdotes.length)
  }
  

  return (
    <div>
      <Title title='Anecdote of the day'/>
      <Anecdote anecdote={anecdotes[selected]} votes = {scores[selected]}/> 
      <br></br>
      <Button onClick={voteButt} text='vote'/>
      <Button onClick={randButt} text='next anecdote'/>
      <Title title= 'Anecdote with most votes'/>
      <br></br>
      <Winner score={scores} anecdote={anecdotes}/>
    </div>
  )
}

ANECDOTE EXERCISE*/



const App = ({course}) => {
  
  return (
    <div>
      <ul>
        <Title content = 'Half Stack Application Development'/>
        <Parts course={course}/>
        <Sum course={course}/>
      </ul>
      
    </div>

  )
}
export default App