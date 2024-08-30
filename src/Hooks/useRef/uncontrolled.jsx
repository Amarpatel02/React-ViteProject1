import axios from "axios"
import { useRef, useState } from "react"





const UncontrolledInput =()=>{

    let userName = useRef("")
    let userPass = useRef("")

    const [errors,setErrors]=useState("")
    const[apiData,setApiData]=useState([])


    const formSubmitFun = (event)=>{
        event.preventDefault()

        const enteredUsername = userName.current.value
        const enteredUserpass = userPass.current.value

      const ErrorsObj =  validadtionFun(enteredUsername,enteredUserpass)
      console.log(ErrorsObj)

      if(Object.keys(ErrorsObj).length>0){
        setErrors(ErrorsObj)
      }
      else{
        apiFunctionCall(enteredUsername,enteredUserpass)
        console.log("else block")

      }

    }


    const apiFunctionCall = async(name,pass)=>{
      console.log("hello")
        try{
          const {data} = await axios.post("https://dummyjson.com/auth/login",{
            "username":name,
            "password":pass
        })
        setApiData([data])
        }
        catch(err){
          console.log(err,"you have an error")
        }

        console.log(data)

    }

    const validadtionFun=(name,pass)=>{

        const errorsObject ={

        }
        if(!name){
            errorsObject.userError = "Please Enter the userName"
        }
        else if(name.length>15){
            errorsObject.userError ="userName should be less than 15 Characters"
        }

        if(!pass){
            errorsObject.passError = "Please Enter the Password"
        }
        else if(pass.length>15){
            errorsObject.passError ="Password should be less than 15 Characters"
        }
        return errorsObject

    }

    return(
      <>
        <div style={{width:"30%",border:"2px solid",marginLeft:"35%", marginTop:"20px",padding:"10px"}}>
          <h3 style={{textAlign:"center"}}>Enter User Details</h3>
    <form onSubmit={formSubmitFun}>
  <div className="form-group">
    <label htmlFor="username">UserName:</label>
    <input type="text"className="form-control"id="username"placeholder="Enter email"name="username" ref={userName}/>
    <small style={{color:"red"}}>{errors?.userError}</small>
  </div>
  <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input
      type="password"className="form-control"id="pwd"placeholder="Enter password"name="pwd" ref={userPass}/>
        <small style={{color:"red"}}>{errors?.passError}</small>
  </div>
  <button type="submit" className="btn btn-default" style={{backgroundColor:"blue",color:"white",marginTop:"5px"}}>
    Submit
  </button>
</form>
        </div>

          <table className="table table-bordered">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {
              apiData.map((each)=>{
                return(
                  <>
                  <tr>
                      <td>{each.firstName}</td>
                      <td>{each.lastName}</td>
                      <td>{each.email}</td>
                      <td><img src={each.image} alt="" style={{height:"100px"}}/></td>
                 </tr>
                  </>
                )
              })
          }
          
        </tbody>
      </table>  

        </>
    )


}
export default UncontrolledInput