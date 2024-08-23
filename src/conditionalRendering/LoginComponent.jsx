


const LoginComponent = ({isAdmin=false})=>{

//    if(isAdmin){
//     return(
//     <h3>Wellcome Admin</h3>
//     )
//    }
//    else{
//     return(
//         <h3>Wellcome User</h3>
//     )
//    }

//  return(
//     <>
//     {/* {isAdmin?<h3>Wellcome Admin</h3>:<h3>Wellcome user</h3>} */}

//     <h3>Wellcome {isAdmin?"Admin":"USer"}</h3>

//     </>
//  )

return(
    <>
    <h3>Wellcome{isAdmin && "Admin"}</h3>
    </>
)

}

export default LoginComponent