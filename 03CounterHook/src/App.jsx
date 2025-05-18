import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //Responsible to state change that it will  propagate change in UI (DOM)
  //variable, function
  let [counter, setCounter]  = useState(1)


  // let counter = 5

  const addValue = () => {
    // console.log("Value Added", Math.random(), counter);
    // counter ++;
    // setCounter(counter);

    if(counter < 20)
      setCounter(counter + 1);
  }

  const removeValue = () => {
    // counter --;
    // setCounter(counter);
    if(counter >0)
      setCounter(counter - 1);
  }

  return (
   <>
    <h1>React Counter</h1>
    <h2>Counter Value: {counter}</h2>
    
    <button
    onClick={addValue}
    >Increment {counter}</button>
    <br/>
    <button
    onClick={removeValue}
    >Decrement {counter} </button>

    <p>Footer: {counter}</p>

   </>
  )
}

export default App
