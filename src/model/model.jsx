import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { indianStates } from '../Hooks/jsHelper';

function ModelComponent() {
  const [show, setShow] = useState(false);

  const [userData,setUserData]=useState({
    username:"",
    email:"",
    mobileNumber:"",
    password:"",
    state:""
  })

  const [submitedData,setSubmitedData]=useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const userInputsFun =(event)=>{
    const {name,value}=event.target
    setUserData({...userData,[name]:value})
    submitedFunction(userData)
  }

  const submitedFunction =(event)=>{
    event.preventDefault()

    if(userData.username&& userData.email&&userData.mobileNumber&&userData.password&&userData.state){
      setSubmitedData([...submitedData,userData])
    }
console.log(submitedData)
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
        <Modal.Body>
        <div >
                <form onClick={submitedFunction}>
                    <div className="mb-3">
                    <label htmlFor="">UserName</label>
                    <input type="text" 
                           className="form-control"
                           name="username"
                           value={userData.username}
                           onChange={userInputsFun}
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
                            value={userData.email}
                            onChange={userInputsFun}
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
                            value={userData.password}
                            onChange={userInputsFun}

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
                            value={userData.mobileNumber}
                            onChange={userInputsFun}

                        />

                    </div>

                    <select name="state" id=""className="form-control"onChange={userInputsFun}>State
                                <option value="">--Select Your State--</option>
                                {
                                  indianStates.map((state)=>{
                                    return(
                                      <>
                                      <option value={state}>{state}</option>
                                      </>
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
                    <button type="submit" className="btn btn-primary" onClick={handleClose}>
                        Submit
                    </button>
                </form>
                </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModelComponent;