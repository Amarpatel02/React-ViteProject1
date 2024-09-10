import NavigationsTask from "./DailyTask/navigation"
import TaskOne from "./DailyTask/task1"
import HocExample from "./HOC/hocExample"
import UseReducerExample2 from "./Hooks/useReduce/useReduce"
import UseReduceExample from "./Hooks/useReduce/useReducer"
import UseReduceAndGlobalState from "./Hooks/useReduce/useReducer&GlobalState"
import Model from "./model/model"
import NavigationsTask1 from "./NavigationsTask/stack"



function Calling(){
return(
   <>
   {/* <NavigationsTask1/> */}
   {/* <NavigationsTask/> */}
   {/* <TaskOne/> */}
   {/* <Model/> */}

   {/* <UseReducerExample2/> */}
   {/* <UseReduceExample/> */}
   <UseReduceAndGlobalState/>
   {/* <HocExample/> */}
   </>
)
}
export default Calling