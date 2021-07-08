
import React, { Component } from 'react'

export default class Color extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            bgcolor:""
               
        }
    }
    handleColor=(e)=>{
        console.log(e.target.value)
        this.setState({
            bgcolor:e.target.value
        })
    }
    render() {
        return (
            <div className="body1" >
              <div className="colordiv" >
                 <h1>SELECT COLOR</h1>
                 <div className="dropdowndiv" >
                   <div className="insidecolor" style={{backgroundColor:this.state.bgcolor}}>
                <select onChange={this.handleColor}>
                   <option value="red">RED</option>
                   <option value="green">GREEN</option>
                   <option value="blue">BLUE</option>
                   <option value="yellow">YELLOW</option>
                   <option value="pink">PINK</option>
                </select>
                 </div>
                </div>
               </div>
            </div>
        )
    }
}
