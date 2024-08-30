import { useState } from "react"




const ControlledFormTask = () => {

    let [userInput ,setUserInput] = useState("")
    let [userError,setUserError]=useState("")


   const onChangeFun =(event)=>{
    let temp = event.target.value
    setUserInput(temp)
   let errors = validadtionFun(temp)
   if(errors){
    setUserError(errors)
   }
   else{
    setUserError("")
   }
   }

   const validadtionFun = (argument)=>{
    const nameRegex = /^samsung/i
    let error = ""
    if(!argument){
        error = "Please Enter the name"
    }else if(!nameRegex.test(argument)){
        error = "Please Enter the valid model"
    }

    return error
   }

   const sumbitFun = (event)=>{
        event.preventDefault()
    if(userError){
        alert("please enter valid details")
    }
    else{
        //fetch data
    }
   }


    return (
        <>

            <div style={{ width: "30%", border: "2px solid", marginLeft: "35%", marginTop: "20px", padding: "10px" }}>
                <h3 style={{ textAlign: "center" }}>Enter User Details</h3>
                <form onSubmit={sumbitFun}>
                    <div className="form-group">
                        <label htmlFor="username">UserName:</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter email" name="username" onChange={onChangeFun} value={userInput} />
                        <small style={{color:"red"}}>{userError}</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input
                            type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" />
                    </div>
                    <button type="submit" className="btn btn-default" style={{ backgroundColor: "blue", color: "white", marginTop: "5px" }}>
                        Submit
                    </button>
                </form>
            </div>

        </>
    )
}
export default ControlledFormTask