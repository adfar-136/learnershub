import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/Routes/About'
import Adfar from './components/Routes/Adfar'
import Contact from './components/Routes/Contact'
import Home from './components/Routes/Home'
import "./App.css"
import Users from './components/Routes/Users'
import UserDetails from './components/Routes/UserDetails'
import Error from './components/Routes/Error'
import Search from './components/Routes/Search'
import List from './components/Routes/List'
import MainHome from './components/Routes/MainHome'
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<div>Home Page</div>}/>
      <Route path="about" element={<div>about Page</div>}/>
      <Route path ="contact" element={<div>Contact Page</div>}/>
      <Route path ="adfar" element={<div>Adfar's Page</div>}/> */}
      <Route path="/" element={<MainHome/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path ="/contact" element={<Contact/>}>
            <Route path='search' element={<Search/>}/>
            <Route path='list' element={<List/>}/>
        </Route>
      
        <Route path ="adfar" element={<Adfar/>}/>
        <Route path='users' element={<Users/>}/>
        <Route path='users/:userID' element={<UserDetails/>}/>
        <Route path='*' element={<Error/>}/>
      </Route>
      {/* <Route path='users/1' element={<UserDetails/>}/>
      <Route path='users/2' element={<UserDetails/>}/>
      <Route path='users/3' element={<UserDetails/>}/> */}
    </Routes>
    </BrowserRouter>
  )
}
