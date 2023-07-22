import { useState} from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handler={handleGoodClick} />
      <Button text="neutral" handler={handleNeutralClick} />
      <Button text="bad" handler={handleBadClick} />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handler}>{props.text}</button>
    </div>
  )
}

const Statistics = (props) => {
  const all = () => props.good + props.neutral + props.bad
  const average = () => Math.round((all()/3) * 10) / 10
  const positive = () => (props.good === 0) ? 0 : Math.round((props.good/all() * 100) * 10) / 10

  if (all() > 0) {
    return (
      <div>
        <StatisticLine text="good " value={props.good}/>
        <StatisticLine text="neutral " value={props.neutral}/>
        <StatisticLine text="bad " value={props.bad}/>
        <StatisticLine text="all " value={all()}/>
        <StatisticLine text="average  " value={average()}/>
        <StatisticLine text="positive " value={positive() + " %"}/>
      </div>
    )
  }
  return (
    <div>
      <div>No feedback Given</div>
    </div>
  )
}
  
const StatisticLine = (props) => {
  return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
  )
}



export default App