
import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [gender, setGender] = useState("male")
  const [phonenumber, setPhonenumber] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [nameError, setnameError] = useState("")
  const [emailError, setemailError] = useState("")
  const [phoneNumberError, setphoneNumberError] = useState("")
  const [passwordError, setpasswordError] = useState("")
  const [genderError, setgenderError] = useState("")
  const [emptyError,setEmptyerror] = useState("")
  const resetErrorDefault =()=>{
    setnameError("")
    setphoneNumberError("")
    setpasswordError("")
    setemailError("")
    setgenderError("")
    setEmptyerror("")
  }
  const validate =()=>{
    if(
      name === "" || email === "" || gender === "" || phonenumber==="" ||password===""
    ){
         setEmptyerror("All fields are mondatory")
         setUsername("")
         return false
     }
     if(!name.match(/^[A-Za-z0-9- ]+$/)){
          setnameError("Name is not Alphanumertic")
          setUsername("")
          return false
     }
     if (!email.includes("@")){
      setemailError("Email must contain @")
      setUsername("")
      return false;
     }
     if(!gender.match(/male|female|other/i)){
      setgenderError("Please identify as male,female or other")
      setUsername("")
      return false
     }
     if(!phonenumber.match(/^[0-9]+$/)){
      setphoneNumberError("Phone number must contain only numbers")
      setUsername("")
      return false;
     }
     if(password.length < 6){
      setpasswordError("Password must contain atleast 6 letters")
      setUsername("")
      return false;
     }
  }
 const handleSubmit =(e)=>{
  e.preventDefault()
  resetErrorDefault()
  const isValid = validate()
  if (isValid){
    setName("")
    setEmail("")
    setGender("")
    setPhonenumber("")
    setPassword("")
    resetErrorDefault()
    
  }
  setUsername(email.substr(0,email.indexOf("@")))
 }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='name' value={name} onChange = {(e)=>{setName(e.target.value)}}/> <br />
        <span>{nameError}</span>
        <input type="text" placeholder='Email' value={email} onChange = {(e)=>{setEmail(e.target.value)}}/><br/>
        <span>{emailError}</span>
        <select name="gender" value={gender} onChange = {(e)=>{setGender(e.target.value)}}>
          <option value="select gender">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select><br />
        {genderError}
        <input type="text" placeholder='Phone Number' value={phonenumber} onChange = {(e)=>{setPhonenumber(e.target.value)}}/><br/>
        <span>{phoneNumberError}</span>
        <input type="password" placeholder='Password' value={password} onChange = {(e)=>{setPassword(e.target.value)}}/><br/>
        <span>{passwordError}</span>
        <span>{emptyError}</span><br />
        <input type="submit" value="Submit" /><br />
      </form>
      <div>
        <h2>{username ? "Hello " + username : "adfar"}</h2>
      </div>
    </div>
  );
}

export default App;
