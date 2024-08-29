// import axios from "axios";
// import { Component } from "react";
// import ReactBootsrapCard from "../recipeTask/card";








// class FakeStoreAPIClass extends Component{

//     state={
//         fetchedData:[],
//         selectedProduct:null
//     }
    

//     componentDidMount(){
//         this.apiCalling()
//     }


//     productFunCalling = (each)=>{
//         this.setState({
//             selectedProduct:each
//         })
//     }



//     apiCalling = async ()=>{
//         let {data,status} = await axios.get("https://fakestoreapi.com/products")

//         if(status==200){
//             this.setState({
//                 fetchedData:data
//             })
//         }
//     }

//     render(){
//         return(
//             <>
//             {
//                 this.state.fetchedData.map((each)=>{
//                     return(
//                         <>
//                         <ReactBootsrapCard img={each.image} title={each.title} text={each.description} onClick={()=>{this.productFunCalling(each)}} />
//                         </>
//                     )
//                 })
//             }

//             {
//                 this.state.selectedProduct &&(
//                 <div className="selected-product" style={{ width: '35%', marginLeft: '40%' }}>
//                      <ReactBootsrapCard img={this.state.selectedProduct.image} title={this.state.selectedProduct.title} text={this.state.selectedProduct.description}/>
//                  </div>
//                 )}


//             </>
//         )
//     }

// }
// export default FakeStoreAPIClass

import axios from "axios";
import { Component } from "react";
import ReactBootsrapCard from "../recipeTask/card"; 
class FakeStoreAPIClass extends Component {
    state = {
        fetchedData: [],
        selectedProduct: null
    };

    componentDidMount() {
        this.apiCalling();
    }

    productFunCalling = (each) => {
        this.setState({
            selectedProduct: each
        });
    };

    apiCalling = async () => {
        let { data, status } = await axios.get("https://fakestoreapi.com/products");

        if (status === 200) {
            this.setState({
                fetchedData: data
            });
        }
    };

    render() {
        return (
            <div className="d-flex justify-content-between" style={{ width: '100%' }}>
                <div className="product-list d-flex flex-wrap" style={{ width: '60%' }}>
                    {this.state.fetchedData.map((each) => {
                        return (
                            <div key={each.id} >
                                <ReactBootsrapCard
                                    img={each.image}
                                    title={each.title}
                                    text={each.description}
                                    onClick={() => { this.productFunCalling(each); }}
                                />
                            </div>
                        );
                    })}
                </div>

                {this.state.selectedProduct && (
                    <div className="selected-product" style={{ width: '35%' }}>
                        <ReactBootsrapCard
                            img={this.state.selectedProduct.image}
                            title={this.state.selectedProduct.title}
                            text={this.state.selectedProduct.description}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default FakeStoreAPIClass;
