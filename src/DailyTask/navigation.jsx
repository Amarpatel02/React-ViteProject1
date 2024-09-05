import { BrowserRouter, Route, Routes } from "react-router-dom"
import TaskOne from "./task1"
import Model from "../model/model"
import AboutPage from "./aboutPage"
import ContactPage from "./contactPage"






const NavigationsTask = ()=>{
    return(
        <>
        <BrowserRouter>
           <Routes>
                <Route path="/" element={<TaskOne/>}/>
                <Route path="/add" element={<Model/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
           </Routes>
        </BrowserRouter>
           </>
    )
}

export default NavigationsTask