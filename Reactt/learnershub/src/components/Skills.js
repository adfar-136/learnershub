import React from 'react'
const GSkill = ({skill:[tech,level]})=>(
  <li>{tech} {level}</li>
)
export default function Skills({skills}) {
   const skilllist = skills.map((x,i)=>
   <GSkill key={x} skill={(x)}/>)
  return (
    <div>
      <ul>{skilllist}</ul>
      </div>
  )
}
