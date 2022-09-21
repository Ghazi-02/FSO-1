import { useState } from 'react'
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const Statistics = (props) => {
 if(props.good === 0 && props.neutral === 0 && props.bad === 0) {
  return <div>No feedback given</div>
 } else{
  return( 
 <div>
    <div>Good {props.good}</div>
    <div>Neutral {props.neutral}</div>
    <div>Bad {props.bad}</div>
    <div>All {props.all}</div>
    <div>Average {props.average}</div>
    <div>Positive {props.positive}</div>
  </div>
 )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + bad + neutral
  const average = good - bad
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <h1>Statistics</h1>
      <Statistics good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average / all}
        positive={good / all} />
    </div>
  )
}

export default App