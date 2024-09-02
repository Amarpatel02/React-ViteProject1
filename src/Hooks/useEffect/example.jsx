import axios from "axios"
import { Button } from "bootstrap"
import { useEffect } from "react"
import { useState } from "react"
import ReusableCard from "../../ReuseableCards/resuseableCard"






const UseEffectFakeStoreApi = ()=>{
    const [data,setData]=useState([])
    const [endPoints,setEndPoints]=useState("products")

    useEffect(()=>{
        fetchdata()
        console.log("useEffect Called")
       },[endPoints])

   const endPointsFun =(event)=>{
        setEndPoints(event)
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
               <button onClick={()=>{endPointsFun(each)}}>{each}</button>
            )})
        }
        <h3>{endPoints}</h3>
        <ReusableCard data={data}/>
        </>        

    )
}
export default UseEffectFakeStoreApi