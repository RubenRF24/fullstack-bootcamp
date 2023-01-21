import ReactDOM from 'react-dom';
import {useState} from 'react';
import "./index.css"

const WarningNotUsed = () => {
    return <h1>Todavia no se ha usado el contador</h1>
}

const ListOfClicks=(({clicks}) => {
    console.log({clicks})
    return <p>{clicks.join(", ")}</p>
})

const App = (props) => {

//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)

  const [clicks, setClicks] = useState([])

  const handleClickLeft = (event) => {
    setClicks((prevClicks) => [...prevClicks, 'L']);
  }

  const handleClickRight = () => {
    setClicks((prevClicks) => [...prevClicks, 'R']);
  }

  const handleReset = () => {
    setClicks([])
  }

  const left = clicks.filter(click => click === 'L')
  const right = clicks.filter(click => click === 'R')
  
  return (
    <div>
        {left.length}
        <button onClick={handleClickLeft}>left</button>
        <button onClick={handleClickRight}>right</button>
        {right.length}
        <p>
            <button onClick={handleReset}>Reset</button>
        </p>
        <p>Clicks totales: {clicks.length}</p>
        {clicks.length === 0 ? (
            <WarningNotUsed />
        ) : (
            <ListOfClicks clicks={clicks} />
        )}
    </div>
    );
};

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);