import { NavLink } from "react-router-dom"







const CategoryPageLinks = ()=>{
       const styling={
        width:"100px",
        border:"none", 
        margin:"10px",
        textDecoration:"none"
   }
    return(
        <>
        <button style={{width:"100px",border:"none" ,margin:"10px"}} > <NavLink to={"electronics"} style={styling}>Electronics</NavLink></button>
        <button style={{width:"100px",border:"none" ,margin:"10px"}}><NavLink to={"jewelery"} style={styling}>Jewelery</NavLink></button>
        <button style={{width:"100px",border:"none",margin:"10px"}}><NavLink to={"mens"} style={styling}>Mens</NavLink></button>
        <button style={{width:"100px",border:"none",margin:"10px"}} > <NavLink to={"womens"} style={styling}>Womens</NavLink></button>
    </>
    
    )
}
export default CategoryPageLinks