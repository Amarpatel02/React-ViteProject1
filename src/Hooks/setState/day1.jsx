
import React,{useState} from "react"



const SetStateComponent = ()=>{

    const[age,setAge] =useState(10)


    // const inc=()=>{
    //     setAge(age+1)
    // }

    // const dec=()=>{
    //     if(age>0){
    //     setAge(age-1)
    // }
    // }

    // const reset=()=>{
    //     setAge(0)
    // }

    const mainFun=(type)=>{

        switch(type){
            case "INC":
                setAge(age+1)
                break
            case "DEC":
                    setAge(age-1)
                    break
            case "RES":
                setAge(0)
            default :
            break
        }

    }

    return(
        <>
        <h3>Your Age:{age}</h3>
        {/* <button onClick={inc}>incr</button>
        <button onClick={dec}>Dec</button>
        <button onClick={reset}>Reset</button> */}
        <button onClick={()=>{ setAge(pre => pre+1)}}>INC</button>
        <button onClick={()=>{ setAge(pre => pre-1)}}>DEC</button>
        <button onClick={()=>{ setAge(0)}}>RESET</button>
        </>
    )
}
export default SetStateComponent