
export function OrderedList(){
    return (
    
       <ol> <List></List></ol>
    )
};


export function UnOrderList(){
    return(
        <ul><List></List></ul>
    )
}



let arr = ["Amar","Ramu","sai","Charan","Kranthi","sagar"]
 const List =()=>{
    return (
        <>
        {/* // <li>Amar</li>
        // <li>Sai</li>
        // <li>Ram</li> */}
       { arr.map((data)=>{

       return <li>{data}</li>

        })}

         </>
        
    )
}



//  export let Card = ()=>{
//     return(
//         <div>
//         <img src ="https://filmfare.wwmindia.com/content/2020/apr/baahubali2facts11588076005.jpg" className="img" height={220} width={200}/>
//         </div>
//     )
// }
