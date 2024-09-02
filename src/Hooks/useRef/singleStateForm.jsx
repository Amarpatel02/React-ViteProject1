import { useState } from "react"
import TableReuseableComponent from "./tableComponent"
import { indianStates } from "../jsHelper"
import { emailRegex, mobileRegex } from "../../validationsRegex"





const SingleStateForm = () => {

    let [userData,setUserData]= useState({
        username:"",
        email:"",
        password:"",
        mobileNumber:"",
        state:""
    })

    let [inputErrors,setInputErrors]=useState({
        usernameErr:"",
        emailErr:"",
        mobileNumberErr:""
    })


    let [submitedData,setSubmitedData]=useState([])

    const userInputsFun = (event)=>{

        const{name,value}=event.target
        console.log(name,value)
        validationsFun(value,name)



        setUserData({...userData,[name]:value})

    }

    const onSubmit = (event)=>{
        event.preventDefault()

        if(userData.username && userData.email && userData.mobileNumber && userData.password ){
            setSubmitedData([...submitedData,userData])
        }

        setUserData({
        username:"",
        email:"",
        password:"",
        state:""
    })
    }


    const validationsFun = (value,name)=>{

        let errors = {}
        if(name=="username"){
            console.log(name,value,'inside if');
            if(!value){
                errors.usernameErr = "Please Enter your Username"
            }
            else if(value.length<4||value.length>15){
                errors.usernameErr = "Username should be between 4 and 15 characters";
            }
        }
        if(name=="email"){
            if(!value){
                errors.emailErr = "Please Enter your Username"
            }
            else if(!emailRegex.test(value)){
                errors.emailErr = "Please Enter a valid Email";
            }
        }

        if(name=="mobileNumber"){
            if(!value){
                errors.mobileNumberErr = "Please Enter your MobileNumber"
            }
            else if (!mobileRegex.test(value)){
                errors.mobileNumberErr = "Invalid Mobile Number"
            }
        }
        setInputErrors(errors)
    }
    
    return (
        <>
            <div style={{width:"40%",marginLeft:"30%"}}>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                    <label htmlFor="">UserName</label>
                    <input type="text" 
                           className="form-control"
                           name="username"
                           onChange={userInputsFun}
                           value={userData.username}
                           />
                         {inputErrors?.usernameErr&& <small style={{color:'red'}}> {inputErrors?.usernameErr}</small>}<br></br>
                        <label htmlFor="exampleInputEmail1" className="form-label"> 
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            name="email"
                            onChange={userInputsFun}
                            value = {userData.email}
                        />
                        
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            name="password"
                            onChange={userInputsFun}
                            value={userData.password}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Mobile Number
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="exampleInputPassword1"
                            name="mobileNumber"
                            onChange={userInputsFun}
                            value={userData.mobileNumber}
                        />
                {inputErrors.mobileNumberErr && <small style={{color:'red'}}>{inputErrors.mobileNumberErr}</small>}

                    </div>




                    <select name="state" id=""className="form-control" onChange={userInputsFun} value={userData.state}>State
                                <option value="">--Select Your State--</option>
                                {
                                    indianStates.map((each)=>{
                                        return(
                                        <option value={each}>{each}</option>
                                        )
                                    })
                                }
                    </select>

                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Check me out
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
                <TableReuseableComponent rowData={submitedData} setSubmitedData={setSubmitedData}/>
            {/* <h3>Entered email: {email}</h3> */}

            </div>
        </>
    )
}
export default SingleStateForm