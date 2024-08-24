import { Component } from "react";


class Hello extends Component{
    state={
        celsiuses :""
    }
    celsiusFunction=(event)=>{
        this.setState({
            celsiuses: event.target.value

        })
    }

render(){

    const cel = this.state.celsiuses
    let farn = cel?(cel * 9/5 + 32).toFixed(2):""
    
    return(

        <div style={{backgroundColor:"skyblue", width:"60%", marginLeft:"20%", textAlign:"center"}}>
            <h3 style={{color:"white"}}>Heading</h3>

            <input type="text" placeholder="Celsius" onChange={this.celsiusFunction} value={this.state.celsiuses}/>
            <input type="text" placeholder="Fahrenheit" value={farn}/>

        </div>
    )
}
}
export default Hello