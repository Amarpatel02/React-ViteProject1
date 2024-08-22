const Props = (prop)=>{
    return(
    <div>
        <img src={prop.imgURL} alt={prop.alt} width={prop.width} height={prop.height}/> 
        <h2>{prop.title}</h2>
        <Heading></Heading>

    </div>
    )
}

const Heading =()=>{
  return(
    <h5>Required ingredients</h5>
  )
}
export default Props

export const UnOrder = (props)=>{

    let {list} = props;

    return(
        <ul>
{
list.map((val)=>{
   return <li>{val}</li>
})
}        </ul>
    )
}

