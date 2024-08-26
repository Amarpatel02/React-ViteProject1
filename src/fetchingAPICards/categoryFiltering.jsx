import { Component } from "react";
import axios from "axios";

import ReactBootsrapCard from "../reactBootsrap/reactBootsrapCard";
class FetchingAPICards extends Component{

    state={
        products:[],
        category:[],
        allItems:[],
        loader:true
    }
    componentDidMount(){
        this.fakeProducts();
        this.fakeCategory()
    }

     fakeProducts = async ()=>{

        let {data,status} = await axios.get("https://fakestoreapi.com/products");
        //console.log(data)

        if(status===200){
            this.setState({
                products:data,
                allItems:data
            })
        }
        
        
     }

     fakeCategory = async ()=>{

        let {data,status} = await axios.get("https://fakestoreapi.com/products/categories");

        console.log(data)
        
        if(status==200){
            const buttons=[...data,...["All"]];
            this.setState({
                category:buttons
            })
        }

     }

     buttonClickFunction = async(btn)=>{
        if(btn=="All"){
            // fakeProducts();
            this.setState({
                products:this.state.allItems
            })
            
        }
        else{
           let {data,status} = await axios.get(`https://fakestoreapi.com/products/category/${btn}`);
            console.log(data)

            if(status===200){
                this.setState({
                    products:data
                })
            }
        }
        
     }


    render(){
        return(
            <>

            
            {
                            this.state.category.map((btn)=>{
                                return(
                                    <>
                                          <button style={{backgroundColor:"#0b5ed7", border:"none", borderRadius:"5px", color:"white", margin:"5px"}} onClick={()=>{this.buttonClickFunction(btn)}}>{btn}</button>
                                    </>
                                )

                            })
                        }

            <div style={{display:"flex", flexWrap:"wrap",justifyContent:"space-between" }}>
                        
            {
                this.state.products.map((data)=>{
                    return(
                        <>
                            <ReactBootsrapCard img={data.image} title={data.title} text={data.description}/>
                        </>
                    )
                })
            }
            </div>
            </>
        )
    }
}

export default FetchingAPICards