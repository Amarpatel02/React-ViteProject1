import { useEffect, useState } from "react"
import ReusableCard from "../ReuseableCards/resuseableCard"
import axios from "axios"
import HomePage from "./navbar"







const ProductsPage = ()=>{

    const [data,useData]=useState([])

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData =  async ()=>{
        let response = await axios.get("https://fakestoreapi.com/products")

        if(response.status === 200){
            useData(response.data)
        }
    }

    return(
        <>
        <HomePage/>
        <ReusableCard data={data}/>
        </>
    )
}
export default ProductsPage