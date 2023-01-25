import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function About() {
  const navigate = useNavigate()
  const goToContact =()=>{
    navigate('/contact')
  }
  return (
    <div>
       <h1>About page</h1>
       

       <button onClick={goToContact}>Go To Contact</button>
    </div>
  )
}
