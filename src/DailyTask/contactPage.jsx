import { useNavigate } from "react-router-dom"






const ContactPage = ()=>{
    const navigate = useNavigate()
    const homeFun = ()=>{
        navigate("/")
    }
    const goToAbout = () => {
        navigate("/about");
    }

    return(
        <>
        <h3>WellCome to Contact Page</h3>
        <button onClick={homeFun}>Home</button>
        <button onClick={goToAbout}>About</button>
        </>
    )
}
export default ContactPage