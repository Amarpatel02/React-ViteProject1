import { NavLink } from "react-router-dom"
import HomePageComponent from "./homePage"
import { useContext } from "react"
import { GlobalStateManagement } from "./stack"







const HomePage = ()=>{

  const {darkTheme}=useContext(GlobalStateManagement)
  console.log(darkTheme)

  const styling={
       marginLeft:"1rem",
       marginRight:"1rem",
       textDecoration:"none"
  }

    return(
        <>
        <nav className={`navbar navbar-expand-lg navbar-light bg-${darkTheme?"white":"dark"}`}>
        <NavLink to={"/"} style={styling}>Home</NavLink>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavAltMarkup"
    aria-controls="navbarNavAltMarkup"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <NavLink to={"/products"} style={styling}>Products</NavLink>
      <NavLink to={"/category"} style={styling}>Category</NavLink>
      <NavLink to={"/about"} style={styling}>About</NavLink>
    </div>
  </div>
</nav>

        </>
    )
}

export default HomePage