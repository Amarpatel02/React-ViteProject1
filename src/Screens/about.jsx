import { useNavigate } from "react-router-dom"




const AboutScreen = ()=>{
    
        const navigate = useNavigate()
        const handler = ()=>{
            navigate("/")
        }

    return(
        <>
        <h3>Wellocome to About Screen</h3>
        <button onClick={handler}>Back to HomePage</button>
        </>
    )
}
export default AboutScreen