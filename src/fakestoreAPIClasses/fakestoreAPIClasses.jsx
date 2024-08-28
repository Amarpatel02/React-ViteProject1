import axios from "axios";
import { Component } from "react";
import ReactBootsrapCard from "../recipeTask/card";








class FakeStoreAPIClass extends Component{

    state={
        fetchedData:[],
        selectedProduct:null
    }
    

    componentDidMount(){
        this.apiCalling()
    }


    productFunCalling = (each)=>{
        this.setState({
            selectedProduct:each
        })
    }



    apiCalling = async ()=>{
        let {data,status} = await axios.get("https://fakestoreapi.com/products")

        if(status==200){
            this.setState({
                fetchedData:data
            })
        }
    }

    render(){
        return(
            <>
            {
                this.state.fetchedData.map((each)=>{
                    return(
                        <>
                        <ReactBootsrapCard img={each.image} title={each.title} text={each.description} onClick={()=>{this.productFunCalling(each)}} />
                        </>
                    )
                })
            }

            {
                this.state.selectedProduct &&(<ReactBootsrapCard img={this.state.selectedProduct.image} title={this.state.selectedProduct.title} text={this.state.selectedProduct.description}/>)
            }


            </>
        )
    }

}
export default FakeStoreAPIClass