import { useNavigate } from "react-router-dom"




const ErrorScreen = ()=>{
    const navigate = useNavigate()
    const handler = ()=>{
        navigate("/")
    }
    return(
        <>
        <h3>404 page Not Found</h3>
        <button onClick={handler}>Back to HomePage</button>
        </>
    )
}
export default ErrorScreen