import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state={count:0}
    }
    handleclick=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
     if(this.state.count === 4){
        throw new Error("Adfarrrr!!!")
     }
     return (
        <h1 onClick={this.handleclick}>{this.state.count}</h1>
     )
    
  }
}
