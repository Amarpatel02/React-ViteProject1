import LoadingSpinner ,{LoadingCircleSpinner,LoadingHourglass,HeartComponent} from "./spinnerLoaders/loadingSpinner"
import ToastifyComponent from "./Tostify/tostifyComponent"


function Calling(){
return(
   <>
   <LoadingSpinner/>
   <LoadingCircleSpinner height={200} width={200} color={"red"}/>
   <LoadingHourglass/>
   <HeartComponent/>
   <ToastifyComponent message={"Basic Toastify"}/>
   </>
)
}
export default Calling