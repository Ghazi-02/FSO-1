import { useState } from 'react'
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const Statistics = (props) => {
  if (props.good === 0 && props.bad === 0 && props.neutral === 0) {
    return <div>No feedback given</div>
  } else {
    return (
      <>
        <StatisticsLine text="good: " value={props.good} />
        <StatisticsLine text="neutral: " value={props.neutral} />
        <StatisticsLine text="bad: " value={props.bad} />
        <StatisticsLine text="all: " value={props.all} />
        <StatisticsLine text="average:" value={props.average} />
        <StatisticsLine text="positive:" value={props.positive} />
      </>
    )
  }
}
const StatisticsLine = (props) => {

  return (
    <tr>
      <td> {props.text} </td>
      <td> {props.value} </td>
    </tr>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + bad + neutral
  const average = (good - bad) / all
  const positive = (good / all) * 100
  const positivePercent = positive + "%"
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <h1>Statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positivePercent} />
    </div>
  )
}

export default App