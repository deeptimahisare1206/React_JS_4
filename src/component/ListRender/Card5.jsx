import React, { Component } from 'react'
import '../../App.css'

export default class Card5 extends Component {
  render() {

    return (
      <div className='cardbox'>
        <div className='design' onClick={this.props.remove}>
          {this.props.index}
          <h1>Name: {this.props.Name}</h1>
          <h1>Age: {this.props.Age}</h1>
        </div>
      </div>
    )
  }
}
