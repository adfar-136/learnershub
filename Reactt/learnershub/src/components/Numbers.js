import React from 'react'

export default function Numbers({numbers}) {
  const Number = numbers.map((x,i)=><li key={i}>{x}</li>)
  return (
    <div>
      <ul>{Number}</ul>
    </div>
  )
}
