import { useDispatch, useSelector } from "react-redux"
import { BOOK_TICKETS } from "./action.type"
import { bookTickets } from "./tickets/action"






const ReduxExample = ()=>{

    const reduxData = useSelector(state=>state)
    console.log("reduxdata", reduxData)
    const usedispatch = useDispatch()

    return(
        <>
        <h3>Total Tickets:{reduxData.totalTickets} </h3>
        <h3>BookedTickets:{reduxData.bookedTickets} </h3> <button onClick={()=>usedispatch(bookTickets(2))}>bookTicket</button>
        <h3>Available Tickets {reduxData.totalTickets-reduxData.bookTickets}</h3>
        </>
    )
}

export default ReduxExample