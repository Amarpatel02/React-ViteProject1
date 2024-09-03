import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../Screens/home"
import AboutScreen from "../Screens/about"
import LoginScreen from "../Screens/login"
import NavigationBar from "../NavigationBar/navigationBar"
import ErrorScreen from "../Screens/errors"







const Navigations = ()=>{
    return(
        <>
        <NavigationBar/>
                <Routes>
                    <Route path="/" element={<LoginScreen/>}/>
                    <Route path="/home" element={<HomeScreen/>}/>
                    <Route path="/about" element={<AboutScreen/>}/>
                    <Route path="/*" element={<ErrorScreen/>}/>

                </Routes>
        </>
    )
}
export default Navigations