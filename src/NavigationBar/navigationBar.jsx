import { Link, NavLink } from "react-router-dom"
import "./navCss.css"


const NavigationBar = ()=>{
   const linkStyling={
        textDecoration:"none", 
        marginLeft:"8px"
    }

    return(
        <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <NavLink to={"/"} style={linkStyling}>Login</NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapsibleNavbar"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
            <NavLink to={"/home"} style={linkStyling}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/about"} style={linkStyling}>About</NavLink>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Link
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another link
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                A third link
              </a>
            </li>
          </ul>
        </li> */}
      </ul>
    </div>
  </div>
</nav>

        </>
    )
}
export default NavigationBar