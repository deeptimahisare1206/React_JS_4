import React, { Component } from 'react'

export default class Usestate4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "Netik",
      Age: 11
    }
  }

  // ChangeDataonButtonClick() {
  ChangeDataonButtonClick = () => {   //For Arrow Function..
    this.setState ({
      Name: "Arav",
      Age: 12
    }, () => {
      console.log(this.state);
    })
  }

  render() {
    return (
      <div>

        <h2>This is the use of state..<br />
          It is used to store all the data that belong to that particular
          component only.
        </h2> 
        <h3>My name is {this.state.Name} and I am {this.state.Age} years old.</h3>

        <button onClick={() => this.ChangeDataonButtonClick()}>Change Data M1</button>

        <p>Change Data = Event handler method(M2).</p>

        <button onClick={this.ChangeDataonButtonClick.bind(this)}>Change Data M2</button>

<p>Change Data = Arrow Function (M3).</p>

        <button onClick={this.ChangeDataonButtonClick}>Change Data M3</button>
        <hr />

        <img src="../../background.jpg" alt="Not Found" />

        <hr />
      </div>
    )
  }
}
