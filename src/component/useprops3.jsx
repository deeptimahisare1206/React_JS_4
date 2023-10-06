import React, { Component } from 'react'

export default class Useprops3 extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }
  render() {
    return (
      <div>

        <h2>Welcome....This is the use of props.<br/> This is used for passing data from one component to other.<br/></h2>
        <h3>My name is {this.props.myname} {this.props.surname}. I live in {this.props.city}</h3>
        <hr />
      </div>
    )
  }
}
