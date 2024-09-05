import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ReusableCard from "../ReuseableCards/resuseableCard"









const SingleProduct = ()=>{

    const dynamicPath = useParams()
    console.log(dynamicPath)

    const [data,useData] = useState([])

    useEffect(()=>{
        fetchData()
    },[dynamicPath])

    const fetchData = async ()=>{

        try{
            const response = await axios.get(`https://fakestoreapi.com/products/${dynamicPath.productID}`)
            if(response.status === 200){
               
                let arr = [response?.data]
                console.log(arr)
                useData(arr)
            }
    
        }
        catch(err){
            console.log(err,"Error")
        }
    }

    return(
        <div style={{marginLeft:"35%",marginTop:"5%"}}>
        <ReusableCard data={data}/>
        </div>
    )
}
export default SingleProduct