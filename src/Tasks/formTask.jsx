
import { useState } from "react"
import SingleStateForm from "../Hooks/useRef/singleStateForm"


const NavFormTask = ()=>{

    const [showTable,setShowTable]=useState(false)
    const [homeComponent ,setHomeComponent]= useState(false)

    const formComponentFun =()=>{
            setShowTable(!showTable)
        
    }
    const homeClick = ()=>{
        return(
            setHomeComponent(!homeComponent)
        )
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
                    <button style={{width:"100px", border:"none", margin:"10px"}} onClick={homeClick}>Home</button> <br />
                    <button style={{width:"100px",border:"none" ,margin:"10px"}}>About</button> <br />
                    <button style={{width:"100px",border:"none",margin:"10px"}}>Contact</button> <br />
                    <button style={{width:"100px",border:"none",margin:"10px"}} onClick={formComponentFun}>{showTable?"Remove Form":"Add Form"}</button>
                </div>
                  <div style={{width:"80%", height:"500px", overflow:"auto"}}>
                    {
                        homeComponent && <SingleStateForm/>
                    }
                    {
                       showTable && <SingleStateForm/>
                    }
                    </div>
                </div>

    </>
)
}
export default NavFormTask
