import React, { useReducer } from 'react'
const counterReducer=(state,action)=>{
  console.log("state",state)
  console.log("Action",action)
  if(action.type === "Adfar"){
    return {
      count :state.count + 1
    }
  } else if(action.type === "lavkush"){
    return {
      count : state.count - 1
    }
  }
  else if(action.type === "Aparna"){
    return {
      count :state.count - 10
    }
  }
  return state
}
export default function App() {
  // const [state,setstate]= useState()
  const [state,dispatch]=useReducer(counterReducer,{count : 0})
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>{dispatch({type:"Adfar"})}}>Change state</button>
      <button onClick={()=>{dispatch({type:"lavkush"})}}>Change state</button>
      <button onClick={()=>{dispatch({type:"Aparna"})}}>Change state</button>
    </div>
  )
}
