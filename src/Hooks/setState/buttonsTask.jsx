
import { useState } from "react"
import { itemFunction } from "../jsHelper"


const ButtonTask =()=>{

    const [data,setTudos]= useState(itemFunction())
    const [index,setindex]=useState("")
    console.log(data)

   const indexFunCall =(id)=>{
    if(id%2==0){
        setindex(()=>`Even Button ${id}`)
    }
    else{
        setindex(()=>`Odd Button ${id}`)

    }
    }

    const addButtonFun =()=>{
       let currentLength = data.length
       const myObject = {
            "id":currentLength+1,
            "item":`button ${currentLength+1}`
        }
        setTudos([...data,myObject])
        console.log(currentLength)
    }

    const removeButton =()=>{
        const lastButton = [...data]
        lastButton.pop()
        setTudos(lastButton)
    }


    return(
        <>
            <h3>The Clicked Button is:{index} </h3>
            <button onClick={addButtonFun}>Add Button</button> 
            <button onClick={removeButton}>Remove Button</button>
        <div style={{display:"flex", flexWrap:"wrap",width:"70%",marginLeft:"15%",justifyContent:"space-between"}}>

        {
            data.map((each)=>{
                return(
                    <span key={each.id}>
                    <button onClick={()=>indexFunCall(each.id)} style={{width:"100px"}}>{each.item}</button>
                    </span>
                )
            })
        }
        </div>
        </>
    )
}
export default ButtonTask