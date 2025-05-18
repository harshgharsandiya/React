import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App(props) {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "harsh",
    age: "21"
  }
  let myObj2 = {
    username: "ram",
    age: "32"
  }

  return (
   <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>TailWind Test</h1>
    <Card id="1" name="harsh" userInfo={myObj} />
    <Card id="2" userInfo={myObj2}/>
   </>
  )
}

export default App
