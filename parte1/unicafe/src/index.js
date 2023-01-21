import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState} from 'react'

const Statistic = ({good,neutral,bad}) => {
  const all = good + neutral + bad
  const average = (good-bad)/(good+neutral+bad)
  const positive = ((good/(good+neutral+bad))*100)
  if (all === 0) {
    return <p>No feedback given</p>
  }

  return(
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />  
        <StatisticLine text="neutral" value={neutral} />  
        <StatisticLine text="bad" value={bad} />  
        <StatisticLine text="all" value={all} />  
        <StatisticLine text="average" value={average} />  
        <StatisticLine text="positive" value={positive + " %"} />
      </tbody>  
    </table>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(prevClicks => prevClicks + 1)
  }

  const handleClickNeutral = () => {
    setNeutral(prevClicks => prevClicks + 1)
  }

  const handleClickBad = () => {
    setBad(prevClicks => prevClicks + 1)
  }

  return (
    <div>
      <h1>Give a feedback</h1>
      <button onClick={handleClickGood}>Good</button>
      <button onClick={handleClickNeutral}>Neutral</button>
      <button onClick={handleClickBad}>Bad</button>
      <h1>statistic</h1>
      <Statistic good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

