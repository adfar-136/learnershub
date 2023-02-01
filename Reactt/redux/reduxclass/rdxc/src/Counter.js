import React, { Component } from 'react'
import { connect } from 'react-redux'
import {incrementCount,decrementCount} from "./redux/actions/counterAction"
class Counter extends Component {
  render() {
    const {count,incrementCount,decrementCount} = this.props
    return (
      <div>
        <button onClick={()=>decrementCount()}>-</button>
        {count}
        <button onClick={()=>incrementCount()}>+</button>
      </div>
    )
  }
}
 const mapStatetoProps =(state)=>(
    {
        count : state,
     }
 )

 const mapDispatchToProps = (dispatch)=>({
    decrementCount : ()=>dispatch(decrementCount()),
    incrementCount : ()=>dispatch(incrementCount())
 })

 export default connect(mapStatetoProps,mapDispatchToProps)(Counter)
