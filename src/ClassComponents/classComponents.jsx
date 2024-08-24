
import { Component } from "react"
import BootstrapFirstComponent from "../bootStrap/firstComponent"

class ClassFirstComponent extends Component{

    state={
        isSubscribe:false,
        text:"Subscribe",
        text1:"Subscribed"
    }

    subScribeFunction = ()=>{
        this.setState({
            isSubscribe: !this.state.isSubscribe 
        })

    }

    render(){

        return(
            <>
            <CountComponent/>
            <button onClick={this.subScribeFunction} >{this.state.isSubscribe? this.state.text1:this.state.text}</button>

            {this.state.isSubscribe?<BootstrapFirstComponent/>:<div><h3>Please Subscribe for the Data</h3></div>}
            </>
        )

    }
}

export default ClassFirstComponent



class CountComponent extends Component{

    state={
        count:0
    }

    increment=()=>{
        this.setState({
            count : this.state.count+1

        })
    }

    decrement=()=>{
        this.setState({
            count:this.state.count-1
        })
    }

    render(){
        return(

            <>
            <h3>Count:-{this.state.count}</h3>
            <button onClick={this.increment}>increment</button>
            <button onClick={this.decrement}>decrement</button>

            </>
        )
    }
}