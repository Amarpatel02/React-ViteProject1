import { useReducer, useState } from "react"



const reducer = (state,action)=>{

    switch(action.type){
        case 'USERNAME' :
            return{...state,userName:action.payload}

    }


}




const UseReduceExample = ()=>{

    const initialState = {
        userName:"",
        age:24,
    }


   const [currentState,dispatch] = useReducer(reducer,initialState)

   const [name,setName] = useState("")

   const nameHandler = (event)=>{
        setName(event.target.value)
   }

   const onSubmit = ()=>{

     dispatch({
        type: "USERNAME",
        payload:name
     })

   }



    return(
        <>
       <span>Enter Your Name</span> <input type="text" value={name} onChange={nameHandler} />  <button onClick={onSubmit}>Submit</button>
        <h3>Hello {currentState.userName}</h3>
        <h3>Age:{currentState.age}</h3>
        </>
    )
}
export default UseReduceExample