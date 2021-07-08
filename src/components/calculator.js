import {Component}  from "react"

export default class Calculate  extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            number:0,
            num2:0,
            html:0,
            css:0,
            bootstrap:0,
            javascript:0,
            angular:0,
            react:0

        }
      
        // this.state={
        //     html:0
        // }
        // this.state={
        //     css:0
        // }
        // this.state={
        //     bootstrap:0
        // }
        // this.state={
        //     javascript:0
        // }
        // this.state={
        //     angular:0
        // }
        // this.state={
        //     react:0
        // }
    }
    // calculator assignment
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
//    voter assignment
votinghtml=()=>{
    this.setState({
        html:this.state.html+1
    })
}
votingcss=()=>{
    this.setState({
        css:this.state.css+1
    })
}
votingbootstrap=()=>{
    this.setState({
        bootstrap:this.state.bootstrap+1
    })
}
votingjavascript=()=>{
    this.setState({
        javascript:this.state.javascript+1
    })
}
votingangular=()=>{
    this.setState({
        angular:this.state.angular+1
    })
}
votingreact=()=>{
    this.setState({
        react:this.state.react+1
    })
}
   
    render(){

        return (
            <div>
            
               <div  className="calculator">
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

               <div className="voting" >
                 <div className="tablemain" >
                   <table className="tableinside" rules="all" border="1px solid black" width="800px" height="400px" >
                     <tr className="thead" >
                      <th>NUMBER OF VOTERS</th>
                      <th>TECHNOLOGIES</th>
                      <th>CLICK</th>
                      </tr>
                      <tr>
                         <td > <h1 id="html" >{this.state.html}</h1></td>
                         <td>HTML</td>
                         <td> <button onClick={this.votinghtml}>Click Here</button></td>
                      </tr>
                      <tr>
                         <td> <h1 id="css" >{this.state.css}</h1></td>
                         <td>CSS</td>
                        <td> <button  onClick={this.votingcss} >Click Here</button></td>
                      </tr>
                      <tr>
                         <td> <h1 id="bootstrap" >{this.state.bootstrap}</h1></td>
                         <td>BOOTSTRAP</td>
                         <td> <button  onClick={this.votingbootstrap} >Click Here</button></td>
                       </tr>
                       <tr>
                         <td> <h1 id="javascript" >{this.state.javascript}</h1></td>
                         <td>JAVASCRIPT</td>
                         <td> <button onClick={this.votingjavascript}>Click Here</button></td>
                        </tr>
                        <tr>
                          <td> <h1 id="angular" >{this.state.angular}</h1> </td>
                          <td>ANGULAR</td>
                          <td> <button onClick={this.votingangular}>Click Here</button></td>
                         </tr>
                         <tr>
                         <td> <h1 id="react" >{this.state.react}</h1></td>
                         <td>REACT</td>
                         <td> <button  onClick={this.votingreact} >Click Here</button></td>
                        </tr>
                   </table>
                 </div>
               </div>
             </div>            
        )
    }
}