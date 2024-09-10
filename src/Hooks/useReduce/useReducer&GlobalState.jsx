import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePageUseReducer from "./homePage"
import AboutPageUseReducer from "./aboutPage"
import { createContext, useContext, useReducer } from "react"
import { intitialState, reduceFunction } from "./usereduse"






export const GlobalCounter = createContext()

const UseReduceAndGlobalState = ()=>{

 const[currentState,dispatch]=useReducer(reduceFunction,intitialState)

    return(

    <GlobalCounter.Provider value={{
        currentState:currentState,
        dispatch:dispatch
    }}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePageUseReducer/>}/>
                <Route path="/about" element={<AboutPageUseReducer/>}/>
            </Routes>
        </BrowserRouter>
    </GlobalCounter.Provider>
    )
}
export default UseReduceAndGlobalState