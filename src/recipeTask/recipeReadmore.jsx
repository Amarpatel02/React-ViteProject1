import axios from "axios";
import { Component } from "react";
import ReactBootsrapCard from "./card";


class RecipeReadMoreTask extends Component{

    state={
        recipes: [],
        active:false
    }

    componentDidMount(){
        this.fetchingData()
    }

     fetchingData = async ()=>{
        const {data} = await axios.get("https://dummyjson.com/recipes")
        const{recipes}=data
        console.log(recipes)

        this.setState({
            recipes:recipes
        })
    }

    render(){
        return(
            <div style={{display:"flex", flexWrap:"wrap",justifyContent:"space-between"}}>
            {
                this.state.recipes.map((each)=>{
                    return(
                        <div>
                        <ReactBootsrapCard title={each.name} img={each.image} ingredients={each.ingredients} id={each.id}/>
                        </div>
                    )
                })
            }
            </div>
        )
    }

    
}
export default RecipeReadMoreTask