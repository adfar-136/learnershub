import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreator } from './reduxstore'

export default function Balance() {
  const dispatch = useDispatch()
  const {withdrawMoney,depositMoney} = bindActionCreators(actionCreator,dispatch)
  return (
    <div>
      <h2>Deposit/withdraw Money</h2>
      <button onClick={()=>{dispatch(actionCreator.withdrawMoney(100))}}>-</button>
      Update Balance
      <button onClick={()=>{dispatch(actionCreator.depositMoney(300))}}>+</button>
      <button onClick={()=>{dispatch(actionCreator.depositMoney(800))}}>+</button>
      <button onClick={()=>{withdrawMoney(13333)}}>13333</button>
      <button onClick={()=>{depositMoney(13333)}}>13333</button>
    </div>
  )
}
