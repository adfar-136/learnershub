import React, { useCallback } from 'react'
import { useState } from 'react'
const x = new Set()
export default function App() {
  const [count,setCount] = useState(0)
  const [number,setNumber] = useState(0)
  const incrementCounter = useCallback(()=>{
     setCount(count + 1)
  },[count])
  const decrementCounter = useCallback(()=>{
    setCount(count - 1)
 },[count])
 const incrementNumber = useCallback(()=>{
  setNumber(number + 1)
 },[number])
 x.add(incrementCounter)
 x.add(decrementCounter)
 x.add(incrementNumber)
 alert(x.size)
  return (
    <div>
      count : {count} 
      <button onClick={incrementCounter}>Increment Counter</button>
      <button onClick={decrementCounter}>Decrement Counter</button>
      <button onClick={incrementNumber}>Increment Number : {number}</button>
    </div>
  )
}
