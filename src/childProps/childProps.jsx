



function ChildProp(props){
    const{text,children}=props
    return(
        <>
        <h1>Hello {text}</h1>
        {children}
        </>
    )

}
export default ChildProp