import React, { useState } from 'react'
import Inputform from '../InputForm/Inputform'
import styles from './Signup.module.css'
import { Link} from 'react-router-dom'
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../firebase'
export default function Signup() {
 
  const [values, setValues]= useState({
    name:"",
    email:"",
    pass:"",
  })

  const [errorMsg, setErrorMsg]=useState("")
 const handleSubmission=()=>{
  if(!values.name || !values.email || !values.pass){
    setErrorMsg("Fill All Fields")
    return;
  }
  setErrorMsg("")
  
  createUserWithEmailAndPassword(auth,values.email,values.pass).then((res)=>{
      console.log(res)
  })
  
 }
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>SignUp</h1>
        <Inputform type='text' label="Name" placeholder="Enter your name" 
        onChange={(event)=> 
        setValues((prev)=>({...prev,name:event.target.value}))
        }/>
        <Inputform type='email' label="Email" placeholder="Enter your email" 
        onChange={(event)=> 
        setValues((prev)=>({...prev,email:event.target.value}))
        }/>
        <Inputform type='password' label="password" placeholder="Enter your password" 
        onChange={(event)=>
        setValues((prev)=>({...prev,pass:event.target.value}))
        }/>
        <div className={styles.footer}>
            <b className={styles.error}>{errorMsg}</b>
            <button onClick={handleSubmission}>SignUp</button>
            <p>Already have an account? {" "} 
            <span>
                <Link to="/login">Login</Link>
            </span>
            </p>
        </div>
      </div>

    </div>
  )
}
