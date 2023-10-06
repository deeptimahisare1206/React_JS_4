import React, { Component } from 'react'
import Card5 from './Card5';

export default class ShowHide7 extends Component {

    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            List:[
                {Name:"Madhu", Age: 28},
                {Name:"Tenali", Age: 30},
                {Name:"Kotwal", Age: 52}
            ],isShow:true
        }
    }

    showhidedata=() =>{
    //    alert();
    this.setState({isShow: !this.state.isShow})

    }
  render() {
    let UseMap;
    if(this.state.isShow){
        UseMap = this.state.List.map((p,index) => {
            return<Card5 key = {index} Name = {p.Name} Age = {p.Age}/>
          });
    }
    else{
        UseMap = ""
    }
    return (
      <div>
<p> Rendering data on button click (Show or Hide)</p>
        <button onClick={this.showhidedata}>Show Data/ Hide Data</button>
        {UseMap}
        <hr />
      </div>
    )
  }
}
