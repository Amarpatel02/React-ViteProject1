import { useEffect, useState } from "react"
import axios from "axios"
import ReusableCard from "../ReuseableCards/resuseableCard"






const ElectronicsPage = ()=>{
    const [data,setData]=useState([])

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata = async ()=>{
        const response = await axios.get("https://fakestoreapi.com/products/category/electronics")
                                          
        if(response.status===200){
            console.log(response.data, "data")
            setData(response.data)
        }
    }

    return(
        <>
        <ReusableCard data={data}/>
        </>
    )
}
export default ElectronicsPage