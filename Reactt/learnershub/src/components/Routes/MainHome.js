import React from 'react'
import {  Outlet } from 'react-router-dom'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
export default function MainHome() {
  const navigate = useNavigate()
  const goToPrevious =()=>{
    navigate(-1)
  }
  return (
    <> 
    <Header/>
    <button onClick={goToPrevious}>Go to Previous Page</button>
    <Outlet/>
    
    </>
  )
}
