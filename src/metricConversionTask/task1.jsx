import { Component } from "react";
import "./metric.css"



class MetricConversion extends Component {

    state={
        celsius: ''
    }
    handleFunction=(event)=>{

        this.setState({
           celsius:event.target.value
        })

    }


    render() {

        const cel=this.state.celsius;
        const faren = cel ? (cel * 9/5 + 32).toFixed(2) : '';

        return (
            <>    
              <div className="mainDiv">
                <h3>Celsius to Fahrenheit (*C to *F) Conversion calculater</h3>
                <input type="text" placeholder="Celsius" onChange={this.handleFunction} value={this.state.celsius}/>
                <input type="text" placeholder="Fahrenheit" value={faren} />
                <br />
                <input type="text" className="userInput" placeholder="Enter your Celsius" onChange={this.handleFunction} />
                <h5>Celsius to Fahrenheit <small>units</small></h5>
            </div>

            </>

        )
    }
}
export default MetricConversion