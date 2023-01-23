import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

export default function Memo() {
    const [counterOne,setCounterone] = useState(0)
    const [counterTwo,setCounterTwo] = useState(0)
    const IncrementOne = ()=>{
        setCounterone(counterOne + 1)
    }
    const IncrementTwo = ()=>{
        setCounterTwo(counterTwo + 1)
    }
    const isEven =useMemo(()=>{
        let i = 0;
        while (i<2000000000) i++;
        return counterOne%2 === 0
    },[counterOne])
  return (
    <div>
      <button onClick={IncrementOne}>counter - {counterOne}</button>
      <span>{isEven? "Even":"Odd"}</span>
      <button onClick={IncrementTwo}>counter - {counterTwo}</button>
    </div>
  )
}
