import React from 'react'
const Mstate = ({state :{name, city}})=>{
    return (
        <div>
            <h1>{name}</h1>
            <h1>{city}</h1>
        </div>
    )
}
export default function CStates({states}) {
    const statelist = states.map((x)=>
    <Mstate state={x}/>)
  return (
    <div>{statelist}</div>
  )
}
