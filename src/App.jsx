// import {OrderedList} from "./table/table.jsx"
// import {UnOrderList} from "./table/table.jsx"
// import {Card} from "./table/table.jsx"
// import {Players} from "./cards/card.jsx"

import Props, {UnOrder} from "./props/props.jsx"
import { recipes } from "./data/data.js"
import {toast,ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

// import {Card} from "./cards/card.jsx"




function Calling(){
   let toastFunction=()=>{
      toast("Basic toastify")
      toast.info("Info Notification")
      toast.success("success Notification")
      toast.warning("waring Notification")
      toast.error("error Notification");


      // toast("Basic hello",{position: toast. POSITION })
      // toast.info("Info Notification")
      // toast.success("success Notification")
      // toast.warning("waring Notification")
      // toast.error("error Notification")

      toast("Basic hello", { position: toast.POSITION.TOP_RIGHT });
      toast.info("Info Notification", { position: toast.POSITION.BOTTOM_LEFT });
      toast.success("Success Notification", { position: toast.POSITION.TOP_CENTER });
      toast.warning("Warning Notification", { position: toast.POSITION.BOTTOM_RIGHT });
      toast.error("Error Notification", { position: toast.POSITION.BOTTOM_CENTER });


   }
   return(
      <>
      <button onClick={toastFunction}>Toastify</button>
      <ToastContainer></ToastContainer>

      </>
   )
}




//  function Calling(){
//  return(
//   <>
//   {/* <OrderedList></OrderedList>
//   <UnOrderList></UnOrderList> */}
//   {/* <Card></Card> */}
//   {/* <Players/>     */}

//    <Props imgURL='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5bNI369heDCsCAMUZmunNxIXrQirxL0TL0g&s' alt = 'prabhas' width={200} height={300} title={"Kalki"}></Props>
//    <Props imgURL='https://static.india.com/wp-content/uploads/2024/04/Devara-Part-1.png?impolicy=Medium_Resize&w=1200&h=800' alt = 'NTR' width={300} height={200} title={"Devara"}></Props>
//    <Props imgURL='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2v1iHVTjGNYo9YO3oSi92FCfgOmJkVJPDA&s' alt = 'Mahesh' width={200} height={300} title={"Guntur Kaaram"}></Props>
//    <Props imgURL='https://m.media-amazon.com/images/M/MV5BZDdlYTY0NTAtNjJmYy00MjZjLTk4OWYtMTg2Mzg2YzAwZjYxXkEyXkFqcGdeQXVyMTUzMTcxMTcz._V1_.jpg' alt = 'pawan' width={200} height={300} title={"OG"}></Props>
//   {
//    recipes.map((data)=>{
//       return(
//          <div>
//             <Props imgURL={data.image} width={200} height={200} title={data.name}></Props>
//             <UnOrder list ={data.ingredients}></UnOrder>
//          </div>
//       )

//    })
//   }




// </>
//  )
// }

export default Calling