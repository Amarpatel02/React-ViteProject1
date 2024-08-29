import { Component } from "react";
import TableComponent from "./table";
import axios from "axios";





class NavBar extends Component{

state={
    data:[],
    active:false
}


componentDidMount(){
 this.fetchData()
}

fetchData = async()=>{
     const {data,status} = await axios.get("https://fakestoreapi.com/products")
    console.log(data)
    if(status==200){
        this.setState({
            data:data
        })
    }
}

        homeFunction =()=>{
            this.setState((prevState)=>({
                active:!prevState.active
            }))
        }


        addFunction = ()=>{
          const  myObject = {
                "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                "price": 109.95,
                "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            }

            this.setState((prevState)=>({
                data:[myObject, ...prevState.data]
            }))
        
        }


    render(){
        return(
            <>
                <div style={{width:"80%", height:"100px", marginLeft:"10%", display:"flex", justifyContent:"space-between", alignItems:"center", position:"sticky",top:"10",backgroundColor:"white",zIndex: "1000"}}>
                    <img src="https://dukaan.b-cdn.net/1000x1000/webp/4039423/78b1bfca-d51a-4799-9926-cdf9a2fef244/1618791503470-40c79388-7c67-477c-a2a6-0b21b0efbb0b.jpeg" alt="" style={{height:"100px"}}/>
                    <h2>FASHION HUB</h2>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFVHR62PqqslJrmbNHhwiH3Cmb99-h10mi6g&s" alt="" style={{height:"100px"}} />

                </div>

            <div style={{width:"80%", height:"100px", marginLeft:"10%", display:"flex"}}>
                <div style={{width:"20%", height:"500px"}}>
                    <button style={{width:"100px", border:"none", margin:"10px"}} onClick={this.homeFunction}>Home</button> <br />
                    <button style={{width:"100px",border:"none" ,margin:"10px"}}>About</button> <br />
                    <button style={{width:"100px",border:"none",margin:"10px"}}>Contact</button> <br />
                    <button style={{width:"100px",border:"none",margin:"10px"}} onClick={this.addFunction}>Add Item</button>


                </div>
                {
                    this.state.active && (<div style={{width:"80%", height:"500px"}}>
                    <TableComponent data={this.state.data}/>
                    </div>)
                }
            </div>
            </>
        )
    }
}
export default NavBar