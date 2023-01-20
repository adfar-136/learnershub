import React from 'react'
import GC from './GC'

export default function About(props) {
  
  return (
    <div>
      {/* <h1>{props.age} {props.mass} {props.dob}</h1> */}
      <GC ageA={props.age}/>
    </div>
  )
}
