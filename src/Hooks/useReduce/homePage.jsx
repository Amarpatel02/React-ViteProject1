import { useContext } from "react"
import { GlobalCounter } from "./useReducer&GlobalState"





const HomePageUseReducer = ()=>{
    const {currentState,dispatch} =useContext(GlobalCounter)
    console.log(currentState)

    const incrementFunction = ()=>{
        dispatch({
            type:"INCREMENT",
        })
    }

    return(
    <>
    <h3>WelloCome to HomePage</h3>
    <h3>count: {currentState.count}</h3>
    <button onClick={incrementFunction}>Increment</button>
    </>
    )
}
export default HomePageUseReducer