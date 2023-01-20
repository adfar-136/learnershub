import React from 'react'
import CStates from './CStates'

export default function Fstates() {
    const states = [
      {name:"Kashmir", city :"Srinagar",age:25},
      {name : "delhi", city : "Noida"},
      {name:"Mumbai", city : "film city",dob:"09-08-1998"},
      {name : "Up", city : "Mirzapur"}
    ]
    
  return (
    <div>
        <CStates states={states}/>
    </div>
  )
}
