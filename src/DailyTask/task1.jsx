







import { useState } from "react"
import SingleStateForm from "../Hooks/useRef/singleStateForm"
import TableReuseableComponent from "../table/table"
import { NavLink } from "react-router-dom"
import ModelComponent from "../model/model"



const TaskOne = ()=>{

    const [showTable,setShowTable]=useState(false)
    const [homeButton ,setHomeButton]=useState(false)


    const formComponentFun =()=>{
            setShowTable(!showTable)
        
    }

    const homeFun = ()=>{

            setHomeButton(!homeButton)

    }

    const styling = {
        textDecoration:"none"
    }

return(
     <>
                     <div style={{width:"80%", height:"100px", marginLeft:"10%", display:"flex", justifyContent:"space-between", alignItems:"center", position:"sticky",top:"10",backgroundColor:"white",zIndex: "1000"}}>
                    <img src="https://dukaan.b-cdn.net/1000x1000/webp/4039423/78b1bfca-d51a-4799-9926-cdf9a2fef244/1618791503470-40c79388-7c67-477c-a2a6-0b21b0efbb0b.jpeg" alt="" style={{height:"100px"}}/>
                    <h2>FASHION HUB</h2>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFVHR62PqqslJrmbNHhwiH3Cmb99-h10mi6g&s" alt="" style={{height:"100px"}} />
                </div>

                <div style={{width:"80%", height:"100px", marginLeft:"10%", display:"flex"}}>
                <div style={{width:"20%", height:"500px"}}>
                    <button style={{width:"100px", border:"none", margin:"10px"}} onClick={homeFun} > <NavLink to={"/"} style={styling} >Home</NavLink></button> <br />
                    <button style={{width:"100px",border:"none",margin:"10px"}} ><NavLink to={"/about"} style={styling}>About</NavLink></button> <br />
                    <button style={{width:"100px",border:"none",margin:"10px"}}> <NavLink to={"/contact"} style={styling}>Contact</NavLink ></button> <br />
                    <button style={{width:"100px",border:"none",margin:"10px"}} onClick={formComponentFun}><NavLink style={styling}>{showTable?"Remove Form":"Add Form"}</NavLink></button>
                </div>
                  <div style={{width:"80%", height:"500px", overflow:"auto"}}>

                
                {
                    homeButton && <TableReuseableComponent/>
                }
                    
                {
                    showTable && <ModelComponent/>
                }
                    
                    </div>
                </div>

    </>
)
}
export default TaskOne
