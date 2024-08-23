import LoadingSpinner ,{LoadingCircleSpinner,LoadingHourglass} from "./spinnerLoaders/loadingSpinner"


function Calling(){
return(
   <>
   <LoadingSpinner/>
   <LoadingCircleSpinner height={200} width={200} color={"red"}/>
   <LoadingHourglass/>
   </>
)
}
export default Calling