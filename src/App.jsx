import ReactBootsrapCard from "./reactBootsrap/reactBootsrapCard.jsx"
import { data } from "./arrayOfObjects/data.js"
import bootstrapFirstComponent from "./bootStrap/firstComponent.jsx"
import BootstrapFirstComponent from "./bootStrap/firstComponent.jsx"


function Calling(){
   return(
      <>
         <BootstrapFirstComponent/>

      {/* {
         data.map(eachData=>{
            return(
               // <ReactBootsrapCard title={eachData.name} text={eachData.hero}/>
               
            )
         })
      } */}
      </>
   )

}



export default Calling