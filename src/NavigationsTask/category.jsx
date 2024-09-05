import { NavLink, Outlet } from "react-router-dom"
import CategoryPageLinks from "./categoryLinks"
import HomePage from "./navbar"







const CategoryPage = ()=>{
    return(
        <>
        <HomePage/>
        <CategoryPageLinks/>
        <Outlet/>
        </>
    )
}
export default CategoryPage