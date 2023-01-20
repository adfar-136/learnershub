import React, { Component } from 'react'

export default class Cheader extends Component {
  render() {
    return (
      <div>
        {this.props.data.welcome}
        {this.props.data.title}
        {this.props.data.dob}
        {this.props.data.author.firstName}
        {this.props.data.author.secondName}
      </div>
    )
  }
}
