


export const  intitialState = {
    count:0
}


export const reduceFunction = (state,action)=>{
    switch(action.type){
        case "INCREMENT":
            return{...state,count:state.count +1}
        case "DECREMENT":
            return{...state,count:state.count-1}
        default :
         state
    }
}