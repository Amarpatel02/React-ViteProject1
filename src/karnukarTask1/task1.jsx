import axios from "axios"
import { useState } from "react"





const FakestoreApiKarunakarTask = ()=>{

  const[data,setData] = useState([])
  const[flag,setFlag] = useState(false)

     const callingAPI = async()=>{
        try{
        const {data} = await axios.get("https://fakestoreapi.com/products/category/men's clothing")
        console.log(data)
        setData(data)
        setFlag(!flag)        
      }catch(err){
          console.log(err,"Errorrrrrrrrrrrrrrrrr")

        }

     }
     const addFunction = async ()=>{
      const endNumber = Math.floor(Math.random()*20)
      const {data} = await axios.get(`https://fakestoreapi.com/products/${endNumber}`)

      setData(prevesData => [...prevesData,data])

     }

    return(
        <>
                <div style={{width:"80%", height:"100px", marginLeft:"10%", display:"flex", justifyContent:"space-between", alignItems:"center", position:"sticky",top:"10",backgroundColor:"white",zIndex: "1000"}}>
                    <img src="https://dukaan.b-cdn.net/1000x1000/webp/4039423/78b1bfca-d51a-4799-9926-cdf9a2fef244/1618791503470-40c79388-7c67-477c-a2a6-0b21b0efbb0b.jpeg" alt="" style={{height:"100px"}}/>
                    <h2>FASHION HUB</h2>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFVHR62PqqslJrmbNHhwiH3Cmb99-h10mi6g&s" alt="" style={{height:"100px"}} />
                </div>

                <div style={{width:"80%", height:"100px", marginLeft:"10%", display:"flex"}}>
                <div style={{width:"20%", height:"500px"}}>
                    <button style={{width:"100px", border:"none", margin:"10px"}} onClick={callingAPI}>Home</button> <br />
                    <button style={{width:"100px",border:"none",margin:"10px"}}>About</button> <br />
                    <button style={{width:"100px",border:"none",margin:"10px"}}>Contact</button> <br />
                    <button style={{width:"100px",border:"none",margin:"10px"}} onClick={addFunction}>Add</button> 
                </div>

                <div>
                  {
                    flag&&<TableComponenetKarnukar data={data} setData={setData}/>
                  }
                </div>
                </div>
    
        </>
    )
}
export default FakestoreApiKarunakarTask


export const TableComponenetKarnukar = ({data=[],setData})=>{


    const removeFunction = (id)=>{
       const filteredData = data.filter((data)=> data.id!==id)
       setData(filteredData)
    } 

    return(
       <>
         <table className="table table-striped">
    <thead>
      <tr>
        <th>Image</th>
        <th>Title</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
{
  data.map((each)=>{
    return(
      <tr key={each.id}>
      <td><img src={each.image} alt=""  width={100} height={100}/></td>
      <td>{each.title}</td>
      <td>{each.price}</td>
      <td><button onClick={()=>{removeFunction(each.id)}}>Remove</button></td>
    </tr>
    )
  })
}
    </tbody>
  </table>

       </>
    )
 }
 