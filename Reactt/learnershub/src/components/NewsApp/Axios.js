import React from 'react'
import axios from 'axios'
export default function Axios() {
    const getJoke = ()=>{
        axios.get("https://official-joke-api.appspot.com/random_joke").then((response)=>{
            console.log(response)
        })
    }
  return (
    <div>
      <button onClick={getJoke}>Get joke</button>
    </div>
  )
}
