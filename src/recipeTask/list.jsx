


function OrderListComponent ({ingredients }){

    return(
       <ol>
{
    ingredients.map((each,index)=>{
        return(
            <li key={index} >{each}</li>
        )
    })
}
       </ol>
    )
}
export default OrderListComponent