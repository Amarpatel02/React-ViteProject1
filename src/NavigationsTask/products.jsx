import { useContext, useEffect, useState } from "react"
import ReusableCard from "../ReuseableCards/resuseableCard"
import axios from "axios"
import HomePage from "./navbar"
import { GlobalStateManagement } from "./stack"







const ProductsPage = ()=>{

    const {username} = useContext(GlobalStateManagement)

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
        <h3>Hello {username}</h3>
        <ReusableCard data={data}/>
        </>
    )
}
export default ProductsPage