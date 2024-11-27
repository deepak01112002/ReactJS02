import { Component } from "react";


class Counter1 extends Component{
    constructor(props){
        super(props)
        this.state = 0     
    }

    increase = ()=>{
       this.setState =  this.state + 1
    }

    decrease = ()=>{
        this.setState = this.state - 1
    }

    render(){
        return <div>
            <h1>{this.state}</h1>
            <button onClick={this.increase()}>+</button>
        </div>
    }
}

export default Counter1