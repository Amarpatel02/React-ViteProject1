import { Component } from "react";
class BulbTask extends Component{
    state={
        active: false,
        on:"https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940319kdxsp3rf0i.png",
        off:"https://i.pinimg.com/originals/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.png"
    }
    bulbOn =()=>{
        console.log("bulb on")

        this.setState({
            active:true
        })
    }
    bulbOff =()=>{
        console.log("bulb off");
        this.setState({
            active:false
        })
    }
    render(){
        return(
            <>
            <img src={ this.state.active ? this.state.on : this.state.off} alt="" style={{height:"400px", width:"300px"}} />
            <button style={{backgroundColor:"red",color:"white", margin:"5px"}}  onClick={this.bulbOn}>Bulb on</button>
            <button style={{backgroundColor:"lightgreen",color:"white", margin:"5px"}} onClick={this.bulbOff}>Bulb off</button>

            </>
        )
    }

}
export default BulbTask