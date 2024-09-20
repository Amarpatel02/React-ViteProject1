import { BOOK_TICKETS } from "../action.type"





export const bookTickets = (qty)=>{
    return{
        type:BOOK_TICKETS,
        payload:qty
    }
}