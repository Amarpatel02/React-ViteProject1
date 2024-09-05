import { useEffect, useState } from "react"
import axios from "axios"







const SearchTask = ()=>{


    const [data,setData]= useState([])

    const [search ,setSearch] = useState("")

    useEffect(()=>{
        fetchData()
    },[search])

    const fetchData = async ()=>{
        try{

            const response = await axios.get(`https://dummyjson.com/recipes/search?q=${search}`)
            const {data} = response
            const {recipes}= data
            if(response.status ===200){
                setData(recipes)
                console.log(recipes)
            }
    
        } 
        catch(error){
            console.log(error,"Error in fetching Data")
        }
   }

   const searchHandler = (event)=>{
    console.log(event.target.value)
        setSearch(event.target.value)
   }

    return(
        <>

        <input type="text" value={search} onChange={searchHandler} /> <button>Search Here</button>

<table class="table table-striped">
    <thead>
      <tr>
        <th>Image</th>
        <th>name</th>
        {/* <th>Ingredients</th> */}
        <th>Instructions</th>
      </tr>
    </thead>
    <tbody>
      {
        data.map((each)=>{
                return(
                <tr>
                    <td><img src={each.image} alt="" style={{width:"150px", height:"150px"}} /></td>
                    <td>{each.name}</td>
                    {/* <td>{each.ingredients}</td> */}
                    <td>{each.instructions}</td>
                </tr>
                )
        })
      }
    </tbody>
  </table>


        </>
    )
}
export default SearchTask