import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Contact() {
  const navigate = useNavigate()
  const onToAbout = ()=>{
    navigate('/about')
  }
  const onToHome = ()=>{
    navigate('/')
  }
  return (
    <div>
       <h1>Contact page</h1>
       <button onClick={onToAbout}>Go to about Page</button>
       <button onClick={onToHome}>Go to Home Page</button>
    <Outlet/>
    </div>
  )
}
