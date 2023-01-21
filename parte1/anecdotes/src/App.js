import { useState } from "react";

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const ShowAnecdote = ({anecdotes, points, selected}) => {
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
    </div>
  )
}

const App= () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ]

  const [selected, setSelected] = useState(0)
  const [points , setPoints] = useState(new Array(anecdotes.length).fill(0))

  const addVote = () => {
    const pointsCopy = [...points]
    pointsCopy[selected] += 1
    setPoints(pointsCopy)
  }

  const handleClickRandom = () => setSelected( prevClick => {
    let randomNumber = Math.round(Math.random() * (anecdotes.length - 1))
    while(randomNumber === prevClick){
      randomNumber = Math.round(Math.random() * (anecdotes.length - 1))
    }
    return randomNumber
    })

  const mostVote = () => {
    let mayor = points[selected]
    let aux = 0
    for(let i = 0; i < anecdotes.length; i++){
      if(mayor <= points[i]){
        mayor = points[i]
        aux = i
      }
    }
    return aux
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <ShowAnecdote anecdotes={anecdotes} points={points} selected= {selected} />
      <div>
        <Button handleClick={addVote} text="vote"/>
        <Button handleClick={handleClickRandom} text="next anecdote"/>
      </div>
      <h1>Anecdote with most votes</h1>
      <ShowAnecdote anecdotes={anecdotes} points={points} selected= {mostVote()} />
    </div>
  );
}

export default App;
