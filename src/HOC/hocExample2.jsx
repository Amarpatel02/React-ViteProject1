import { Component, useState } from "react"





const CounterExample = (Component)=>{
    return ()=>{
        const [count,setCount] = useState(0)

        const incrementHandler =()=>{
            setCount(count+1)
        }
        return <Component count={count} incrementHandler={incrementHandler}/>
    }
}
export default CounterExample