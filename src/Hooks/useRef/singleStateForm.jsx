import { useState } from "react"
import TableReuseableComponent from "./tableComponent"





const SingleStateForm = () => {

    let [userData,setUserData]= useState({
        username:"",
        email:"",
        password:"",
        state:""
    })

    let [submitedData,setSubmitedData]=useState([])

    const userInputsFun = (event)=>{

        const{name,value}=event.target
        console.log(name,value)

        setUserData({...userData,[name]:value})

    }

    const onSubmit = (event)=>{
        event.preventDefault()
        setSubmitedData([...submitedData,userData])

        userData({
        username:"",
        email:"",
        password:"",
        state:""
    })
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

                    <select name="state" id=""className="form-control" onChange={userInputsFun} value={userData.state}>State
                                <option value="">--Select Your State--</option>
                                <option value="Telangana">Telangana</option>
                                <option value="AndhraPradesh">AndhraPradesh</option>
                                <option value="maharastra">Maharastra</option>
                                <option value="kerala">Kerala</option>
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
                <TableReuseableComponent rowData={submitedData}/>
            {/* <h3>Entered email: {email}</h3> */}
            </div>
        </>
    )
}
export default SingleStateForm