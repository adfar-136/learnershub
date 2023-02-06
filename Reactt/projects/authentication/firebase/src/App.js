
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { auth } from './firebase';
import Profile from './Profile';

function App() {
  const [username,setUserName] = useState("")
  useEffect(()=>{
    onAuthStateChanged(auth,(res)=>{
      if(res){
        setUserName(res.email)
      }
      else {
        setUserName("")
      }
    })
  },[])
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<Profile name={username}/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/signup' element = {<Signup/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
