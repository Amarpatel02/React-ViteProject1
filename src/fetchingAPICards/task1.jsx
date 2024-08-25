
import { Component } from "react"
import { LoadingHourglass } from "../spinnerLoaders/loadingSpinner";
import ReactBootsrapCard from "../reactBootsrap/reactBootsrapCard";



class FetchingAPICards extends Component{

    state={
        recipes:[],
        loader:true
    }

    componentDidMount(){
        this.fetchFunction()
    }

 fetchFunction = async ()=>{
    const fetchData = await fetch("https://dummyjson.com/recipes")
    const {recipes} = await fetchData.json();
    console.log(recipes)

    this.setState({
        recipes:recipes,
        loader:false
    })
 }

 render(){
    return(
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
        {
            this.state.loader ? <LoadingHourglass/> : <>
            {
                this.state.recipes.map(data=>{
                    const{name,image,ingredients}=data
                    console.log(name)
                    return(
                        <div>
                        <ReactBootsrapCard name={name} image={image}/>
                        {/* <h3>{data.name}</h3> */}
                        </div>
                    )
                    
                })
            }
            </>
        }
        </div>
    )
 }



} 
export default FetchingAPICards