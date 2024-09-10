import axios from "axios"
import { useEffect, useState } from "react"





const HocExample = (Component)=>{

    return ()=>{

        const [fetchedData,setFetchedData]=useState([])
        useEffect(()=>{
            fetchData()
        },[])

        const fetchData = async()=>{
            const {data,status} = await axios.get("https://fakestoreapi.com/products")
            setFetchedData(data)
        }

        return <Component data={fetchedData}></Component>
    }
}
export default HocExample