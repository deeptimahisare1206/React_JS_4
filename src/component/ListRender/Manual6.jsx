import React, { Component } from 'react'
import Card5 from './Card5';

export default class Manual6 extends Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            List:[
                {Name:"Deep", Age: 18},
                {Name:"Netik", Age: 10},
                {Name:"Arav", Age: 12}
            ]
        }
    }
  render() {
    //Map method..
    let UseMap;
//   UseMap = this.state.List.map((p) => {
//     return<Card5 Name = {p.Name} Age = {p.Age}/>
//   })

 //Use of key Props..
UseMap = this.state.List.map((p,index) => {
        return<Card5 key = {index} Name = {p.Name} Age = {p.Age}/>
      })


    return (
      <div>
         <p>List of data comes from a database in the form of an array object.</p>

        <p>Manual Data Rendering (for know numbers of data)</p>
        <Card5 Name = {this.state.List[0].Name}
        Age = {this.state.List[0].Age}/>
        <Card5 Name = {this.state.List[1].Name}
        Age = {this.state.List[1].Age}/>
        <Card5 Name = {this.state.List[2].Name}
        Age = {this.state.List[2].Age}/>

<hr />

<p>Map() method (use data rendering for n number of data and Render data
dynamically)</p>

    {UseMap}
 <hr />
      </div>
    )
  }
}
