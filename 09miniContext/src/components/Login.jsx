import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

    return (
      <div>
        <h2>Login</h2>

        <input type="text" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username' 
        className='border-black m-3 bg-gray-200 rounded-2xl text-center text-blue-950'
        /> <br/>

        <input type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password' 
        className='border-black m-3 bg-gray-200 rounded-2xl text-center text-blue-950'
        /> <br />

        <button onClick={handleSubmit}
        className='border-black m-3 bg-indigo-200 w-20 rounded-2xl text-center text-blue-950'
        >Submit</button>
      </div>
    )
}

export default Login
