import { BOOK_TICKETS } from "../action.type"





const initialState ={
    totalTickets:100,
    bookedTickets:20,
    holdTickets:10
} 

export const reducerFunction = (state=initialState, action)=>{
        switch(action.type){
            case BOOK_TICKETS:
            return{...state,bookedTickets:state.bookedTickets+action.payload}
            default:
                return state
        }
}