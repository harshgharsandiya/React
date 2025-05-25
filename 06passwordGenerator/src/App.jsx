import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copyBtnText, setCopyBtnText] = useState("Copy")

  //useRef Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@#$%^&*()_+-=[]{}|;:'\",.<>?/`~"

    for(let i = 0; i < length; i++) {
      let charIdx = Math.floor(Math.random() * str.length)

      pass += str.charAt(charIdx)
    }

    setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
    setCopyBtnText("Copied!");

    setTimeout(() => {
      setCopyBtnText("Copy")
    }, 1000);
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-400'>

        <h1 className='text-4xl text-center text-white my-3 mx-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3  bg-white'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />

          <button 
          className='outline-none bg-blue-700 text-white px-8 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}
          >{copyBtnText}</button>

        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {
              setLength(Number(e.target.value))
            }}
            />
            <label> Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            id="numberInput"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }} />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            id="characterInput"
            defaultChecked={characterAllowed}
            onChange={() => {
              setCharacterAllowed((prev) => !prev);
            }} />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
