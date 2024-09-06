import { useContext } from "react"
import HomePage from "./navbar"
import { GlobalStateManagement } from "./stack"






const AboutPage = ()=>{

        const {username,darkTheme,themeHandler} = useContext(GlobalStateManagement)

        const themeChangeFun = ()=>{
            themeHandler()
        }

        console.log(themeHandler)
    return(
        <>
        <HomePage/>
        <h3>Wellcome to About Page</h3>
        <h3>heyyy Helloo {username}</h3>
        <button onClick={themeChangeFun}>Change Theme</button>
        </>
    )
}
export default AboutPage