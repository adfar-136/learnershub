import React from 'react'
import { useState } from 'react'

export default function App() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [isloggedIn,setIsloggedIn] = useState(true)
  const login=()=>{
    const userData = {
      name,
      email,
      password,
    }
  localStorage.setItem('Token-Info',JSON.stringify(userData))
  setName('')
  setPassword('')
  setEmail('')
  setIsloggedIn(false)
  }
  const logout=()=>{
    localStorage.removeItem('Token-Info')
    setIsloggedIn(true)
  }
  return (
    <div>
      <h1>This is React Local storage</h1>
      {isloggedIn ? (
        <>
        <form>
          <input type="text" value={name} placeholder="name" onChange={(e)=>{setName(e.target.value)}} />
          <input type="email" value={email} placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} />
          <input type="password" value={password} placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
          <button type='submit' onClick={()=>{login()}}>Go</button>
        </form>
        </>
      ):(
        <>
          <h1>User Is logged In</h1>
          <button onClick={logout}>Logout User</button>
        </>
      )}
    </div>
  )
}
