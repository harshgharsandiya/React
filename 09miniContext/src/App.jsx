import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h2 className='bg-gray-500 text-2xl text-center font-bold text-white'>Context API</h2>
      
      <Login />
      <Profile />

    </UserContextProvider>
  )
}

export default App
