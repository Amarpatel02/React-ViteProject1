import { useEffect, useState } from "react"
import ReusableCard from "../ReuseableCards/resuseableCard"
import axios from "axios"







const JeweleryPage = ()=>{

    const [data,setData]=useState([])

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata = async ()=>{
        const response = await axios.get("https://fakestoreapi.com/products/category/jewelery")

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
export default JeweleryPage