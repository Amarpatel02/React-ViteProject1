
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


let ToastifyComponent =({message})=>{
    const notify = () =>{
        toast(message);
        toast.success("Successfull",{        
        position: "top-center"
        })
        toast.error("Erroe!")
        toast.warning("warning")


        toast.success("Success Notification !", {
            position: "top-center"
          });
    
          toast.error("Error Notification !", {
            position: "top-left"
          });
    
          toast.warn("Warning Notification !", {
            position: "bottom-left"
          });
    
          toast.info("Info Notification !", {
            position: "bottom-center"
          });
    
          toast("Custom Style Notification with css class!", {
            position: "bottom-right",
            className: 'foo-bar'
          });


          toast.info("Lorem ipsum dolor"); // same as toast(message, {type: "info"});
                toast.error("Lorem ipsum dolor")
                toast.success("Lorem ipsum dolor")
                toast.success("Lorem ipsum dolor", {
                theme: "colored"
                })
                toast.warn("Lorem ipsum dolor")
                toast.warn("Lorem ipsum dolor", {
                theme: "dark"
          })
    
    } 
    return(
        <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    )

}
export default ToastifyComponent