import HocExample from "./hocExample"






const HocChildComponent = (count)=>{
    console.log(count)
    return(
        <>
        <button>ClickHere</button>
        </>
    )
}
export default CounterExample(HocChildComponent)