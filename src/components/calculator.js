import {Component}  from "react"

export default class Calculate  extends Component{
    constructor(props){
        super(props)
        this.state={
            number:0
        }
    }
    increase=()=>{
         this.setState({
             number:this.state.number+1
         })
    }
    decrease=()=>{
        this.setState({
            number:this.state.number-1
        })
   }
   reset=()=>{
    let initial=0
    this.setState({
        number:initial
    })
}
    render(){

        return (
            <div  className="body">
            <div className="div1" >
            <h1 className="heading">hello world</h1>
            <div className="div2" >
            <h1 className="number" style={{color:"white"}}>{this.state.number}</h1>
            <div className="div3" >
            <button onClick={this.increase}> <img  width="100px" height="100px" src="https://media.istockphoto.com/vectors/black-plus-sign-positive-symbol-vector-id688550958?k=6&m=688550958&s=612x612&w=0&h=nVa-a5Fb79Dgmqk3F00kop9kF4CXFpF4kh7vr91ERGk=" /></button>
            <button onClick={this.reset}> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFmWZqq8YrJkqw4WfqT-EAwDa4A-RFw6vpLQ&usqp=CAU" width="100px" height="100px"  /> </button>
            <button onClick={this.decrease}> <img src="https://media.istockphoto.com/vectors/black-minus-sign-negative-symbol-vector-id688548090?k=6&m=688548090&s=170667a&w=0&h=HA3s5dM2ukaSO9VM4TWthRboEShmQmrTuptIHZlUgNg=" width="100px" height="100px"  /> </button>
            </div>
            </div>
            </div>
            </div> 
        )
    }
}