import React from 'react'
import CompB from './CompB'

export default function CompA(props) {
  return (
    <div>
        compa
        <CompB name={props.name}/>
    </div>
  )
}
