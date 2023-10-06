import React, { Component } from 'react'

export default class Functionbase2 extends Component {

  render() {

    const usestyle={
        color:"red",
        backgroundColor:"yellow"
    }

    return (
      <div>
         <h1>Hello Everyone..</h1>
        <h3>I am  Netik<br/>
        This is the use of function component.
       </h3>
       <hr />

       <h3 style={{color:"purple", backgroundColor:"black"}}>INLINE CSS</h3>
       <hr/>

       <h3 style={usestyle}>INTERNAL CSS</h3>
       <hr />

       <h3 className='Excss'>EXTERNAL CSS</h3>
       <hr />
      
      </div>
    )
  }
}
