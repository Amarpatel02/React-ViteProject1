import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import ReusableCard from "../../ReuseableCards/resuseableCard"
import TableReuseableComponent from "../../table/table"






const UseEffectFakeStoreApi = ()=>{
    const [data,setData]=useState([])
    const [endPoints,setEndPoints]=useState("products")

    const [active,setActive]=useState("")

    useEffect(()=>{
        fetchdata()
        console.log("useEffect Called")
       },[endPoints])

   const endPointsFun =(event)=>{
        setEndPoints(event)
        setActive(event)
    }

    const fetchdata = async()=>{
        try{
            const {status,data}=await axios.get(`https://fakestoreapi.com/${endPoints}`)
            console.log(data)
        if(status==200){
            setData(data)
        }
        }
        catch(err){
            console.log(err,"You have an error at fetching the data")
        }
    }

    return(
        <>
        {
            ["products","carts","users"].map((each)=>{ return(
               <button type="button" class="btn btn-primary" style={{margin:".50rem"}} onClick={()=>{endPointsFun(each)}}>{each}</button>
            )})
        }
        {active === "products" &&<ReusableCard data={data}/>}
        {active==="users"&& <TableReuseableComponent data ={data}/> }
        
        </>        

    )
}
export default UseEffectFakeStoreApi