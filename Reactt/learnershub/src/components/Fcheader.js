import React, { Component } from 'react'
import Cheader from './Cheader'
const data = {
    welcome:"Welcome to react classes",
    title : " Props in classes",
    author:{
        firstName : " Adfar",
        secondName : " rasheed"
    },
    dob : "09-08-1998"
}
export default class Fcheader extends Component {
  render() {
    return (
      <div>
        <Cheader data={data}/>
      </div>
    )
  }
}
