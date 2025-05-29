import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {

  return (
    <>
      <h2 className='bg-blue-500 text-center text-2xl text-white'>Todo Redux ToolKit</h2>
      <AddTodo />
      <Todo />
    </>
  )
}

export default App
