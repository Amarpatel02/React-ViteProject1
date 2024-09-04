import { useNavigate } from "react-router-dom"








const AboutPage = ()=>{
    const navigate = useNavigate()
    const goToHome =()=>{
        navigate("/")
    }
    const goToContact =()=>{
        navigate("/contact")

    }
    return(
        <>
        <h3>WellCome to About page</h3>
        <button onClick={goToHome}>Home</button>
        <button onClick={goToContact}>Contact</button>
        </>
    )
}
export default AboutPage